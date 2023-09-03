import { AbsoluteFill, Easing, Img, staticFile } from "remotion";
import { useInterpolate } from "remotion-time";

const Souvenirs = () => {
    const baseFolder = "Souvenirs/";
    const first = staticFile(baseFolder + "1.jpg");
    const second = staticFile(baseFolder + "2.jpg");
    const third = staticFile(baseFolder + "3.jpg");
    const fourth = staticFile(baseFolder + "4.jpg");
    const fifth = staticFile(baseFolder + "5.jpg");
    const sixth = staticFile(baseFolder + "6.jpg");
    const seventh = staticFile(baseFolder + "7.jpg");
    const eight = staticFile(baseFolder + "8.jpg");
    const nine = staticFile(baseFolder + "9.jpg");
    const ten = staticFile(baseFolder + "10.jpg");
    const eleven = staticFile(baseFolder + "11.jpg");
    const twelve = staticFile(baseFolder + "12.jpg");
    const thirteen = staticFile(baseFolder + "13.jpg");
    const fourteen = staticFile(baseFolder + "14.jpg");
    const fifteen = staticFile(baseFolder + "15.jpg");
    const sixteen = staticFile(baseFolder + "16.jpg");
    const rotatingPhotos = [-12, -6, -11, 17, -26, -9, 4, 27, -29, -1, 18, -16, 19, -17, 12, -22]

    const timings = [
        "start", 
        "start + 0.3s", 
        "start + 1.2s", 
        "start + 1.65s", 
        "start + 2.1s", 
        "start + 2.55s", 
        "start + 3s"
    ]; 
    const transformValue = [100, 0, 0, -100, -100, -200, -200];
    const transformInterpolation = useInterpolate(timings, transformValue);
    
    const apparitionImageTimings = ["start", "start + 4.5s"];
    const apparitionImageValues = [0, 16]
    const apparitionImageInterpolation = useInterpolate(apparitionImageTimings, apparitionImageValues, {
        easing: Easing.bezier(.29, .14, 1, .07)
    });

    const pStyles: React.CSSProperties = {
        display: "flex", 
        gap: 30, 
        fontSize: "100px", 
        fontWeight: 600, 
        position: "absolute", 
        top: 0 
    }, containerStyles: React.CSSProperties = {
        display: "flex", 
        backgroundColor: "#0e2a47", 
        alignItems: "center", 
        justifyContent: "center", 
        color: "white"
    }, animContainerStyles: React.CSSProperties = {
        display: "flex", 
        flexDirection: "column",
        height: 100, 
        overflow: "hidden"
    }, animContainerSpanStyles: React.CSSProperties = {
        transform: `translateY(${transformInterpolation}%)`
    };

    return (
        <AbsoluteFill  style={containerStyles}>
            <p style={pStyles}>
                Mais c'est aussi
                <span style={animContainerStyles}>
                  <span style={animContainerSpanStyles}>des découvertes</span>
                  <span style={animContainerSpanStyles}>des souvenirs</span>
                  <span style={animContainerSpanStyles}>des moments incroyables</span>
                </span>
            </p>       

            <div className="souvenir-img-container">
                {apparitionImageInterpolation as number >= 1 ?    
                    <Img 
                        className="souvenir-img"
                        style={{ transform: `rotate(${rotatingPhotos[0]}deg)`, width: 500, height: 500, objectFit: "cover" }} 
                        src={first} 
                    /> : null
                }
                
                {apparitionImageInterpolation as number >= 2 ?    
                    <Img 
                        className="souvenir-img"
                        style={{ transform: `rotate(${rotatingPhotos[1]}deg)`, width: 500, height: 500, objectFit: "cover" }} 
                        src={second} 
                    /> : null
                }

                {apparitionImageInterpolation as number >= 3 ?    
                    <Img 
                        className="souvenir-img"
                        style={{ transform: `rotate(${rotatingPhotos[2]}deg)` }} 
                        src={third} 
                    /> : null
                }

                {apparitionImageInterpolation as number >= 4 ?    
                    <Img 
                        className="souvenir-img"
                        style={{ transform: `rotate(${rotatingPhotos[3]}deg)` }} 
                        src={fourth} 
                    /> : null
                }


                {apparitionImageInterpolation as number >= 5 ?    
                    <Img 
                        className="souvenir-img"
                        style={{ transform: `rotate(${rotatingPhotos[4]}deg)` }} 
                        src={fifth} 
                    /> : null
                }

                {apparitionImageInterpolation as number >= 6 ?    
                    <Img 
                        className="souvenir-img"
                        style={{ transform: `rotate(${rotatingPhotos[5]}deg)` }} 
                        src={sixth} 
                    /> : null
                }

                {apparitionImageInterpolation as number >= 7 ?    
                    <Img 
                        className="souvenir-img"
                        style={{ transform: `rotate(${rotatingPhotos[6]}deg)` }} 
                        src={seventh} 
                    /> : null
                }

                {apparitionImageInterpolation as number >= 8 ?
                    <Img 
                        className="souvenir-img"
                        style={{ transform: `rotate(${rotatingPhotos[7]}deg)` }} 
                        src={eight} 
                    /> : null
                }

                {apparitionImageInterpolation as number >= 9 ?    
                    <Img 
                        className="souvenir-img"
                        style={{ transform: `rotate(${rotatingPhotos[8]}deg)` }} 
                        src={nine} 
                    /> : null
                }

                {apparitionImageInterpolation as number >= 10 ?    
                    <Img 
                        className="souvenir-img"
                        style={{ transform: `rotate(${rotatingPhotos[9]}deg)` }} 
                        src={ten} 
                    /> : null
                }

                {apparitionImageInterpolation as number >= 11 ?    
                    <Img 
                        className="souvenir-img"
                        style={{ transform: `rotate(${rotatingPhotos[10]}deg)` }} 
                        src={eleven} 
                    /> : null
                }
                
                {apparitionImageInterpolation as number >= 12 ?    
                    <Img 
                        className="souvenir-img"
                        style={{ transform: `rotate(${rotatingPhotos[11]}deg)` }} 
                        src={twelve} 
                    /> : null
                }

                {apparitionImageInterpolation as number >= 13 ?    
                    <Img 
                        className="souvenir-img"
                        style={{ transform: `rotate(${rotatingPhotos[12]}deg)` }} 
                        src={thirteen} 
                    /> : null
                }

                {apparitionImageInterpolation as number >= 14 ?    
                    <Img 
                        className="souvenir-img"
                        style={{ transform: `rotate(${rotatingPhotos[13]}deg)` }} 
                        src={fourteen} 
                    /> : null
                }

                {apparitionImageInterpolation as number >= 15 ?    
                    <Img 
                        className="souvenir-img"
                        style={{ transform: `rotate(${rotatingPhotos[14]}deg)` }} 
                        src={fifteen} 
                    />: null
                }

                {apparitionImageInterpolation as number >= 16 ?    
                    <Img 
                        className="souvenir-img"
                        style={{ transform: `rotate(${rotatingPhotos[15]}deg)` }} 
                        src={sixteen} 
                    /> : null
                }
            </div>
        </AbsoluteFill>
    )
}

export default Souvenirs;