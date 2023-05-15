import React,{Component} from "react";
const Context=React.createContext();
export class Provider extends Component{
state = {
    clues:[
      {
        cid:"1",
        cname:"board",
        cdesc:"I get dirty when I become white",
        eid:"8",
      },
      {
        cid:"2",
        cname:"letter A",
        cdesc:"Ancient Egyptians wrote me upside down, creating a symbol that resembled a steer with horns. Whom am I?",
        eid:"5",
      },
      {
        cid:"3",
        cname:"tennis bat",
        cdesc:"I can cause love, but that’s not the ideal outcome. I’m always happy to serve. who am I?",
        eid:"9",
      },
      {
        cid:"4",
        cname:"pen",
        cdesc:"You use to me to write but you cannot erase once you have written. Everyone uses me. Your teacher uses me in red colour. Who am I?",
        eid:"17",
      },
      {
        cid:"5",
        cname:"fridge",
        cdesc:" I am always running, but never get tired or hot. What am I?",
        edesc:"Oops! You reached a dead end .select another clue",
        eid:"19",
      },
      {
        cid:"6",
        cname:"plant",
        cdesc:"You bury me when I am alive,and dig me up when I die.What am I?",
        eid:"11",
      },
      {
        cid:"7",
        cname:"clock",
        cdesc:"I have a face that does not frown and hands that do not wave. I do not walk but move around. What am I?",
        edesc:"Oops! You reached a dead end .select another clue",
        eid:"7",
      },
      {
        cid:"8",
        cname:"insta",
        cdesc:"You mostly use me to make reels and see reels what am I?",
        eid:"12",
      },
      {
        cid:"9",
        cname:"tv",
        cdesc:"I have a plug but I’m not a sink,I can be mounted but I’m not a horse,I’m found in the living room but I’m not a sofa,I have a screen but I’m not a laptop,I have a remote control but I’m not a drone",
        eid:"18",
      },
      {
        cid:"10",
        cname:"table",
        cdesc:" I usually see you two to three times a day,but I'm also a good spot for homework and play.",
        eid:"7",
      },
      {
        cid:"11",
        cname:"bed",
        cdesc:" When the sun has set and your eyes feel like lead, you go here because it’s time for",
        edesc:"Hurray you won the treasure",
      },
      {
        cid:"12",
        cname:"candle",
        cdesc:" I am short when I’m old and tall when I’m young and wind will extinguish me!",
        eid:"4",
      },
      {
        cid:"13",
        cname:"candle",
        cdesc:" My life can be measured in hours, I serve by being devoured. Thin, I am quick. Fat, I am slow, and wind is my foe.",
        eid:"15",
      },
      {
        cid:"14",
        cname:"taj",
        cdesc:"I am built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal with construction starting in 1632 AD and completed in 1648 AD,what am I? ",
        eid:"3",
      },
      {
        cid:"15",
        cname:"colloseum",
        cdesc:" I am in elliptical structure made of stone, concrete, and tuff, and stand for four stories tall at its highest point.I was famously used for gladiator combat.What am I?",
        eid:"2",
      },
      {
        cid:"16",
        cname:"petra",
        cdesc:"I am popularly called The Lost City and also known as rose city.I am featured in Indiana Jones and other movies What am I?",
        edesc:"Hurray you won the treasure",
      },
      {
        cid:"17",
        cname:"seven",
        cdesc:"I am the only prime number preceding a cube.Who am I?",
        eid:"5",
      },
      {
        cid:"18",
        cname:"electricity",
        cdesc:"I  can be found inside a lamp Or on a chandelier In cartoons I’m seen over heads When there’s a great idea.What am I?",
        eid:"6",
      },
      {
        cid:"19",
        cname:"goc",
        cdesc:"I am the largest man-made project in the world. The complete route is over 20,000 km, stretching from the east seaside to the west desert in northern China, winding up and down across mountains and plateaus like a dragon.What am I?",
        eid:"9",
      },
    ]
};
    render() {
        return (
          <Context.Provider value={this.state}>
            {this.props.children}
          </Context.Provider>
        );
      }
}
export const Consumer=Context.Consumer;