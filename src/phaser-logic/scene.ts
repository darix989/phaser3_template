import Phaser from "phaser";

import store from '../redux-logic';
import { setMusic } from '../redux-logic/features/appSettings/appSettingsSlice';
import logoImg from "../assets/logo.png";
import MusicOn from "../assets/Music_ON.png";
import MusicOff from "../assets/Music_OFF.png";
// This track is free to use (even for commercial purposes) with no attribution required. However, linking back is greatly appreciated. You can use the following text:
// https://www.chosic.com/free-music/all/
import riseShine from "../assets/rise-and-shine.mp3";

class playGame extends Phaser.Scene {
  private musicButtonOn!: Phaser.GameObjects.Sprite;
  private musicButtonOff!: Phaser.GameObjects.Sprite;
  private bgMusic!: Phaser.Sound.WebAudioSound;

  constructor() {
    super("PlayGame");
  }
  preload() {
    this.load.image("logo", logoImg);
    this.load.image("sound-on", MusicOn);
    this.load.image("sound-off", MusicOff);
    this.load.audio("bgMusic", riseShine);
  }
  create() {
    const centerW = 1920 / 2;
    const centerH = 1080 / 2;

    this.add.text(centerW - 120, 800, "Phaser button", { fontSize: "30px", color: "blue", align: "left" });
    this.add.text(0, 0, "Phaser/Canvas root (yellow bg)", { fontSize: "30px", color: "blue", align: "left" });

    const logo = this.add.image(centerW, 150, "logo");

    this.musicButtonOn = this.add.sprite(centerW, 700, "sound-on").setInteractive();
    this.musicButtonOff = this.add.sprite(centerW, 700, "sound-off").setVisible(false);

    this.musicButtonOn.on("pointerup", this.onMute, this);
    this.musicButtonOff.on("pointerup", this.onMusicOn, this);

    this.bgMusic = this.game.sound.add("bgMusic") as Phaser.Sound.WebAudioSound;
    this.bgMusic.setVolume(0.1);
    this.bgMusic.setLoop(true);

    this.bgMusic.play();

    store.subscribe(this.onStoreChange.bind(this))

    this.tweens.add({
      targets: logo,
      y: centerH,
      duration: 2000,
      ease: "Power2",
      yoyo: true,
      loop: -1
    });
  }
  onStoreChange(){
    const state = store.getState();
    if(state.appSettings.musicOn && this.musicButtonOff.visible){
      this.onMusicOn();
    } else if(!state.appSettings.musicOn && this.musicButtonOn.visible){
      this.onMute();
    }
  }
  onMute() {
    this.bgMusic.setVolume(0);
    this.musicButtonOn.setVisible(false);
    this.musicButtonOn.disableInteractive();
    this.musicButtonOff.setInteractive();
    this.musicButtonOff.setVisible(true);

    store.dispatch(setMusic(false));

  }
  onMusicOn() {
    this.bgMusic.setVolume(0.1);
    this.musicButtonOff.setVisible(false);
    this.musicButtonOff.disableInteractive();
    this.musicButtonOn.setInteractive();
    this.musicButtonOn.setVisible(true);

    store.dispatch(setMusic(true));
  }
}

export default playGame;
