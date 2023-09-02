type InterpolationInfos = {
    timings: string[];
    transformValue: number[];
}

const getInterpolationValue: (sequenceNumber: number) => InterpolationInfos = (sequenceNumber: number): InterpolationInfos => {
    let timings: string[], transformValue: number[];

    if (sequenceNumber === 0) {
        timings = [
            "start", 
            "start + 0.3s", 
            "start + 1.2s", 
            "start + 1.65s", 
            "start + 2.1s", 
            "start + 2.55s", 
            "start + 3s"
        ]; 
        transformValue = [100, 0, 0, -100, -100, -200, -200];
    } else if (sequenceNumber === 1) {
        timings = [
            "start", 
            "start + 0.3s", 
            "start + 0.6s", 
            "start + 1s", 
        ]; 
        transformValue = [-200, -200, -100, -100];
    } else {
        timings = [
            "start", 
            "start + 0.3s", 
            "start + 0.6s", 
            "start + 1s", 
        ]; 
        transformValue = [-100, -100, 0, 0];
    }

    return { timings, transformValue }
}

export default getInterpolationValue;