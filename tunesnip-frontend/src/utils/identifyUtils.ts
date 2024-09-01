import { AUDIO_CONFIG, RECORDING_DURATION, INTERVAL_DURATION, TIMESLICE } from "./constants";

export const identifySong = (setIsDetecting: React.Dispatch<React.SetStateAction<boolean>>) => {
    // listen for 
    setIsDetecting(true);
    console.log("start recording...");

    // the section below is logic for recording --------------------------------------------
    const bufferToBase64 = (buffer: AudioBuffer) => {
        let channelData = buffer.getChannelData(0);
        let sampleNum = channelData.length;
        let rawData = new Int16Array(sampleNum);

        for (let i = 0; i < sampleNum; i++) {
            let sampleValue = channelData[i];
            rawData[i] =
                sampleValue < 0 ? sampleValue * 0x8000 : sampleValue * 0x7fff;
        }

        const binaryString = rawData.reduce(
            (acc, val) => acc + String.fromCharCode(val & 0xff, (val >> 8) & 0xff),
            ""
        );
        return btoa(binaryString);
    };

    // recording
    navigator.mediaDevices
        .getUserMedia({ audio: AUDIO_CONFIG, video: false })
        .then((stream) => {
            let mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start(TIMESLICE);

            let audioChunks: BlobPart[] = [];
            mediaRecorder.addEventListener("dataavailable", (event) => {
                audioChunks.push(event.data);
            });

            mediaRecorder.addEventListener("stop", async () => {
                console.log("Recording ended");
            });

            // detect every 3 seconds within 30 seconds
            const intervalId = setInterval(() => {
                const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
                let fileReader = new FileReader();
                fileReader.readAsArrayBuffer(audioBlob);
                fileReader.onloadend = () => {
                    let arrayBuffer = fileReader.result as ArrayBuffer;
                    let audioContext = new AudioContext();
                    audioContext.decodeAudioData(arrayBuffer).then((buffer) => {
                        let base64 = bufferToBase64(buffer);
                        // async -> song found! -> setDetected(true) -> break the interval and reset everything.
                        console.log(base64);
                    });
                };

            }, INTERVAL_DURATION);

            // stop recording after 30 seconds
            setTimeout(() => {
                mediaRecorder.stop();
                clearInterval(intervalId);
            }, RECORDING_DURATION);
        })
        .catch((error) => {
            console.error('Error accessing microphone:', error);
        });
}