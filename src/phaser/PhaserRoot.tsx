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
            parent: "phaser-parent",
            width: 800,
            height: 600,
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