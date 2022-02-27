import React, {useState, useEffect} from "react";
import Phaser from "phaser";
import playGame from "./scene";

const PhaserRoot = () => {
    // Component centralized reference to the phaser instance if needed.
    const [phaser, setPhaser] = useState<Phaser.Game>(); 

    // Create a new Phaser.Game instance after the initial render. 
    useEffect(() => {
        let _phaser = new Phaser.Game({
            type: Phaser.AUTO,
            scale: {
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH,
                parent: "phaser-parent",
                width: 1920,
                height: 1080
            },
            backgroundColor: '#ffd13b',
            scene: [playGame],
            // physics: {
            //     default: 'arcade',
            //     arcade: {
            //         gravity: { y: 0 },
            //         debug: true
            //     }
            // },
            // scale: {
            //     zoom: 2,
            // }
        });
        setPhaser(_phaser);
    }, []);

    return <div id="phaser-parent"></div>
}
  
export default PhaserRoot;