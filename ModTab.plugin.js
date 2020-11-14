//META{"name":"ExampleLibraryPlugin", "authorId":"575933571186032641", "invite":"TQ2dePQ", "website":"https://github.com/ali0sam"}*//
//import {DiscordModules as Modules} from "modules";
class ExampleLibraryPlugin {
    
    getName() {return "Mod Tab";}
    getDescription() {return "start plugin and see new tabs in setting";}
    getVersion() {return "0.0.1";}
    getAuthor() {return "ali_s";}
    
    


    start() {
        if (!global.ZeresPluginLibrary) return window.BdApi.alert("Library Missing",`The library plugin needed for ${this.getName()} is missing.<br /><br /> <a href="https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js" target="_blank">Click here to download the library!</a>`);
        ZLibrary.PluginUpdater.checkForUpdate(this.getName(), this.getVersion(), "LINK_TO_RAW_CODE");
        
        function byProperties(props, filter = m => m) {
            return module => {
                const component = filter(module);
                if (!component) return false;
                return props.every(property => component[property] !== undefined);
            };
        }
        
        function newDev() {
            const filter = byProperties(["isDeveloper"]);
            const modules = webpackJsonp.push([[], {a: (m, e, t) => m.exports = t.c},[ ['a'] ]]);
            for (const index in modules) {
                const {exports} = modules[index];
                if (!exports) continue;
                if (exports.__esModule && exports.default && filter(exports.default))  {
                    Object.defineProperty(exports.default, 'isDeveloper', { configurable: true, writable: true, value: 1 });
                }
            }
        }
        
        newDev();
        window.BdApi.alert("Activated",`now open setting panel again`);        
        

    }



    stop() {

    }
}
