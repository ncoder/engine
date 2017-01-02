/**
 * @name pc
 * @namespace
 * @description Root namespace for the PlayCanvas Engine
 * @preserve PlayCanvas Engine v__CURRENT_SDK_VERSION__ revision __REVISION__
 * http://playcanvas.com
 * Copyright 2011-2016 PlayCanvas Ltd. All rights reserved.
 * Do not distribute.
 * Contains: https://github.com/tildeio/rsvp.js - see page for license information
// #ifdef DEBUG
 * DEBUG BUILD
// #endif
// #ifdef PROFILER
 * PROFILER BUILD
// #endif
 */
declare module pc {
   /**
    * @name pc.Node
    * @class A animation node has a name and contains an array of keyframes.
    * @description Create a new animation node
    * @returns {pc.Node} A new pc.Node.
    */
   class Node {
       /**
        * @name pc.Node
        * @class A animation node has a name and contains an array of keyframes.
        * @description Create a new animation node
        * @returns {pc.Node} A new pc.Node.
        */
       constructor();

   }

   /**
    * @name pc.Animation
    * @property {String} name Human-readable name of the animation
    * @property {Number} duration Duration of the animation in seconds.
    * @class An animation is a sequence of keyframe arrays which map to the nodes of a skeletal hierarchy.
    * It controls how the nodes of the hierarchy are transformed over time.
    * @returns {pc.Animation} A new pc.Animation object.
    */
   class Animation {
       /**
        * @name pc.Animation
        * @property {String} name Human-readable name of the animation
        * @property {Number} duration Duration of the animation in seconds.
        * @class An animation is a sequence of keyframe arrays which map to the nodes of a skeletal hierarchy.
        * It controls how the nodes of the hierarchy are transformed over time.
        * @returns {pc.Animation} A new pc.Animation object.
        */
       constructor();

       /**
        * @private
        * @deprecated
        * @function
        * @name pc.Animation#getDuration
        * @description Returns the duration of the animation in seconds.
        * @returns {Number} The duration of the animation in seconds.
        * @author Will Eastcott
        */
       private getDuration(): Number;

       /**
        * @private
        * @deprecated
        * @function
        * @name pc.Animation#getName
        * @description Returns the human-readable name of the animation.
        * @returns {String} The name of the animation.
        * @author Will Eastcott
        */
       private getName(): String;

       /**
        * @function
        * @name pc.Animation#getNode
        * @description Gets a {@link pc.Node} by name
        * @param {String} name The name of the pc.Node
        * @returns {pc.Node} The pc.Node with the specified name
        * @author Will Eastcott
        */
       getNode(name: String): pc.Node;

       /**
        * @readonly
        * @name pc.Animation#nodes
        * @type pc.Node[]
        * @description A read-only property to get array of animation nodes
        */
       nodes: pc.Node[];

       /**
        * @private
        * @deprecated
        * @function
        * @name pc.Animation#getNodes
        * @description Gets the {@link pc.Node}s of this {@link pc.Animation}
        * @returns {pc.Node[]} An array of nodes.
        * @author Will Eastcott
        */
       private getNodes(): pc.Node[];

       /**
        * @private
        * @deprecated
        * @function
        * @name pc.Animation#setDuration
        * @description Sets the duration of the specified animation in seconds.
        * @param {Number} duration The duration of the animation in seconds.
        * @author Will Eastcott
        */
       private setDuration(duration: Number): void;

       /**
        * @private
        * @deprecated
        * @function
        * @name pc.Animation#setName
        * @description Sets the human-readable name of the specified animation.
        * @param {String} name The new name for the animation.
        * @author Will Eastcott
        */
       private setName(name: String): void;

       /**
        * @function
        * @name pc.Animation#addNode
        * @description Adds a node the the internal nodes array.
        * @param {pc.Node} node The node to add.
        * @author Will Eastcott
        */
       addNode(node: pc.Node): void;

   }

   /**
    * @name pc.Skeleton
    * @property {Boolean} looping Determines whether skeleton is looping its animation.
    * @class Represents a skeleton used to play animations.
    * @param {pc.GraphNode} graph The root pc.GraphNode of the skeleton.
    */
   class Skeleton {
       /**
        * @name pc.Skeleton
        * @property {Boolean} looping Determines whether skeleton is looping its animation.
        * @class Represents a skeleton used to play animations.
        * @param {pc.GraphNode} graph The root pc.GraphNode of the skeleton.
        */
       constructor(graph: pc.GraphNode);

       /**
        * @function
        * @name pc.Skeleton#addTime
        * @description Progresses the animation assigned to the specified skeleton by the
        * supplied time delta. If the delta takes the animation passed its end point, if
        * the skeleton is set to loop, the animation will continue from the beginning.
        * Otherwise, the animation's current time will remain at its duration (i.e. the
        * end).
        * @param {Number} delta The time in seconds to progress the skeleton's animation.
        * @author Will Eastcott
        */
       addTime(delta: Number): void;

       /**
        * @function
        * @name pc.Skeleton#blend
        * @description Blends two skeletons together.
        * @param {pc.Skeleton} skel1 Skeleton holding the first pose to be blended.
        * @param {pc.Skeleton} skel2 Skeleton holding the second pose to be blended.
        * @param {Number} alpha The value controlling the interpolation in relation to the two input
        * skeletons. The value is in the range 0 to 1, 0 generating skel1, 1 generating skel2 and anything
        * in between generating a spherical interpolation between the two.
        * @author Will Eastcott
        */
       blend(skel1: pc.Skeleton, skel2: pc.Skeleton, alpha: Number): void;

       /**
        * @name pc.Skeleton#animation
        * @type pc.Animation
        * @description Animation currently assigned to skeleton.
        */
       animation: pc.Animation;

       /**
        * @private
        * @deprecated
        * @function
        * @name pc.Skeleton#getAnimation
        * @description Returns the animation currently assigned to the specified skeleton.
        * @returns {pc.Animation} The animation set on the skeleton.
        * @author Will Eastcott
        */
       private getAnimation(): pc.Animation;

       /**
        * @name pc.Skeleton#currentTime
        * @type Number
        * @description Current time of currently active animation in seconds.
        * This value is between zero and the duration of the animation.
        */
       currentTime: Number;

       /**
        * @private
        * @deprecated
        * @function
        * @name pc.Skeleton#getCurrentTime
        * @description Returns the current time of the currently active animation as set on
        * the specified skeleton. This value will be between zero and the duration of the
        * animation.
        * @returns {Number} The current time of the animation set on the skeleton.
        * @author Will Eastcott
        */
       private getCurrentTime(): Number;

       /**
        * @private
        * @deprecated
        * @function
        * @name pc.Skeleton#setCurrentTime
        * @description Sets the current time of the currently active animation as set on
        * the specified skeleton. This value must be between zero and the duration of the
        * animation.
        * @param {Number} time The current time of the animation set on the skeleton.
        * @author Will Eastcott
        */
       private setCurrentTime(time: Number): void;

       /**
        * @readonly
        * @name pc.Skeleton#numNodes
        * @type Number
        * @description Read-only property that returns number of nodes of a skeleton.
        */
       numNodes: Number;

       /**
        * @private
        * @deprecated
        * @function
        * @name pc.Skeleton#getNumNodes
        * @description Returns the number of nodes held by the specified skeleton.
        * @returns {Number} The number of nodes held by the specified skeleton.
        * @author Will Eastcott
        */
       private getNumNodes(): Number;

       /**
        * @private
        * @deprecated
        * @function
        * @name pc.Skeleton#setAnimation
        * @description Sets an animation on the specified skeleton.
        * @param {pc.Animation} animation The animation to set on the skeleton.
        * @author Will Eastcott
        */
       private setAnimation(animation: pc.Animation): void;

       /**
        * @function
        * @name pc.Skeleton#setGraph
        * @description Links a skeleton to a node hierarchy. The nodes animated skeleton are
        * then subsequently used to drive the local transformation matrices of the node
        * hierarchy.
        * @param {pc.GraphNode} graph The root node of the graph that the skeleton is to drive.
        * @author Will Eastcott
        */
       setGraph(graph: pc.GraphNode): void;

       /**
        * @function
        * @name pc.Skeleton#updateGraph
        * @description Synchronizes the currently linked node hierarchy with the current state of the
        * skeleton. Internally, this function converts the interpolated keyframe at each node in the
        * skeleton into the local transformation matrix at each corresponding node in the linked node
        * hierarchy.
        * @author Will Eastcott
        */
       updateGraph(): void;

       /**
        * @private
        * @deprecated
        * @function
        * @name pc.Skeleton#setLooping
        * @description Specified whether a skeleton should loop its animation or not. If the animation
        * loops, it will wrap back to the start when adding time to the skeleton beyond the duration
        * of the animation. Otherwise, the animation stops at its end after a single play through.
        * @param {Boolean} looping True to cause the animation to loop back to the start on completion
        * and false otherwise.
        * @author Will Eastcott
        */
       private setLooping(looping: Boolean): void;

       /**
        * @private
        * @deprecated
        * @function
        * @name pc.Skeleton#getLooping
        * @description Queries the specified skeleton to determine whether it is looping its animation.
        * @returns {Boolean} True if the skeleton is looping the animation, false otherwise.
        * @author Will Eastcott
        */
       private getLooping(): Boolean;

   }

   /**
    * @name pc.AssetRegistry
    * @class Container for all assets that are available to this application
    * @description Create an instance of an AssetRegistry.
    * Note: PlayCanvas scripts are provided with an AssetRegistry instance as 'app.assets'.
    * @param {pc.ResourceLoader} loader The ResourceLoader used to to load the asset files.
    * @property {String} prefix A URL prefix that will be added to all asset loading requests.
    */
   class AssetRegistry {
       /**
        * @name pc.AssetRegistry
        * @class Container for all assets that are available to this application
        * @description Create an instance of an AssetRegistry.
        * Note: PlayCanvas scripts are provided with an AssetRegistry instance as 'app.assets'.
        * @param {pc.ResourceLoader} loader The ResourceLoader used to to load the asset files.
        * @property {String} prefix A URL prefix that will be added to all asset loading requests.
        */
       constructor(loader: pc.ResourceLoader);

       /**
        * @function
        * @name pc.AssetRegistry#list
        * @description Create a filtered list of assets from the registry
        * @param {Object} filters Properties to filter on, currently supports: 'preload: true|false'
        * @returns {pc.Asset[]} The filtered list of assets.
        */
       list(filters: Object): pc.Asset[];

       /**
        * @function
        * @name pc.AssetRegistry#add
        * @description Add an asset to the registry
        * @param {pc.Asset} asset The asset to add
        * @example
        * var asset = new pc.Asset("My Asset", "texture", {url: "../path/to/image.jpg"});
        * app.assets.add(asset);
        */
       add(asset: pc.Asset): void;

       /**
        * @function
        * @name pc.AssetRegistry#remove
        * @description Remove an asset from the registry
        * @param {pc.Asset} asset The asset to remove
        * @example
        * var asset = app.assets.get(100);
        * app.assets.remove(asset);
        */
       remove(asset: pc.Asset): void;

       /**
        * @function
        * @name pc.AssetRegistry#get
        * @description Retrieve an asset from the registry by its id field
        * @param {Number} id the id of the asset to get
        * @returns {pc.Asset} The asset
        * @example
        * var asset = app.assets.get(100);
        */
       get(id: Number): pc.Asset;

       /**
        * @function
        * @name pc.AssetRegistry#getByUrl
        * @description Retrieve an asset from the registry by it's file's URL field
        * @param {String} url The url of the asset to get
        * @returns {pc.Asset} The asset
        * @example
        * var asset = app.assets.getByUrl("../path/to/image.jpg");
        */
       getByUrl(url: String): pc.Asset;

       /**
        * @function
        * @name pc.AssetRegistry#load
        * @description Load the asset's file from a remote source. Listen for "load" events on the asset to find out when it is loaded
        * @param {pc.Asset} asset The asset to load
        * @example
        * // load some assets
        * var toload = [app.assets.find("My Asset"), app.assets.find("Another Asset")]
        * var count = 0;
        * for (var i = 0; i < toload.length; i++) {
        *     var asset = toload[i];
        *     asset.ready(function (asset) {
        *         count++;
        *         if (count === toload.length) {
        *             // done
        *         }
        *     });
        *     app.assets.load(asset)
        * }
        */
       load(asset: pc.Asset): void;

       /**
        * @function
        * @name pc.AssetRegistry#loadFromUrl
        * @description Use this to load and create an asset if you don't have assets created. Usually you would only use this
        * if you are not integrated with the PlayCanvas Editor
        * @param {String} url The url to load
        * @param {String} type The type of asset to load
        * @param {Function} callback Function called when asset is loaded, passed (err, asset), where err is null if no errors were encountered
        * @example
        * app.assets.loadFromUrl("../path/to/texture.jpg", "texture", function (err, asset) {
        *     var texture = asset.resource;
        * });
        */
       loadFromUrl(url: String, type: String, callback: (() => any)): void;

       /**
        * @function
        * @name pc.AssetRegistry#findAll
        * @description Return all Assets with the specified name and type found in the registry
        * @param {String} name The name of the Assets to find
        * @param {String} [type] The type of the Assets to find
        * @returns {pc.Asset[]} A list of all Assets found
        * @example
        * var assets = app.assets.findAll("myTextureAsset", "texture");
        * console.log("Found " + assets.length + " assets called " + name);
        */
       findAll(name: String, type?: String): pc.Asset[];

       /**
        * @function
        * @name pc.AssetRegistry#findByTag
        * @description Return all Assets that satisfy the search query.
        * Query can be simply a string, or comma separated strings,
        * to have inclusive results of assets that match at least one query.
        * A query that consists of an array of tags can be used to match assets that have each tag of array
        * @param {String} tag Name of a tag or array of tags
        * @returns {pc.Asset[]} A list of all Assets matched query
        * @example
        * var assets = app.assets.findByTag("level-1");
        * // returns all assets that tagged by `level-1`
        * @example
        * var assets = app.assets.findByTag("level-1", "level-2");
        * // returns all assets that tagged by `level-1` OR `level-2`
        * @example
        * var assets = app.assets.findByTag([ "level-1", "monster" ]);
        * // returns all assets that tagged by `level-1` AND `monster`
        * @example
        * var assets = app.assets.findByTag([ "level-1", "monster" ], [ "level-2", "monster" ]);
        * // returns all assets that tagged by (`level-1` AND `monster`) OR (`level-2` AND `monster`)
        */
       findByTag(tag: String): pc.Asset[];

       /**
        * @function
        * @name pc.AssetRegistry#filter
        * @description Return all Assets that satisfy filter callback
        * @param {Function} callback The callback function that is used to filter assets, return `true` to include asset to result list
        * @returns {pc.Asset[]} A list of all Assets found
        * @example
        * var assets = app.assets.filter(function(asset) {
        *     return asset.name.indexOf('monster') !== -1;
        * });
        * console.log("Found " + assets.length + " assets, where names contains 'monster'");
        */
       filter(callback: (() => any)): pc.Asset[];

       /**
        * @function
        * @name pc.AssetRegistry#find
        * @description Return the first Asset with the specified name and type found in the registry
        * @param {String} name The name of the Asset to find
        * @param {String} [type] The type of the Asset to find
        * @returns {pc.Asset} A single Asset or null if no Asset is found
        * @example
        * var asset = app.assets.find("myTextureAsset", "texture");
        */
       find(name: String, type?: String): pc.Asset;

   }

   /**
    * @name pc.Asset
    * @class An asset record of a file or data resource that can be loaded by the engine.
    * The asset contains three important fields:<br/>
    * <strong>file</strong>: contains the details of a file (filename, url) which contains the resource data, e.g. an image file for a texture asset<br/>
    * <strong>data</strong>: contains a JSON blob which contains either the resource data for the asset (e.g. material data) or additional data for the file (e.g. material mappings for a model)<br/>
    * <strong>resource</strong>: contains the final resource when it is loaded. (e.g. a {@link pc.StandardMaterial} or a {@link pc.Texture})<br/>
    *
    * See the {@link pc.AssetRegistry} for details on loading resources from assets.
    * @property {String} name The name of the asset
    * @property {Number} id The asset id
    * @property {String} type The type of the asset. One of ["animation", "audio", "binary", "cubemap", "css", "font", "json", "html", "material", "model", "script", "shader", "text", "texture"]
    * @property {pc.Tags} tags Interface for tagging. Allows to find assets by tags using {@link pc.AssetRegistry#findByTag} method.
    * @property {Object} file The file details or null if no file
    * @property {String} [file.url] The URL of the resource file that contains the asset data
    * @property {String} [file.filename] The filename of the resource file
    * @property {Number} [file.size] The size of the resource file
    * @property {String} [file.hash] The MD5 hash of the resource file data and the Asset data field
    * @property {Object} data JSON data that contains either the complete resource data (e.g. in the case of a material) or additional data (e.g. in the case of a model it contains mappings from mesh to material)
    * @property {Object} resource A reference to the resource when the asset is loaded. e.g. a {@link pc.Texture} or a {@link pc.Model}
    * @property {Array} resources A reference to the resources of the asset when it's loaded. An asset can hold more runtime resources than one e.g. cubemaps
    * @property {Boolean} preload If true the asset will be loaded during the preload phase of application set up.
    * @property {Boolean} loaded True if the resource is loaded. e.g. if asset.resource is not null
    * @property {pc.AssetRegistry} registry The asset registry that this Asset belongs to
    * @description Create a new Asset record. Generally, Assets are created in the loading process and you won't need to create them by hand.
    * @param {String} name A non-unique but human-readable name which can be later used to retrieve the asset.
    * @param {String} type Type of asset. One of ["animation", "audio", "binary", "cubemap", "css", "font", "json", "html", "material", "model", "script", "shader", "text", "texture"]
    * @param {Object} file Details about the file the asset is made from. At the least must contain the 'url' field. For assets that don't contain file data use null.
    * @example
    * var file = {
    *   filename: "filename.txt",
    *   url: "/example/filename.txt",
    * }
    * @param {Object} [data] JSON object with additional data about the asset (e.g. for texture and model assets) or contains the asset data itself (e.g. in the case of materials)
    * @example
    * var asset = new pc.Asset("a texture", "texture", {
    *     url: "http://example.com/my/assets/here/texture.png"
    * });
    */
   class Asset {
       /**
        * @name pc.Asset
        * @class An asset record of a file or data resource that can be loaded by the engine.
        * The asset contains three important fields:<br/>
        * <strong>file</strong>: contains the details of a file (filename, url) which contains the resource data, e.g. an image file for a texture asset<br/>
        * <strong>data</strong>: contains a JSON blob which contains either the resource data for the asset (e.g. material data) or additional data for the file (e.g. material mappings for a model)<br/>
        * <strong>resource</strong>: contains the final resource when it is loaded. (e.g. a {@link pc.StandardMaterial} or a {@link pc.Texture})<br/>
        *
        * See the {@link pc.AssetRegistry} for details on loading resources from assets.
        * @property {String} name The name of the asset
        * @property {Number} id The asset id
        * @property {String} type The type of the asset. One of ["animation", "audio", "binary", "cubemap", "css", "font", "json", "html", "material", "model", "script", "shader", "text", "texture"]
        * @property {pc.Tags} tags Interface for tagging. Allows to find assets by tags using {@link pc.AssetRegistry#findByTag} method.
        * @property {Object} file The file details or null if no file
        * @property {String} [file.url] The URL of the resource file that contains the asset data
        * @property {String} [file.filename] The filename of the resource file
        * @property {Number} [file.size] The size of the resource file
        * @property {String} [file.hash] The MD5 hash of the resource file data and the Asset data field
        * @property {Object} data JSON data that contains either the complete resource data (e.g. in the case of a material) or additional data (e.g. in the case of a model it contains mappings from mesh to material)
        * @property {Object} resource A reference to the resource when the asset is loaded. e.g. a {@link pc.Texture} or a {@link pc.Model}
        * @property {Array} resources A reference to the resources of the asset when it's loaded. An asset can hold more runtime resources than one e.g. cubemaps
        * @property {Boolean} preload If true the asset will be loaded during the preload phase of application set up.
        * @property {Boolean} loaded True if the resource is loaded. e.g. if asset.resource is not null
        * @property {pc.AssetRegistry} registry The asset registry that this Asset belongs to
        * @description Create a new Asset record. Generally, Assets are created in the loading process and you won't need to create them by hand.
        * @param {String} name A non-unique but human-readable name which can be later used to retrieve the asset.
        * @param {String} type Type of asset. One of ["animation", "audio", "binary", "cubemap", "css", "font", "json", "html", "material", "model", "script", "shader", "text", "texture"]
        * @param {Object} file Details about the file the asset is made from. At the least must contain the 'url' field. For assets that don't contain file data use null.
        * @example
        * var file = {
        *   filename: "filename.txt",
        *   url: "/example/filename.txt",
        * }
        * @param {Object} [data] JSON object with additional data about the asset (e.g. for texture and model assets) or contains the asset data itself (e.g. in the case of materials)
        * @example
        * var asset = new pc.Asset("a texture", "texture", {
        *     url: "http://example.com/my/assets/here/texture.png"
        * });
        */
       constructor(name: String, type: String, file: Object, data?: Object);

       /**
        * @name pc.Asset#getFileUrl
        * @function
        * @description Return the URL required to fetch the file for this asset.
        * @returns {String} The URL
        * @example
        * var assets = app.assets.find("My Image", "texture");
        * var img = "&lt;img src='" + assets[0].getFileUrl() + "'&gt;";
        */
       getFileUrl(): String;

       /**
        * @function
        * @name pc.Asset#ready
        * @description Take a callback which is called as soon as the asset is loaded. If the asset is already loaded the callback is called straight away
        * @param {Function} callback The function called when the asset is ready. Passed the (asset) arguments
        * @example
        * var asset = app.assets.find("My Asset");
        * asset.ready(function (asset) {
        *   // asset loaded
        * });
        * app.assets.load(asset);
        */
       ready(callback: (() => any)): void;

       /**
        * @function
        * @name pc.Asset#unload
        * @description Destroys the associated resource and marks asset as unloaded.
        * @example
        * var asset = app.assets.find("My Asset");
        * asset.unload();
        * // asset.resource is null
        */
       unload(): void;

   }

   /**
    * @private
    * @name pc.Channel
    * @class A channel is created when the pc.AudioManager begins playback of a pc.Sound. Usually created internally by
    * pc.AudioManager#playSound or pc.AudioManager#playSound3d. Developers usually won't have to create Channels manually.
    * @param {pc.AudioManager} manager The AudioManager instance
    * @param {pc.Sound} sound The sound to playback
    * @param {Object} options
    * @param {Number} [options.volume=1] The playback volume, between 0 and 1.
    * @param {Number} [options.pitch=1] The relative pitch, default of 1, plays at normal pitch.
    * @param {Boolean} [options.loop=false] Whether the sound should loop when it reaches the end or not.
    */
   class Channel {
       /**
        * @private
        * @name pc.Channel
        * @class A channel is created when the pc.AudioManager begins playback of a pc.Sound. Usually created internally by
        * pc.AudioManager#playSound or pc.AudioManager#playSound3d. Developers usually won't have to create Channels manually.
        * @param {pc.AudioManager} manager The AudioManager instance
        * @param {pc.Sound} sound The sound to playback
        * @param {Object} options
        * @param {Number} [options.volume=1] The playback volume, between 0 and 1.
        * @param {Number} [options.pitch=1] The relative pitch, default of 1, plays at normal pitch.
        * @param {Boolean} [options.loop=false] Whether the sound should loop when it reaches the end or not.
        */
       constructor(manager: pc.AudioManager, sound: pc.Sound, options: { volume: Number, pitch: Number, loop: Boolean });

       /**
        * @private
        * @function
        * @name pc.Channel#play
        * @description Begin playback of sound
        */
       private play(): void;

       /**
        * @private
        * @function
        * @name pc.Channel#pause
        * @description Pause playback of sound. Call unpause() to resume playback from the same position
        */
       private pause(): void;

       /**
        * @private
        * @function
        * @name pc.Channel#unpause
        * @description Resume playback of the sound. Playback resumes at the point that the audio was paused
        */
       private unpause(): void;

       /**
        * @private
        * @function
        * @name pc.Channel#stop
        * @description Stop playback of sound. Calling play() again will restart playback from the beginning of the sound.
        */
       private stop(): void;

       /**
        * @private
        * @function
        * @name pc.Channel#setLoop
        * @description Enable/disable the loop property to make the sound restart from the beginning when it reaches the end.
        */
       private setLoop(): void;

       /**
        * @private
        * @function
        * @name pc.Channel#setVolume
        * @description Set the volume of playback between 0 and 1.
        */
       private setVolume(): void;

       /**
        * @private
        * @function
        * @name pc.Channel#getVolume
        * @description Get the current value for the volume. Between 0 and 1.
        */
       private getVolume(): void;

       /**
        * @private
        * @function
        * @name pc.Channel#getLoop
        * @description Get the current looping state of the Channel
        */
       private getLoop(): void;

       /**
        * @private
        * @function
        * @name pc.Channel#getPitch
        * @description Get the current pitch of the Channel
        */
       private getPitch(): void;

       /**
        * @private
        * @function
        * @name pc.Channel#onManagerVolumeChange
        * @description Handle the manager's 'volumechange' event.
        */
       private onManagerVolumeChange(): void;

       /**
        * @private
        * @function
        * @name pc.Channel#onManagerSuspend
        * @description Handle the manager's 'suspend' event.
        */
       private onManagerSuspend(): void;

       /**
        * @private
        * @function
        * @name pc.Channel#onManagerResume
        * @description Handle the manager's 'resume' event.
        */
       private onManagerResume(): void;

   }

   /**
    * @name pc.Color
    * @class Representation of an RGBA color
    * @description Create a new Color object
    * @param {Number} r The value of the red component (0-1)
    * @param {Number} g The value of the green component (0-1)
    * @param {Number} b The value of the blue component (0-1)
    * @param {Number} [a] The value of the alpha component (0-1)
    * @property {Number} r The red component of the color
    * @property {Number} g The green component of the color
    * @property {Number} b The blue component of the color
    * @property {Number} a The alpha component of the color
    */
   class Color {
       /**
        * @name pc.Color
        * @class Representation of an RGBA color
        * @description Create a new Color object
        * @param {Number} r The value of the red component (0-1)
        * @param {Number} g The value of the green component (0-1)
        * @param {Number} b The value of the blue component (0-1)
        * @param {Number} [a] The value of the alpha component (0-1)
        * @property {Number} r The red component of the color
        * @property {Number} g The green component of the color
        * @property {Number} b The blue component of the color
        * @property {Number} a The alpha component of the color
        */
       constructor(r: Number, g: Number, b: Number, a?: Number);

       /**
        * @function
        * @name pc.Color#clone
        * @description Returns a clone of the specified color.
        * @returns {pc.Color} A duplicate color object
        */
       clone(): pc.Color;

       /**
        * @function
        * @name pc.Color#copy
        * @description Copies the contents of a source color to a destination color.
        * @param {pc.Color} rhs A color to copy to the specified color.
        * @returns {pc.Color} Self for chaining
        * @example
        * var src = new pc.Color(1, 0, 0, 1);
        * var dst = new pc.Color();
        *
        * dst.copy(src);
        *
        * console.log("The two colors are " + (dst.equals(src) ? "equal" : "different"));
        */
       copy(rhs: pc.Color): pc.Color;

       /**
        * @function
        * @name pc.Color#set
        * @description Assign values to the color components, including alpha
        * @param {Number} r The value for red (0-1)
        * @param {Number} g The value for blue (0-1)
        * @param {Number} b The value for green (0-1)
        * @param {Number} [a] The value for the alpha (0-1), defaults to 1
        * @returns {pc.Color} Self for chaining
        */
       set(r: Number, g: Number, b: Number, a?: Number): pc.Color;

       /**
        * @function
        * @name pc.Color#fromString
        * @description Set the values of the color from a string representation '#11223344' or '#112233'.
        * @param {String} hex A string representation in the format '#RRGGBBAA' or '#RRGGBB'. Where RR, GG, BB, AA are red, green, blue and alpha values.
        * This is the same format used in HTML/CSS.
        * @returns {pc.Color} Self for chaining
        */
       fromString(hex: String): pc.Color;

       /**
        * @function
        * @name pc.Color#toString
        * @description Converts the color to string form. The format is '#RRGGBBAA', where
        * RR, GG, BB, AA are the red, green, blue and alph values. When the alpha value is not
        * included (the default), this is the same format as used in HTML/CSS.
        * @returns {String} The color in string form.
        * @example
        * var c = new pc.Color(1, 1, 1);
        * // Should output '#ffffffff'
        * console.log(c.toString());
        */
       toString(): String;

   }

   /**
    * @private
    * @name pc.config
    * @description Configuration data made available to the application from the server
    * @param bootstrap
    * @param frame Options set from the containing frame
    * @param frame.url The URL of the containing frame
    * @param api_url
    * @param corazon
    * @param username
    * @param repository
    * @param script_prefix
    */
   var config: any;

   /**
    * Storage for the applications using the PlayCanvas Engine
    */
   var apps: any;

   /**
    * Storage for exported entity data
    */
   var data: any;

   /**
    * @private
    * @function
    * @name pc.unpack()
    * @description Copy a set of common PlayCanvas functions/classes/namespaces into the global namespace
    */
   function unpack()(): void;

   /**
    * @function
    * @private
    * @name pc.makeArray
    * @description Convert an array-like object into a normal array.
    * For example, this is useful for converting the arguments object into an array.
    * @param {Object} arr The array to convert
    * @return {Array} An array
    */
   function makeArray(arr: Object): Array;

   /**
    * @private
    * @function
    * @name pc.type
    * @description Extended typeof() function, returns the type of the object.
    * @param {Object} obj The object to get the type of
    * @return {String} The type string: "null", "undefined", "number", "string", "boolean", "array", "object", "function", "date", "regexp" or "float32array"
    */
   function type(obj: Object): String;

   /**
    * @private
    * @function
    * @name pc.extend
    * @description Merge the contents of two objects into a single object
    * @param {Object} target The target object of the merge
    * @param {Object} ex The object that is merged with target
    * @return {Object} The target object
    * @example
    * var A = {a: function() {console.log(this.a}};
    * var B = {b: function() {console.log(this.b}};
    *
    * pc.extend(A,B);
    * A.a();
    * // logs "a"
    * A.b();
    * // logs "b"
    */
   function extend(target: Object, ex: Object): Object;

   /**
    * @private
    * @function
    * @name pc.isDefined
    * @description Return true if the Object is not undefined
    * @param {Object} o The Object to test
    * @returns {Boolean} True if the Object is not undefined
    */
   function isDefined(o: Object): Boolean;

   /**
    * @private
    * @name pc._typeLookup
    * @function
    * @description Create look up table for types
    */
   function _typeLookup(): void;

   /**
    * @name pc.debug
    * @private
    * @namespace
    */
   module debug {
       /**
        * @name pc.debug.display
        * @private
        * @description Display an object and it's data in a table on the page
        * @param {Object} data
        */
       var display: any;

   }

   /**
    * @name pc.events
    * @namespace
    * @description Extend any normal object with events
    *
    * @example var o = {};
    * o = pc.extend(o, pc.events);
    *
    * // attach event
    * o.on("event_name", function() {
    *   alert('event_name fired');
    * }, this);
    *
    * // fire event
    * o.fire("event_name");
    *
    * // detach all events from object
    * o.off('event_name');
    */
   module events {
       /**
        * @function
        * @name pc.events.attach
        * @description Attach event methods 'on', 'off', 'fire' and 'hasEvent' to the target object
        * @param  {Object} target The object to add events to.
        * @return {Object} The target object
        */
       function attach(target: Object): Object;

       /**
        * @function
        * @name pc.events.on
        * @description Attach an event handler to an event
        * @param {String} name Name of the event to bind the callback to
        * @param {Function} callback Function that is called when event is fired. Note the callback is limited to 8 arguments.
        * @param {Object} [scope] Object to use as 'this' when the event is fired, defaults to current this
        * @example var o = {};
        * pc.events.attach(o);
        * o.on('event_name', function (a, b) {
        *   console.log(a + b);
        * });
        * o.fire('event_name', 1, 2); // prints 3 to the console
        */
       function on(name: String, callback: (() => any), scope?: Object): void;

       /**
        * @function
        * @name pc.events.off
        * @description Detach an event handler from an event. If callback is not provided then all callbacks are unbound from the event,
        * if scope is not provided then all events with the callback will be unbound.
        * @param {String} name Name of the event to unbind
        * @param {Function} [callback] Function to be unbound
        * @param {Object} [scope] Scope that was used as the this when the event is fired
        * @example
        * var handler = function () {
        * };
        * var o = {};
        * pc.events.attach(o);
        * o.on('event_name', handler);
        *
        * o.off('event_name'); // Remove all events called 'event_name'
        * o.off('event_name', handler); // Remove all handler functions, called 'event_name'
        * o.off('event_name', handler, this); // Remove all hander functions, called 'event_name' with scope this
        */
       function off(name: String, callback?: (() => any), scope?: Object): void;

       /**
        * @function
        * @name pc.events.fire
        * @description Fire an event, all additional arguments are passed on to the event listener
        * @param {Object} name Name of event to fire
        * @param {*} [...] Arguments that are passed to the event handler
        * @example
        * var o = {};
        * pc.events.attach(o);
        * o.on('event_name', function (msg) {
        *   alert('event_name fired: ' + msg);
        * });
        * o.fire('event_name', 'This is the message');
        */
       function fire(name: Object): void;

       /**
        * @function
        * @name pc.events.hasEvent
        * @description Test if there are any handlers bound to an event name
        * @param {String} name The name of the event to test
        * @example
        * var o = {};
        * pc.events.attach(o); // add events to o
        * o.on('event_name', function () {}); // bind an event to 'event_name'
        * o.hasEvent('event_name'); // returns true
        */
       function hasEvent(name: String): void;

   }

   /**
    * @name pc.guid
    * @namespace
    * @description Basically a very large random number (128-bit) which means the probability of creating two that clash is vanishingly small.
    * GUIDs are used as the unique identifiers for Entities.
    */
   module guid {
       /**
        * @function
        * @name pc.guid.create
        * @description Create an RFC4122 version 4 compliant GUID
        * @return {String} A new GUID
        */
       function create(): String;

   }

   /**
    * @private
    * @function
    * @name pc.inherits
    * @description Implementaton of inheritance for Javascript objects
    * e.g. Class can access all of Base's function prototypes
    * The super classes prototype is available on the derived class as _super
    * @param {Function} Self Constructor of derived class
    * @param {Function} Super Constructor of base class
    * @returns {Function} New instance of Self which inherits from Super
    * @example
    * Base = function () {};
    * Base.prototype.fn = function () {
    *   console.log('base');
    * };
    * Class = function () {}
    * Class = pc.inherits(Class, Base);
    * Class.prototype.fn = function () {
    *   // Call overridden method
    *   Class._super.fn();
    *   console.log('class');
    * };
    *
    * var c = new Class();
    * c.fn(); // prints 'base' then 'class'
    */
   function inherits(Self: (() => any), Super: (() => any)): (() => any);

   /**
    * @namespace pc.path
    * @description File path API
    */
   module path {
       /**
        * The character that separates path segments
        * @name pc.path.delimiter
        */
       var delimiter: any;

       /**
        * Join two sections of file path together, insert a delimiter if needed.
        * @param {String} one First part of path to join
        * @param {String} two Second part of path to join
        * @function
        * @name pc.path.join
        */
       function join(one: String, two: String): void;

       /**
        * @function
        * @name pc.path.split
        * @description Split the pathname path into a pair [head, tail] where tail is the final part of the path
        * after the last delimiter and head is everything leading up to that. tail will never contain a slash
        */
       function split(): void;

       /**
        * @function
        * @name pc.path.getBasename
        * @description Return the basename of the path. That is the second element of the pair returned by
        * passing path into {@link pc.path.split}.
        * @example
        * pc.path.getBasename("/path/to/file.txt"); // returns "path.txt"
        * pc.path.getBasename("/path/to/dir"); // returns "dir"
        * @returns {String} The basename
        */
       function getBasename(): String;

       /**
        * Get the directory name from the path. This is everything up to the final instance of pc.path.delimiter
        * @param {String} path The path to get the directory from
        * @function
        * @name pc.path.getDirectory
        */
       function getDirectory(path: String): void;

   }

   /**
    * @namespace
    * @name pc.string
    * @description Extended String API
    */
   module string {
       /**
        * @name pc.string.ASCII_LOWERCASE
        * @description All lowercase letters
        * @type String
        */
       var ASCII_LOWERCASE: String;

       /**
        * @name pc.string.ASCII_UPPERCASE
        * @description All uppercase letters
        * @type String
        */
       var ASCII_UPPERCASE: String;

       /**
        * @name pc.string.ASCII_LETTERS
        * @description All ASCII letters
        * @type String
        */
       var ASCII_LETTERS: String;

       /**
        * @function
        * @name pc.string.format
        * @description Return a string with {n} replaced with the n-th argument
        * @param {String} s The string to format
        * @param {Object} [arguments] All other arguments are substituted into the string
        * @returns {String} The formatted string
        * @example
        * var s = pc.string.format("Hello {0}", "world");
        * console.log(s); // Prints "Hello world"
        */
       function format(s: String, arguments?: Object): String;

       /**
        * @private
        * @function
        * @name pc.string.startsWith
        * @description Check if a string s starts with another string subs
        * @param {String} s The string to look in
        * @param {String} subs The string to look for
        * @returns {Boolean} True if s starts with subs
        * @deprecated
        * @example
        * var s = "abc";
        * if (pc.string.startsWith(s, "a")) {
        *   console.log('Starts with a');
        * }
        */
       function startsWith(s: String, subs: String): Boolean;

       /**
        * @private
        * @function
        * @name pc.string.endsWith
        * @description Check if a string s ends with another string subs
        * @param {String} s The string to look in
        * @param {String} subs The string to look for
        * @returns {Boolean} True if s ends with subs
        * @deprecated
        */
       function endsWith(s: String, subs: String): Boolean;

       /**
        * @function
        * @name pc.string.toBool
        * @description Convert a string value to a boolean. In non-strict mode (the default), 'true' is converted to true, all other values
        * are converted to false. In strict mode, 'true' is converted to true, 'false' is converted to false, all other values will throw
        * an Exception.
        * @param {String} s The string to convert
        * @param {Boolean} [strict] In strict mode an Exception is thrown if s is not an accepted string value. Defaults to false
        * @returns {Boolean} The converted value
        */
       function toBool(s: String, strict?: Boolean): Boolean;

   }

   /**
    * @name pc.Tags
    * @class Set of tag names
    * @description Create an instance of a Tags.
    * @param {Object} [parent] Parent object who tags belong to.
    * Note: Tags are used as addition of `pc.Entity` and `pc.Asset` as `tags` field.
    */
   class Tags {
       /**
        * @name pc.Tags
        * @class Set of tag names
        * @description Create an instance of a Tags.
        * @param {Object} [parent] Parent object who tags belong to.
        * Note: Tags are used as addition of `pc.Entity` and `pc.Asset` as `tags` field.
        */
       constructor(parent?: Object);

       /**
        * @function
        * @name pc.Tags#add
        * @description Add a tag, duplicates are ignored. Can be array or comma separated arguments for multiple tags.
        * @param {String} name Name of a tag, or array of tags
        * @returns {Boolean} true if any tag were added
        * @example
        * tags.add('level-1');
        * @example
        * tags.add('ui', 'settings');
        * @example
        * tags.add([ 'level-2', 'mob' ]);
        */
       add(name: String): Boolean;

       /**
        * @function
        * @name pc.Tags#remove
        * @description Remove tag.
        * @param {String} name Name of a tag or array of tags
        * @returns {Boolean} true if any tag were removed
        * @example
        * tags.remove('level-1');
        * @example
        * tags.remove('ui', 'settings');
        * @example
        * tags.remove([ 'level-2', 'mob' ]);
        */
       remove(name: String): Boolean;

       /**
        * @function
        * @name pc.Tags#clear
        * @description Remove all tags.
        * @example
        * tags.clear();
        */
       clear(): void;

       /**
        * @function
        * @name pc.Tags#has
        * @description Check if tags satisfy filters.
        * Filters can be provided by simple name of tag, as well as by array of tags.
        * When an array is provided it will check if tags contain each tag within the array.
        * If any of comma separated argument is satisfied, then it will return true.
        * Any number of combinations are valid, and order is irrelevant.
        * @param {String} name of tag, or array of names
        * @returns {Boolean} true if filters are satisfied
        * @example
        * tags.has('player'); // player
        * @example
        * tags.has('mob', 'player'); // player OR mob
        * @example
        * tags.has([ 'level-1', 'mob' ]); // monster AND level-1
        * @example
        * tags.has([ 'ui', 'settings' ], [ 'ui', 'levels' ]); // (ui AND settings) OR (ui AND levels)
        */
       has(name: String): Boolean;

       /**
        * @function
        * @name pc.Tags#list
        * @description Returns immutable array of tags
        * @returns {String[]} copy of tags array
        */
       list(): String[];

       /**
        * @field
        * @readonly
        * @type Number
        * @name pc.Tags#size
        * @description Number of tags in set
        */
       size: Number;

   }

   /**
    * @private
    * @name pc.Timer
    * @description Create a new Timer instance
    * @class A Timer counts milliseconds from when start() is called until when stop() is called.
    */
   class Timer {
       /**
        * @private
        * @name pc.Timer
        * @description Create a new Timer instance
        * @class A Timer counts milliseconds from when start() is called until when stop() is called.
        */
       constructor();

       /**
        * @private
        * @function
        * @name pc.Timer#start
        * @description Start the timer
        */
       private start(): void;

       /**
        * @private
        * @function
        * @name pc.Timer#stop
        * @description Stop the timer
        */
       private stop(): void;

       /**
        * @private
        * @function
        * @name pc.Timer#getMilliseconds
        * @description Get the number of milliseconds that passed between start() and stop() being called
        */
       private getMilliseconds(): void;

   }

   /**
    * @private
    * @function
    * @name pc.now
    * @description Get current time in milliseconds. Use it to measure time difference. Reference time may differ on different platforms.
    * @return {Number} The time in milliseconds
    */
   function now(): Number;

   /**
    * @private
    * @function
    * @name pc.createURI
    * @description Create a URI object from constiuent parts
    * @param {Object} options Parts of the URI to build
    * @param {String} [options.scheme] The URI scheme (e.g. http)
    * @param {String} [options.authority] The URI authority (e.g. www.example.com)
    * @param {String} [options.host] Combination of scheme and authority (e.g. http://www.example.com)
    * @param {String} [options.path] The URI path (e.g. /users/example)
    * @param {String} [options.hostpath] Combination of scheme, authority and path (e.g. http://www.example.com/users/example)
    * @param {String} [options.query] The query section, after the ?(e.g. http://example.com?<b>key=value&another=123</b>)
    * @param {String} [options.fragment] The fragment section, after the # (e.g. http://example.com#<b>fragment/data</b>)
    * @returns {String} A URI string
    */
   function createURI(options: { scheme: String, authority: String, host: String, path: String, hostpath: String, query: String, fragment: String }): String;

   /**
    * @private
    * @name pc.URI
    * @description Create a new URI object
    * @class A URI object
    * @param {String} uri URI string
    */
   class URI {
       /**
        * @private
        * @name pc.URI
        * @description Create a new URI object
        * @class A URI object
        * @param {String} uri URI string
        */
       constructor(uri: String);

       /**
        * @name pc.URI#scheme
        * @description The scheme. (e.g. http)
        */
       scheme: any;

       /**
        * @name pc.URI#authority
        * @description The authority. (e.g. www.example.com)
        */
       authority: any;

       /**
        * @name pc.URI#path
        * @description The path. (e.g. /users/example)
        */
       path: any;

       /**
        * @name pc.URI#query
        * @description The query, the section after a ?. (e.g. search=value)
        */
       query: any;

       /**
        * @name pc.URI#fragment
        * @description The fragment, the section after a #
        */
       fragment: any;

       /**
        * @function
        * @name pc.URI#toString
        * @description Convert URI back to string
        */
       toString(): void;

       /**
        * @function
        * @name pc.URI#getQuery
        * @description Returns the query parameters as an Object
        * @example
        * <code><pre lang="javascript">
        * var s = "http://example.com?a=1&b=2&c=3
        * var uri = new pc.URI(s);
        * var q = uri.getQuery();
        * console.log(q.a); // logs "1"
        * console.log(q.b); // logs "2"
        * console.log(q.c); // logs "3"
        * </code></pre>
        */
       getQuery(): void;

       /**
        * @function
        * @name pc.URI#setQuery
        * @description Set the query section of the URI from a Object
        * @param {Object} params Key-Value pairs to encode into the query string
        * @example
        * var s = "http://example.com";
        * var uri = new pc.URI(s);
        * uri.setQuery({"a":1,"b":2});
        * console.log(uri.toString()); // logs "http://example.com?a=1&b=2
        */
       setQuery(params: Object): void;

   }

   /**
    * @name pc.Application
    * @class Default application which performs general setup code and initiates the main game loop.
    * @description Create a new Application.
    * @param {Element} canvas The canvas element
    * @param {Object} options
    * @param {pc.Keyboard} [options.keyboard] Keyboard handler for input
    * @param {pc.Mouse} [options.mouse] Mouse handler for input
    * @param {pc.TouchDevice} [options.touch] TouchDevice handler for input
    * @param {pc.GamePads} [options.gamepads] Gamepad handler for input
    * @param {String} [options.scriptPrefix] Prefix to apply to script urls before loading
    * @param {String} [options.assetPrefix] Prefix to apply to asset urls before loading
    * @param {Object} [options.graphicsDeviceOptions] Options object that is passed into the {@link pc.GraphicsDevice} constructor
    *
    * @example
    * // Create application
    * var app = new pc.Application(canvas, options);
    * // Start game loop
    * app.start()
    */
   class Application {
       /**
        * @name pc.Application
        * @class Default application which performs general setup code and initiates the main game loop.
        * @description Create a new Application.
        * @param {Element} canvas The canvas element
        * @param {Object} options
        * @param {pc.Keyboard} [options.keyboard] Keyboard handler for input
        * @param {pc.Mouse} [options.mouse] Mouse handler for input
        * @param {pc.TouchDevice} [options.touch] TouchDevice handler for input
        * @param {pc.GamePads} [options.gamepads] Gamepad handler for input
        * @param {String} [options.scriptPrefix] Prefix to apply to script urls before loading
        * @param {String} [options.assetPrefix] Prefix to apply to asset urls before loading
        * @param {Object} [options.graphicsDeviceOptions] Options object that is passed into the {@link pc.GraphicsDevice} constructor
        *
        * @example
        * // Create application
        * var app = new pc.Application(canvas, options);
        * // Start game loop
        * app.start()
        */
       constructor(canvas: Element, options: { keyboard: pc.Keyboard, mouse: pc.Mouse, touch: pc.TouchDevice, gamepads: pc.GamePads, scriptPrefix: String, assetPrefix: String, graphicsDeviceOptions: Object });

       /**
        * @name pc.Application#scene
        * @type {pc.Scene}
        * @description The current {@link pc.Scene}
        */
       scene: pc.Scene;

       /**
        * @name pc.Application#timeScale
        * @type {Number}
        * @description Scales the global time delta.
        */
       timeScale: Number;

       /**
        * @name pc.Application#assets
        * @type {pc.AssetRegistry}
        * @description The assets available to the application.
        */
       assets: pc.AssetRegistry;

       /**
        * @name pc.Application#graphicsDevice
        * @type {pc.GraphicsDevice}
        * @description The graphics device used by the application.
        */
       graphicsDevice: pc.GraphicsDevice;

       /**
        * @name pc.Application#systems
        * @type {pc.ComponentSystem[]}
        * @description The component systems.
        */
       systems: pc.ComponentSystem[];

       /**
        * @name pc.Application#loader
        * @type {pc.ResourceLoader}
        * @description The resource loader.
        */
       loader: pc.ResourceLoader;

       /**
        * @name pc.Application#root
        * @type {pc.Entity}
        * @description The root {@link pc.Entity} of the application.
        */
       root: pc.Entity;

       /**
        * @name pc.Application#keyboard
        * @type {pc.Keyboard}
        * @description The keyboard device.
        */
       keyboard: pc.Keyboard;

       /**
        * @name pc.Application#mouse
        * @type {pc.Mouse}
        * @description The mouse device.
        */
       mouse: pc.Mouse;

       /**
        * @name pc.Application#touch
        * @type {pc.TouchDevice}
        * @description Used to get touch events input.
        */
       touch: pc.TouchDevice;

       /**
        * @name pc.Application#gamepads
        * @type {pc.GamePads}
        * @description Used to access GamePad input.
        */
       gamepads: pc.GamePads;

       /**
        * @name pc.Application#scripts
        * @type pc.ScriptRegistry
        * @description The Script Registry of the Application
        */
       scripts: pc.ScriptRegistry;

       /**
        * @function
        * @name pc.Application#configure
        * @description Load the application configuration file and apply application properties and fill the asset registry
        * @param {String} url The URL of the configuration file to load
        * @param {Function} callback The Function called when the configuration file is loaded and parsed
        */
       configure(url: String, callback: (() => any)): void;

       /**
        * @function
        * @name pc.Application#preload
        * @description Load all assets in the asset registry that are marked as 'preload'
        * @param {Function} callback Function called when all assets are loaded
        */
       preload(callback: (() => any)): void;

       /**
        * @function
        * @name pc.Application#loadSceneHierarchy
        * @description Load a scene file, create and initialize the Entity hierarchy
        * and add the hierarchy to the application root Entity.
        * @param {String} url The URL of the scene file. Usually this will be "scene_id.json"
        * @param {Function} callback The function to call after loading, passed (err, entity) where err is null if no errors occurred.
        * @example
        *
        * app.loadSceneHierarchy("1000.json", function (err, entity) {
        *     if (!err) {
        *       var e = app.root.find("My New Entity");
        *     } else {
        *       // error
        *     }
        *   }
        * });
        */
       loadSceneHierarchy(url: String, callback: (() => any)): void;

       /**
        * @function
        * @name pc.Application#loadSceneSettings
        * @description Load a scene file and apply the scene settings to the current scene
        * @param {String} url The URL of the scene file. Usually this will be "scene_id.json"
        * @param {Function} callback The function called after the settings are applied. Passed (err) where err is null if no error occurred.
        * @example
        * app.loadSceneSettings("1000.json", function (err) {
        *     if (!err) {
        *       // success
        *     } else {
        *       // error
        *     }
        *   }
        * });
        */
       loadSceneSettings(url: String, callback: (() => any)): void;

       /**
        * @function
        * @name pc.Application#start
        * @description Start the Application updating
        */
       start(): void;

       /**
        * @function
        * @name pc.Application#update
        * @description Application specific update method. Override this if you have a custom Application
        * @param {Number} dt The time delta since the last frame.
        */
       update(dt: Number): void;

       /**
        * @function
        * @name pc.Application#render
        * @description Application specific render method. Override this if you have a custom Application
        */
       render(): void;

       /**
        * @function
        * @name pc.Application#setCanvasFillMode
        * @description Controls how the canvas fills the window and resizes when the window changes.
        * @param {String} mode The mode to use when setting the size of the canvas. Can be:
        * <ul>
        *     <li>pc.FILLMODE_NONE: the canvas will always match the size provided.</li>
        *     <li>pc.FILLMODE_FILL_WINDOW: the canvas will simply fill the window, changing aspect ratio.</li>
        *     <li>pc.FILLMODE_KEEP_ASPECT: the canvas will grow to fill the window as best it can while maintaining the aspect ratio.</li>
        * </ul>
        * @param {Number} [width] The width of the canvas (only used when mode is pc.FILLMODE_NONE).
        * @param {Number} [height] The height of the canvas (only used when mode is pc.FILLMODE_NONE).
        */
       setCanvasFillMode(mode: String, width?: Number, height?: Number): void;

       /**
        * @function
        * @name pc.Application#setCanvasResolution
        * @description Change the resolution of the canvas, and set the way it behaves when the window is resized
        * In AUTO mode, the resolution is change to match the size of the canvas when the canvas resizes
        * In FIXED mode, the resolution remains until another call to setCanvasResolution()
        * @param {pc.ResolutionMode} mode The mode to use when setting the resolution
        * @param {Number} [width] The horizontal resolution, optional in AUTO mode, if not provided canvas clientWidth is used
        * @param {Number} [height] The vertical resolution, optional in AUTO mode, if not provided canvas clientHeight is used
        */
       setCanvasResolution(mode: pc.ResolutionMode, width?: Number, height?: Number): void;

       /**
        * @function
        * @name pc.Application#isFullscreen
        * @description Returns true if the application is currently running fullscreen
        * @returns {Boolean} True if the application is running fullscreen
        */
       isFullscreen(): Boolean;

       /**
        * @function
        * @name pc.Application#enableFullscreen
        * @description Request that the browser enters fullscreen mode. This is not available on all browsers.
        * Note: Switching to fullscreen can only be initiated by a user action, e.g. in the event hander for a mouse or keyboard input
        * @param {Element} [element] The element to display in fullscreen, if element is not provided the application canvas is used
        * @param {Function} [success] Function called if the request for fullscreen was successful
        * @param {Function} [error] Function called if the request for fullscreen was unsuccessful
        * @example
        * var button = document.getElementById('my-button');
        * button.addEventListener('click', function () {
        *     app.enableFullscreen(canvas, function () {
        *         console.log('Now fullscreen');
        *     }, function () {
        *         console.log('Something went wrong!');
        *     });
        * }, false);
        */
       enableFullscreen(element?: Element, success?: (() => any), error?: (() => any)): void;

       /**
        * @function
        * @name pc.Application#disableFullscreen
        * @description If application is currently displaying an element as fullscreen, then stop and return to normal.
        * @param {Function} [success] Function called when transition to normal mode is finished
        */
       disableFullscreen(success?: (() => any)): void;

       /**
        * @function
        * @name pc.Application#isHidden
        * @description Queries the visibility of the window or tab in which the application is running.
        * @returns {Boolean} True if the application is not visible and false otherwise.
        */
       isHidden(): Boolean;

       /**
        * @private
        * @function
        * @name pc.Application#onVisibilityChange
        * @description Called when the visibility state of the current tab/window changes
        */
       private onVisibilityChange(): void;

       /**
        * @function
        * @name pc.Application#resizeCanvas
        * @description Resize the canvas in line with the current FillMode
        * In KEEP_ASPECT mode, the canvas will grow to fill the window as best it can while maintaining the aspect ratio
        * In FILL_WINDOW mode, the canvas will simply fill the window, changing aspect ratio
        * In NONE mode, the canvas will always match the size provided
        * @param {Number} [width] The width of the canvas, only used in NONE mode
        * @param {Number} [height] The height of the canvas, only used in NONE mode
        * @returns {Object} A object containing the values calculated to use as width and height
        */
       resizeCanvas(width?: Number, height?: Number): Object;

       /**
        * @private
        * @name pc.Application#onLibrariesLoaded
        * @description Event handler called when all code libraries have been loaded
        * Code libraries are passed into the constructor of the Application and the application won't start running or load packs until all libraries have
        * been loaded
        */
       private onLibrariesLoaded: any;

       /**
        * @function
        * @name pc.Application#destroy
        * @description Destroys application and removes all event listeners.
        */
       destroy(): void;

       /**
        * @function
        * @name pc.Application#renderLine
        * @description Draw a line in one color
        * @param {pc.Vec3} start The start of the line
        * @param {pc.Vec3} end The end of the line
        * @param {pc.Color} color The color of the line
        * @example
        * var start = new pc.Vec3(0,0,0);
        * var end = new pc.Vec3(1,0,0);
        * var color = new pc.Color(1,1,1);
        * app.renderLine(start, end, color);
        */
       renderLine(start: pc.Vec3, end: pc.Vec3, color: pc.Color): void;

       /**
        * @function
        * @name pc.Application#renderLine^2
        * @description Draw a line which blends between two colors
        * @param {pc.Vec3} start The start of the line
        * @param {pc.Vec3} end The end of the line
        * @param {pc.Color} startColor The start color of the line
        * @param {pc.Color} endColor The end color of the line
        * @example
        * var start = new pc.Vec3(0,0,0);
        * var end = new pc.Vec3(1,0,0);
        * var startColor = new pc.Color(1,1,1);
        * var endColor = new pc.Color(1,0,0);
        * app.renderLine(start, end, startColor, endColor);
        */
       renderLine^2(start: pc.Vec3, end: pc.Vec3, startColor: pc.Color, endColor: pc.Color): void;

       /**
        * @function
        * @name pc.Application#renderLine^3
        * @description Draw a line of one color with specified line type
        * @param {pc.Vec3} start The start of the line
        * @param {pc.Vec3} end The end of the line
        * @param {pc.Color} color The color of the line
        * @param {Number} lineType The type of rendering to use: pc.LINEBATCH_WORLD, pc.LINEBATCH_OVERLAY, pc.LINEBATCH_GIZMO. Default is pc.LINEBATCH_WORLD
        * @example
        * var start = new pc.Vec3(0,0,0);
        * var end = new pc.Vec3(1,0,0);
        * var color = new pc.Color(1,1,1);
        * app.renderLine(start, end, color, pc.LINEBATCH_OVERLAY);
        */
       renderLine^3(start: pc.Vec3, end: pc.Vec3, color: pc.Color, lineType: Number): void;

       /**
        * @function
        * @name pc.Application#renderLine^4
        * @description Draw a line which blends between two colors with specified line type
        * @param {pc.Vec3} start The start of the line
        * @param {pc.Vec3} end The end of the line
        * @param {pc.Color} startColor The start color of the line
        * @param {pc.Color} endColor The end color of the line
        * @param {Number} lineType The type of rendering to use: pc.LINEBATCH_WORLD, pc.LINEBATCH_OVERLAY, pc.LINEBATCH_GIZMO. Default is pc.LINEBATCH_WORLD
        * @example
        * var start = new pc.Vec3(0,0,0);
        * var end = new pc.Vec3(1,0,0);
        * var startColor = new pc.Color(1,1,1);
        * var endColor = new pc.Color(1,0,0);
        * app.renderLine(start, end, startColor, endColor, pc.LINEBATCH_OVERLAY);
        */
       renderLine^4(start: pc.Vec3, end: pc.Vec3, startColor: pc.Color, endColor: pc.Color, lineType: Number): void;

       /**
        * @function
        * @name pc.Application#renderLines
        * @description Draw an array of lines.
        * @param {pc.Vec3[]} position An array of points to draw lines between
        * @param {pc.Color[]} color An array of colors to color the lines. This must be the same size as the position array
        * @param {Number} [lineType] The type of rendering to use: pc.LINEBATCH_WORLD, pc.LINEBATCH_OVERLAY, pc.LINEBATCH_GIZMO. Default is pc.LINEBATCH_WORLD
        * @example
        * var points = [new pc.Vec3(0,0,0), new pc.Vec3(1,0,0), new pc.Vec3(1,1,0), new pc.Vec3(1,1,1)];
        * var colors = [new pc.Color(1,0,0), new pc.Color(1,1,0), new pc.Color(0,1,1), new pc.Color(0,0,1)];
        * app.renderLines(points, colors);
        */
       renderLines(position: pc.Vec3[], color: pc.Color[], lineType?: Number): void;

   }

   /**
    * @enum pc.FILLMODE
    * @name pc.FILLMODE_NONE
    * @description When resizing the window the size of the canvas will not change.
    */
   enum FILLMODE_NONE {
   }

   /**
    * @enum pc.FILLMODE
    * @name pc.FILLMODE_FILL_WINDOW
    * @description When resizing the window the size of the canvas will change to fill the window exactly.
    */
   enum FILLMODE_FILL_WINDOW {
   }

   /**
    * @enum pc.FILLMODE
    * @name pc.FILLMODE_KEEP_ASPECT
    * @description When resizing the window the size of the canvas will change to fill the window as best it can, while maintaining the same aspect ratio.
    */
   enum FILLMODE_KEEP_ASPECT {
   }

   /**
    * @enum pc.RESOLUTION
    * @name pc.RESOLUTION_AUTO
    * @description When the canvas is resized the resolution of the canvas will change to match the size of the canvas.
    */
   enum RESOLUTION_AUTO {
   }

   /**
    * @enum pc.RESOLUTION
    * @name pc.RESOLUTION_FIXED
    * @description When the canvas is resized the resolution of the canvas will remain at the same value and the output will just be scaled to fit the canvas.
    */
   enum RESOLUTION_FIXED {
   }

   /**
    * @component Animation
    * @name pc.AnimationComponent
    * @description Create a new AnimationComponent
    * @class The Animation Component allows an Entity to playback animations on models
    * @param {pc.AnimationComponentSystem} system The {@link pc.ComponentSystem} that created this Component
    * @param {pc.Entity} entity The Entity that this Component is attached to
    * @extends pc.Component
    * @property {Number} speed Speed multiplier for animation play back speed. 1.0 is playback at normal speed, 0.0 pauses the animation
    * @property {Boolean} loop If true the animation will restart from the beginning when it reaches the end
    * @property {Boolean} activate If true the first animation asset will begin playing when the Pack is loaded
    * @property {pc.Asset[]} assets The array of animation assets - can also be an array of asset ids.
    * @property {Number} currentTime Get or Set the current time position (in seconds) of the animation
    * @property {Number} duration Get the duration in seconds of the current animation.
    */
   class AnimationComponent extends pc.Component {
       /**
        * @component Animation
        * @name pc.AnimationComponent
        * @description Create a new AnimationComponent
        * @class The Animation Component allows an Entity to playback animations on models
        * @param {pc.AnimationComponentSystem} system The {@link pc.ComponentSystem} that created this Component
        * @param {pc.Entity} entity The Entity that this Component is attached to
        * @extends pc.Component
        * @property {Number} speed Speed multiplier for animation play back speed. 1.0 is playback at normal speed, 0.0 pauses the animation
        * @property {Boolean} loop If true the animation will restart from the beginning when it reaches the end
        * @property {Boolean} activate If true the first animation asset will begin playing when the Pack is loaded
        * @property {pc.Asset[]} assets The array of animation assets - can also be an array of asset ids.
        * @property {Number} currentTime Get or Set the current time position (in seconds) of the animation
        * @property {Number} duration Get the duration in seconds of the current animation.
        */
       constructor(system: pc.AnimationComponentSystem, entity: pc.Entity);

       /**
        * @function
        * @name pc.AnimationComponent#play
        * @description Start playing an animation
        * @param {String} name The name of the animation asset to begin playing.
        * @param {Number} [blendTime] The time in seconds to blend from the current
        * animation state to the start of the animation being set.
        */
       play(name: String, blendTime?: Number): void;

       /**
        * @function
        * @name pc.AnimationComponent#getAnimation
        * @description Return an animation
        * @param {String} name The name of the animation asset
        * @returns {pc.Animation} An Animation
        */
       getAnimation(name: String): pc.Animation;

   }

   /**
    * @name pc.AnimationComponentSystem
    * @description Create an AnimationComponentSystem
    * @class The AnimationComponentSystem manages creating and deleting AnimationComponents
    * @param {pc.Application} app The Application for the current application
    * @extends pc.ComponentSystem
    */
   class AnimationComponentSystem extends pc.ComponentSystem {
       /**
        * @name pc.AnimationComponentSystem
        * @description Create an AnimationComponentSystem
        * @class The AnimationComponentSystem manages creating and deleting AnimationComponents
        * @param {pc.Application} app The Application for the current application
        * @extends pc.ComponentSystem
        */
       constructor(app: pc.Application);

   }

   /**
    * @component
    * @name pc.AudioListenerComponent
    * @class Represents the audio listener in the 3D world, so that 3D positioned audio sources are heard correctly.
    * @description Create new AudioListenerComponent
    * @param {pc.AudioListenerComponentSystem} system The ComponentSystem that created this Component
    * @param {pc.Entity} entity The Entity that this Component is attached to.
    * @extends pc.Component
    */
   class AudioListenerComponent extends pc.Component {
       /**
        * @component
        * @name pc.AudioListenerComponent
        * @class Represents the audio listener in the 3D world, so that 3D positioned audio sources are heard correctly.
        * @description Create new AudioListenerComponent
        * @param {pc.AudioListenerComponentSystem} system The ComponentSystem that created this Component
        * @param {pc.Entity} entity The Entity that this Component is attached to.
        * @extends pc.Component
        */
       constructor(system: pc.AudioListenerComponentSystem, entity: pc.Entity);

   }

   /**
    * @name pc.AudioListenerComponentSystem
    * @class Component System for adding and removing {@link pc.AudioComponent} objects to Enities.
    * @description Create a new AudioListenerComponentSystem
    * @extends pc.ComponentSystem
    */
   class AudioListenerComponentSystem extends pc.ComponentSystem {
       /**
        * @name pc.AudioListenerComponentSystem
        * @class Component System for adding and removing {@link pc.AudioComponent} objects to Enities.
        * @description Create a new AudioListenerComponentSystem
        * @extends pc.ComponentSystem
        */
       constructor();

   }

   /**
    * @component
    * @name pc.AudioSourceComponent
    * @class The AudioSource Component controls playback of an audio sample. This class will be deprecated in favor of {@link pc.SoundComponent}.
    * @description Create a new AudioSource Component
    * @param {pc.AudioSourceComponentSystem} system The ComponentSystem that created this Component
    * @param {pc.Entity} entity The entity that the Component is attached to
    * @extends pc.Component
    * @property {pc.Asset[]} assets The list of audio assets - can also be an array of asset ids.
    * @property {Boolean} activate If true the audio will begin playing as soon as the Pack is loaded
    * @property {Number} volume The volume modifier to play the audio with. In range 0-1.
    * @property {Number} pitch The pitch modifier to play the audio with. Must be larger than 0.01
    * @property {Boolean} loop If true the audio will restart when it finishes playing
    * @property {Boolean} 3d If true the audio will play back at the location of the Entity in space, so the audio will be affect by the position of the {@link pc.AudioListenerComponent}
    * @property {String} distanceModel Determines which algorithm to use to reduce the volume of the audio as it moves away from the listener. Can be one of 'linear', 'inverse' or 'exponential'. Default is 'inverse'.
    * @property {Number} minDistance The minimum distance from the listener at which audio falloff begins.
    * @property {Number} maxDistance The maximum distance from the listener at which audio falloff stops. Note the volume of the audio is not 0 after this distance, but just doesn't fall off anymore
    * @property {Number} rollOffFactor The factor used in the falloff equation.
    */
   class AudioSourceComponent extends pc.Component {
       /**
        * @component
        * @name pc.AudioSourceComponent
        * @class The AudioSource Component controls playback of an audio sample. This class will be deprecated in favor of {@link pc.SoundComponent}.
        * @description Create a new AudioSource Component
        * @param {pc.AudioSourceComponentSystem} system The ComponentSystem that created this Component
        * @param {pc.Entity} entity The entity that the Component is attached to
        * @extends pc.Component
        * @property {pc.Asset[]} assets The list of audio assets - can also be an array of asset ids.
        * @property {Boolean} activate If true the audio will begin playing as soon as the Pack is loaded
        * @property {Number} volume The volume modifier to play the audio with. In range 0-1.
        * @property {Number} pitch The pitch modifier to play the audio with. Must be larger than 0.01
        * @property {Boolean} loop If true the audio will restart when it finishes playing
        * @property {Boolean} 3d If true the audio will play back at the location of the Entity in space, so the audio will be affect by the position of the {@link pc.AudioListenerComponent}
        * @property {String} distanceModel Determines which algorithm to use to reduce the volume of the audio as it moves away from the listener. Can be one of 'linear', 'inverse' or 'exponential'. Default is 'inverse'.
        * @property {Number} minDistance The minimum distance from the listener at which audio falloff begins.
        * @property {Number} maxDistance The maximum distance from the listener at which audio falloff stops. Note the volume of the audio is not 0 after this distance, but just doesn't fall off anymore
        * @property {Number} rollOffFactor The factor used in the falloff equation.
        */
       constructor(system: pc.AudioSourceComponentSystem, entity: pc.Entity);

       /**
        * @function
        * @name pc.AudioSourceComponent#play
        * @description Begin playback of an audio asset in the component attached to an entity
        * @param {String} name The name of the Asset to play
        */
       play(name: String): void;

       /**
        * @function
        * @name pc.AudioSourceComponent#pause
        * @description Pause playback of the audio that is playing on the Entity. Playback can be resumed by calling {@link pc.AudioSourceComponent#unpause}
        */
       pause(): void;

       /**
        * @function
        * @name pc.AudioSourceComponent#unpause
        * @description Resume playback of the audio if paused. Playback is resumed at the time it was paused.
        */
       unpause(): void;

       /**
        * @function
        * @name pc.AudioSourceComponent#stop
        * @description Stop playback on an Entity. Playback can not be resumed after being stopped.
        */
       stop(): void;

   }

   /**
    * @private
    * @constructor
    */
   class AudioSourceComponentData {
       /**
        * @private
        * @constructor
        */
       constructor();

   }

   /**
    * @name pc.AudioSourceComponentSystem
    * @class Controls playback of an audio sample. This class will be deprecated in favor of {@link pc.SoundComponentSystem}.
    * @param {pc.Application} app The Application
    * @param {pc.SoundManager} manager The sound manager
    * @extends pc.ComponentSystem
    */
   class AudioSourceComponentSystem extends pc.ComponentSystem {
       /**
        * @name pc.AudioSourceComponentSystem
        * @class Controls playback of an audio sample. This class will be deprecated in favor of {@link pc.SoundComponentSystem}.
        * @param {pc.Application} app The Application
        * @param {pc.SoundManager} manager The sound manager
        * @extends pc.ComponentSystem
        */
       constructor(app: pc.Application, manager: pc.SoundManager);

       /**
        * @name pc.AudioSourceComponentSystem#setVolume()
        * @function
        * @description Set the volume for the entire AudioSource system. All sources will have their volume multiplied by this value
        * @param {Number} value The value to set the volume to. Valid from 0.0 - 1.0
        */
       setVolume()(value: Number): void;

   }

   /**
    * @component
    * @name pc.CameraComponent
    * @extends pc.Component
    * @class The Camera Component enables an Entity to render the scene. A scene requires at least one
    * enabled camera component to be rendered. Note that multiple camera components can be enabled
    * simulataneously (for split-screen or offscreen rendering, for example).
    * @description Create a new Camera Component.
    * @param {pc.CameraComponentSystem} system The ComponentSystem that created this Component.
    * @param {pc.Entity} entity The Entity that this Component is attached to.
    * @example
    * // Add a pc.CameraComponent to an entity
    * var entity = new pc.Entity();
    * entity.addComponent('camera', {
    *     nearClip: 1,
    *     farClip: 100,
    *     fov: 55
    * });
    * @example
    * // Get the pc.CameraComponent on an entity
    * var cameraComponent = entity.camera;
    * @example
    * // Update a property on a camera component
    * entity.camera.nearClip = 2;
    * @property {Number} projection The type of projection used to render the camera. Can be:
    * <ul>
    *     <li>{@link pc.PROJECTION_PERSPECTIVE}: A persepctive projection. The camera frustum resembles a truncated pyramid.</li>
    *     <li>{@link pc.PROJECTION_ORTHOGRAPHIC}: An orthographic projection. The camera frustum is a cuboid.</li>
    * </ul>
    * Defaults to pc.PROJECTION_PERSPECTIVE.
    * @property {Number} nearClip The distance from the camera before which no rendering will take place.
    * @property {Number} farClip The distance from the camera after which no rendering will take place.
    * @property {Number} aspectRatio The aspect ratio of the camera. This is the ratio of width divided by height. Default to 16/9.
    * @property {Boolean} horizontalFov Set which axis to use for the Field of View calculation. Defaults to false (use Y-axis).
    * @property {Number} fov The field of view of the camera in degrees. Usually this is the Y-axis field of
    * view, see {@link pc.CameraComponent#horizontalFov}. Used for {@link pc.PROJECTION_PERSPECTIVE} cameras only. Defaults to 45.
    * @property {Number} orthoHeight The half-height of the orthographic view window (in the Y-axis). Used for
    * {@link pc.PROJECTION_ORTHOGRAPHIC} cameras only. Defaults to 10.
    * @property {Number} priority Controls the order in which cameras are rendered. Cameras with smaller values for priority are rendered first.
    * @property {pc.Color} clearColor The color used to clear the canvas to before the camera starts to render.
    * @property {Boolean} clearColorBuffer If true the camera will clear the color buffer to the color set in clearColor.
    * @property {Boolean} clearDepthBuffer If true the camera will clear the depth buffer.
    * @property {Boolean} clearStencilBuffer If true the camera will clear the stencil buffer.
    * @property {pc.Vec4} rect Controls where on the screen the camera will be rendered in normalized screen coordinates.
    * The order of the values is [x, y, width, height].
    * @property {pc.RenderTarget} renderTarget The render target of the camera. Defaults to null, which causes
    * the camera to render to the canvas' back buffer. Setting a valid render target effectively causes the camera
    * to render to an offscreen buffer, which can then be used to achieve certain graphics effect (normally post
    * effects).
    * @property {pc.PostEffectQueue} postEffects The post effects queue for this camera. Use this to add or remove post effects from the camera.
    * @property {Boolean} frustumCulling Controls the culling of mesh instances against the camera frustum. If true, culling is enabled.
    * If false, all mesh instances in the scene are rendered by the camera, regardless of visibility. Defaults to false.
    */
   class CameraComponent extends pc.Component {
       /**
        * @component
        * @name pc.CameraComponent
        * @extends pc.Component
        * @class The Camera Component enables an Entity to render the scene. A scene requires at least one
        * enabled camera component to be rendered. Note that multiple camera components can be enabled
        * simulataneously (for split-screen or offscreen rendering, for example).
        * @description Create a new Camera Component.
        * @param {pc.CameraComponentSystem} system The ComponentSystem that created this Component.
        * @param {pc.Entity} entity The Entity that this Component is attached to.
        * @example
        * // Add a pc.CameraComponent to an entity
        * var entity = new pc.Entity();
        * entity.addComponent('camera', {
        *     nearClip: 1,
        *     farClip: 100,
        *     fov: 55
        * });
        * @example
        * // Get the pc.CameraComponent on an entity
        * var cameraComponent = entity.camera;
        * @example
        * // Update a property on a camera component
        * entity.camera.nearClip = 2;
        * @property {Number} projection The type of projection used to render the camera. Can be:
        * <ul>
        *     <li>{@link pc.PROJECTION_PERSPECTIVE}: A persepctive projection. The camera frustum resembles a truncated pyramid.</li>
        *     <li>{@link pc.PROJECTION_ORTHOGRAPHIC}: An orthographic projection. The camera frustum is a cuboid.</li>
        * </ul>
        * Defaults to pc.PROJECTION_PERSPECTIVE.
        * @property {Number} nearClip The distance from the camera before which no rendering will take place.
        * @property {Number} farClip The distance from the camera after which no rendering will take place.
        * @property {Number} aspectRatio The aspect ratio of the camera. This is the ratio of width divided by height. Default to 16/9.
        * @property {Boolean} horizontalFov Set which axis to use for the Field of View calculation. Defaults to false (use Y-axis).
        * @property {Number} fov The field of view of the camera in degrees. Usually this is the Y-axis field of
        * view, see {@link pc.CameraComponent#horizontalFov}. Used for {@link pc.PROJECTION_PERSPECTIVE} cameras only. Defaults to 45.
        * @property {Number} orthoHeight The half-height of the orthographic view window (in the Y-axis). Used for
        * {@link pc.PROJECTION_ORTHOGRAPHIC} cameras only. Defaults to 10.
        * @property {Number} priority Controls the order in which cameras are rendered. Cameras with smaller values for priority are rendered first.
        * @property {pc.Color} clearColor The color used to clear the canvas to before the camera starts to render.
        * @property {Boolean} clearColorBuffer If true the camera will clear the color buffer to the color set in clearColor.
        * @property {Boolean} clearDepthBuffer If true the camera will clear the depth buffer.
        * @property {Boolean} clearStencilBuffer If true the camera will clear the stencil buffer.
        * @property {pc.Vec4} rect Controls where on the screen the camera will be rendered in normalized screen coordinates.
        * The order of the values is [x, y, width, height].
        * @property {pc.RenderTarget} renderTarget The render target of the camera. Defaults to null, which causes
        * the camera to render to the canvas' back buffer. Setting a valid render target effectively causes the camera
        * to render to an offscreen buffer, which can then be used to achieve certain graphics effect (normally post
        * effects).
        * @property {pc.PostEffectQueue} postEffects The post effects queue for this camera. Use this to add or remove post effects from the camera.
        * @property {Boolean} frustumCulling Controls the culling of mesh instances against the camera frustum. If true, culling is enabled.
        * If false, all mesh instances in the scene are rendered by the camera, regardless of visibility. Defaults to false.
        */
       constructor(system: pc.CameraComponentSystem, entity: pc.Entity);

       /**
        * @readonly
        * @name pc.CameraComponent#projectionMatrix
        * @type pc.Mat4
        * @description Queries the camera's projection matrix.
        */
       projectionMatrix: pc.Mat4;

       /**
        * @readonly
        * @name pc.CameraComponent#viewMatrix
        * @type pc.Mat4
        * @description Queries the camera's view matrix.
        */
       viewMatrix: pc.Mat4;

       /**
        * @readonly
        * @name pc.CameraComponent#frustum
        * @type pc.Frustum
        * @description Queries the camera's frustum shape.
        */
       frustum: pc.Frustum;

       /**
        * @name pc.CameraComponent#vrDisplay
        * @type pc.VrDisplay
        * @description The {@link pc.VrDisplay} that the camera is current displaying to. This is set automatically by calls to {@link pc.CameraComponent#enterVr}
        * or {@link pc.CameraComponent#exitVr}. Setting this property to a display directly enables the camera to use the transformation information
        * from a display without rendering stereo to it, e.g. for "magic window" style experiences.
        * @example
        * // enable magic window style interface
        * var display = this.app.vr.display;
        * if (display) {
        *     this.entity.camera.vrDisplay = display;
        * }
        *
        * var camera = this.entity.camera;
        * camera.enterVr(function (err) {
        * if (err) { return; }
        *     var display = camera.vrDisplay; // access presenting pc.VrDisplay
        * });
        */
       vrDisplay: pc.VrDisplay;

       /**
        * @function
        * @name pc.CameraComponent#screenToWorld
        * @description Convert a point from 2D screen space to 3D world space.
        * @param {Number} screenx x coordinate on PlayCanvas' canvas element.
        * @param {Number} screeny y coordinate on PlayCanvas' canvas element.
        * @param {Number} cameraz The distance from the camera in world space to create the new point.
        * @param {pc.Vec3} [worldCoord] 3D vector to recieve world coordinate result.
        * @example
        * // Get the start and end points of a 3D ray fired from a screen click position
        * var start = entity.camera.screenToWorld(clickX, clickY, entity.camera.nearClip);
        * var end = entity.camera.screenToWorld(clickX, clickY, entity.camera.farClip);
        *
        * // Use the ray coordinates to perform a raycast
        * app.systems.rigidbody.raycastFirst(start, end, function (result) {
        *     console.log("Entity " + result.entity.name + " was selected");
        * });
        * @returns {pc.Vec3} The world space coordinate.
        */
       screenToWorld(screenx: Number, screeny: Number, cameraz: Number, worldCoord?: pc.Vec3): pc.Vec3;

       /**
        * @function
        * @name pc.CameraComponent#worldToScreen
        * @description Convert a point from 3D world space to 2D screen space.
        * @param {pc.Vec3} worldCoord The world space coordinate.
        * @param {pc.Vec3} [screenCoord] 3D vector to recieve screen coordinate result.
        * @returns {pc.Vec3} The screen space coordinate.
        */
       worldToScreen(worldCoord: pc.Vec3, screenCoord?: pc.Vec3): pc.Vec3;

       /**
        * @function
        * @private
        * @name pc.CameraComponent#frameBegin
        * @description Start rendering the frame for this camera.
        */
       private frameBegin(): void;

       /**
        * @private
        * @function
        * @name pc.CameraComponent#frameEnd
        * @description End rendering the frame for this camera
        */
       private frameEnd(): void;

       /**
        * @function
        * @name pc.CameraComponent#enterVr
        * @description Attempt to start presenting this camera to a {@link pc.VrDisplay}.
        * @param {pc.VrDisplay} [display] The VrDisplay to present. If not supplied this uses {@link pc.VrManager#display} as the default
        * @param {Function} callback Function called once to indicate success of failure. The callback takes one argument (err).
        * On success it returns null on failure it returns the error message.
        * @example
        * // On an entity with a camera component
        * this.entity.camera.enterVr(function (err) {
        *     if (err) {
        *         console.error(err);
        *         return;
        *     } else {
        *         // in VR!
        *     }
        * });
        */
       enterVr(display?: pc.VrDisplay, callback: (() => any)): void;

       /**
        * @function
        * @name pc.CameraComponent#exitVr
        * @description Attempt to stop presenting this camera.
        * @param {Function} callback Function called once to indicate success of failure. The callback takes one argument (err).
        * On success it returns null on failure it returns the error message.
        * @example
        * this.entity.camera.exitVr(function (err) {
        *     if (err) {
        *         console.error(err);
        *     } else {
        *
        *     }
        * });
        */
       exitVr(callback: (() => any)): void;

   }

   /**
    * @private
    * @name pc.CameraComponentData
    * @class ComponentData structure for Camera components.
    * @extends pc.ComponentData
    */
   class CameraComponentData extends pc.ComponentData {
       /**
        * @private
        * @name pc.CameraComponentData
        * @class ComponentData structure for Camera components.
        * @extends pc.ComponentData
        */
       constructor();

   }

   /**
    * @name pc.PostEffectQueue
    * @description Create a new PostEffectQueue
    * @class Used to manage multiple post effects for a camera
    * @param {pc.Application} app The application
    * @param {pc.CameraComponent} camera The camera component
    */
   class PostEffectQueue {
       /**
        * @name pc.PostEffectQueue
        * @description Create a new PostEffectQueue
        * @class Used to manage multiple post effects for a camera
        * @param {pc.Application} app The application
        * @param {pc.CameraComponent} camera The camera component
        */
       constructor(app: pc.Application, camera: pc.CameraComponent);

       /**
        * @private
        * @function
        * @name pc.PostEffectQueue#_createOffscreenTarget
        * @description Creates a render target with the dimensions of the canvas, with an optional depth buffer
        * @param {Boolean} useDepth Set to true if you want to create a render target with a depth buffer
        * @param {Boolean} hdr Use HDR render target format
        * @returns {pc.RenderTarget} The render target
        */
       private _createOffscreenTarget(useDepth: Boolean, hdr: Boolean): pc.RenderTarget;

       /**
        * @function
        * @name pc.PostEffectQueue#addEffect
        * @description Adds a post effect to the queue. If the queue is disabled adding a post effect will
        * automatically enable the queue.
        * @param {pc.PostEffect} effect The post effect to add to the queue.
        */
       addEffect(effect: pc.PostEffect): void;

       /**
        * @function
        * @name pc.PostEffectQueue#removeEffect
        * @description Removes a post effect from the queue. If the queue becomes empty it will be disabled automatically.
        * @param {pc.PostEffect} effect The post effect to remove.
        */
       removeEffect(effect: pc.PostEffect): void;

       /**
        * @function
        * @name pc.PostEffectQueue#destroy
        * @description Removes all the effects from the queue and disables it
        */
       destroy(): void;

       /**
        * @function
        * @name pc.PostEffectQueue#enable
        * @description Enables the queue and all of its effects. If there are no effects then the queue will not be enabled.
        */
       enable(): void;

       /**
        * @function
        * @name pc.PostEffectQueue#disable
        * @description Disables the queue and all of its effects.
        */
       disable(): void;

   }

   /**
    * @name pc.CameraComponentSystem
    * @class Used to add and remove {@link pc.CameraComponent}s from Entities. It also holds an
    * array of all active cameras.
    * @description Create a new CameraComponentSystem
    * @param {pc.Application} app The Application
    * @extends pc.ComponentSystem
    */
   class CameraComponentSystem extends pc.ComponentSystem {
       /**
        * @name pc.CameraComponentSystem
        * @class Used to add and remove {@link pc.CameraComponent}s from Entities. It also holds an
        * array of all active cameras.
        * @description Create a new CameraComponentSystem
        * @param {pc.Application} app The Application
        * @extends pc.ComponentSystem
        */
       constructor(app: pc.Application);

   }

   /**
    * @component
    * @name pc.CollisionComponent
    * @description Create a new CollisionComponent
    * @class A collision volume. use this in conjunction with a {@link pc.RigidBodyComponent} to make a collision volume that can be simulated using the physics engine.
    * <p>If the {@link pc.Entity} does not have a {@link pc.RigidBodyComponent} then this collision volume will act as a trigger volume. When an entity with a dynamic
    * or kinematic body enters or leaves an entity with a trigger volume, both entities will receive trigger events.
    * <p>The following table shows all the events that can be fired between two Entities:
    * <table class="table table-striped table-condensed">
    *  <tr><td></td><td><strong>Rigid Body (Static)</strong></td><td><strong>Rigid Body (Dynamic or Kinematic)</strong></td><td><strong>Trigger Volume</strong></td></tr>
    *  <tr>
    *       <td><strong>Rigid Body (Static)</strong></td>
    *       <td>-</td>
    *       <td><ul class="list-group">
    *           <li class="list-group-item">contact</li>
    *           <li class="list-group-item">collisionstart</li>
    *           <li class="list-group-item">collisionend</li>
    *       </td>
    *       <td>-</td>
    *   </tr>
    *  <tr>
    *       <td><strong>Rigid Body (Dynamic or Kinematic)</strong></td>
    *       <td><ul class="list-group">
    *           <li class="list-group-item">contact</li>
    *           <li class="list-group-item">collisionstart</li>
    *           <li class="list-group-item">collisionend</li>
    *       </td>
    *       <td><ul class="list-group">
    *           <li class="list-group-item">contact</li>
    *           <li class="list-group-item">collisionstart</li>
    *           <li class="list-group-item">collisionend</li>
    *       </td>
    *       <td><ul class="list-group">
    *           <li class="list-group-item">triggerenter</li>
    *           <li class="list-group-item">triggerleave</li>
    *       </td>
    *   </tr>
    *  <tr>
    *       <td><strong>Trigger Volume</strong></td>
    *       <td>-</td>
    *       <td><ul class="list-group">
    *           <li class="list-group-item">triggerenter</li>
    *           <li class="list-group-item">triggerleave</li>
    *       </td>
    *       <td>-</td>
    *   </tr>
    * </table>
    * </p>
    * @param {pc.CollisionComponentSystem} system The ComponentSystem that created this Component
    * @param {pc.Entity} entity The Entity that this Component is attached to.
    * @property {String} type The type of the collision volume. Defaults to 'box'. Can be one of the following:
    * <ul>
    * <li><strong>box</strong>: A box-shaped collision volume.</li>
    * <li><strong>sphere</strong>: A sphere-shaped collision volume.</li>
    * <li><strong>capsulse</strong>: A capsule-shaped collision volume.</li>
    * <li><strong>cylinder</strong>: A cylinder-shaped collision volume.</li>
    * <li><strong>mesh</strong>: A collision volume that uses a model asset as its shape.</li>
    * </ul>
    * @property {pc.Vec3} halfExtents The half-extents of the box-shaped collision volume in the x, y and z axes. Defaults to [0.5, 0.5, 0.5]
    * @property {Number} radius The radius of the sphere, capsule or cylinder-shaped collision volumes. Defaults to 0.5
    * @property {Number} axis The local space axis with which the capsule or cylinder-shaped collision volume's length is aligned. 0 for X, 1 for Y and 2 for Z. Defaults to 1 (Y-axis).
    * @property {Number} height The total height of the capsule or cylinder-shaped collision volume from tip to tip. Defaults to 2.
    * @property {pc.Asset} asset The asset for the model of the mesh collision volume - can also be an asset id.
    * @property {pc.Model} model The model that is added to the scene graph for the mesh collision volume.
    * @extends pc.Component
    */
   class CollisionComponent extends pc.Component {
       /**
        * @component
        * @name pc.CollisionComponent
        * @description Create a new CollisionComponent
        * @class A collision volume. use this in conjunction with a {@link pc.RigidBodyComponent} to make a collision volume that can be simulated using the physics engine.
        * <p>If the {@link pc.Entity} does not have a {@link pc.RigidBodyComponent} then this collision volume will act as a trigger volume. When an entity with a dynamic
        * or kinematic body enters or leaves an entity with a trigger volume, both entities will receive trigger events.
        * <p>The following table shows all the events that can be fired between two Entities:
        * <table class="table table-striped table-condensed">
        *  <tr><td></td><td><strong>Rigid Body (Static)</strong></td><td><strong>Rigid Body (Dynamic or Kinematic)</strong></td><td><strong>Trigger Volume</strong></td></tr>
        *  <tr>
        *       <td><strong>Rigid Body (Static)</strong></td>
        *       <td>-</td>
        *       <td><ul class="list-group">
        *           <li class="list-group-item">contact</li>
        *           <li class="list-group-item">collisionstart</li>
        *           <li class="list-group-item">collisionend</li>
        *       </td>
        *       <td>-</td>
        *   </tr>
        *  <tr>
        *       <td><strong>Rigid Body (Dynamic or Kinematic)</strong></td>
        *       <td><ul class="list-group">
        *           <li class="list-group-item">contact</li>
        *           <li class="list-group-item">collisionstart</li>
        *           <li class="list-group-item">collisionend</li>
        *       </td>
        *       <td><ul class="list-group">
        *           <li class="list-group-item">contact</li>
        *           <li class="list-group-item">collisionstart</li>
        *           <li class="list-group-item">collisionend</li>
        *       </td>
        *       <td><ul class="list-group">
        *           <li class="list-group-item">triggerenter</li>
        *           <li class="list-group-item">triggerleave</li>
        *       </td>
        *   </tr>
        *  <tr>
        *       <td><strong>Trigger Volume</strong></td>
        *       <td>-</td>
        *       <td><ul class="list-group">
        *           <li class="list-group-item">triggerenter</li>
        *           <li class="list-group-item">triggerleave</li>
        *       </td>
        *       <td>-</td>
        *   </tr>
        * </table>
        * </p>
        * @param {pc.CollisionComponentSystem} system The ComponentSystem that created this Component
        * @param {pc.Entity} entity The Entity that this Component is attached to.
        * @property {String} type The type of the collision volume. Defaults to 'box'. Can be one of the following:
        * <ul>
        * <li><strong>box</strong>: A box-shaped collision volume.</li>
        * <li><strong>sphere</strong>: A sphere-shaped collision volume.</li>
        * <li><strong>capsulse</strong>: A capsule-shaped collision volume.</li>
        * <li><strong>cylinder</strong>: A cylinder-shaped collision volume.</li>
        * <li><strong>mesh</strong>: A collision volume that uses a model asset as its shape.</li>
        * </ul>
        * @property {pc.Vec3} halfExtents The half-extents of the box-shaped collision volume in the x, y and z axes. Defaults to [0.5, 0.5, 0.5]
        * @property {Number} radius The radius of the sphere, capsule or cylinder-shaped collision volumes. Defaults to 0.5
        * @property {Number} axis The local space axis with which the capsule or cylinder-shaped collision volume's length is aligned. 0 for X, 1 for Y and 2 for Z. Defaults to 1 (Y-axis).
        * @property {Number} height The total height of the capsule or cylinder-shaped collision volume from tip to tip. Defaults to 2.
        * @property {pc.Asset} asset The asset for the model of the mesh collision volume - can also be an asset id.
        * @property {pc.Model} model The model that is added to the scene graph for the mesh collision volume.
        * @extends pc.Component
        */
       constructor(system: pc.CollisionComponentSystem, entity: pc.Entity);

   }

   /**
    * @name pc.CollisionComponentSystem
    * @description Creates a new CollisionComponentSystem.
    * @class Manages creation of {@link pc.CollisionComponent}s.
    * @param {pc.Application} app The running {pc.Application}
    * @extends pc.ComponentSystem
    */
   class CollisionComponentSystem extends pc.ComponentSystem {
       /**
        * @name pc.CollisionComponentSystem
        * @description Creates a new CollisionComponentSystem.
        * @class Manages creation of {@link pc.CollisionComponent}s.
        * @param {pc.Application} app The running {pc.Application}
        * @extends pc.ComponentSystem
        */
       constructor(app: pc.Application);

   }

   /**
    * @private
    * @name pc.Trigger
    * @class Creates a trigger object used to create internal physics objects that interact with
    * rigid bodies and trigger collision events with no collision response
    * @param {pc.Application} app The running {pc.Application}
    * @param {pc.Component} component The component for which the trigger will be created
    * @param {pc.ComponentData} data The data for the component
    */
   class Trigger {
       /**
        * @private
        * @name pc.Trigger
        * @class Creates a trigger object used to create internal physics objects that interact with
        * rigid bodies and trigger collision events with no collision response
        * @param {pc.Application} app The running {pc.Application}
        * @param {pc.Component} component The component for which the trigger will be created
        * @param {pc.ComponentData} data The data for the component
        */
       constructor(app: pc.Application, component: pc.Component, data: pc.ComponentData);

   }

   /**
    * @name pc.Component
    * @description Base constructor for a Component
    * @class Components are used to attach functionality on a {@link pc.Entity}. Components
    * can receive update events each frame, and expose properties to the PlayCanvas Editor.
    * @param {pc.ComponentSystem} system The ComponentSystem used to create this Component
    * @param {pc.Entity} entity The Entity that this Component is attached to
    * @property {Boolean} enabled Enables or disables the component.
    */
   class Component {
       /**
        * @name pc.Component
        * @description Base constructor for a Component
        * @class Components are used to attach functionality on a {@link pc.Entity}. Components
        * can receive update events each frame, and expose properties to the PlayCanvas Editor.
        * @param {pc.ComponentSystem} system The ComponentSystem used to create this Component
        * @param {pc.Entity} entity The Entity that this Component is attached to
        * @property {Boolean} enabled Enables or disables the component.
        */
       constructor(system: pc.ComponentSystem, entity: pc.Entity);

       /**
        * @private
        * @readonly
        * @name pc.Component#data
        * @type pc.ComponentData
        * @description Access the {@link pc.ComponentData} directly. Usually you should
        * access the data properties via the individual properties as modifying this data
        * directly will not fire 'set' events.
        */
       private data: pc.ComponentData;

   }

   /**
    * @private
    * @name pc.ComponentData
    * @class Base class for Component data storage.
    */
   class ComponentData {
       /**
        * @private
        * @name pc.ComponentData
        * @class Base class for Component data storage.
        */
       constructor();

   }

   /**
    * @name pc.ElementComponentSystem
    * @description Create a new ElementComponentSystem
    * @class Attach 2D text to an entity
    * @param {pc.Application} app The application
    * @extends pc.ComponentSystem
    */
   class ElementComponentSystem extends pc.ComponentSystem {
       /**
        * @name pc.ElementComponentSystem
        * @description Create a new ElementComponentSystem
        * @class Attach 2D text to an entity
        * @param {pc.Application} app The application
        * @extends pc.ComponentSystem
        */
       constructor(app: pc.Application);

   }

   /**
    * @component
    * @name pc.LightComponent
    * @class The Light Component enables the Entity to light the scene. There are three types
    * of light: directional, point and spot. Directional lights are global in that they are
    * considered to be infinitely far away and light the entire scene. Point and spot lights
    * are local in that they have a position and a range. A spot light is a specialization of
    * a point light where light is emitted in a cone rather than in all directions. Lights
    * also have the ability to cast shadows to add realism to your scenes.
    * @description Creates a new Light Component.
    * @param {pc.LightComponentSystem} system The ComponentSystem that created this Component.
    * @param {pc.Entity} entity The Entity that this Component is attached to.
    * @example
    * // Add a pc.LightComponent to an entity
    * var entity = new pc.Entity();
    * entity.addComponent('light', {
    *     type: "point",
    *     color: new pc.Color(1, 0, 0),
    *     range: 10
    * });
    * @example
    * // Get the pc.LightComponent on an entity
    * var lightComponent = entity.light;
    * @example
    * // Update a property on a light component
    * entity.light.range = 20;
    * @property {String} type The type of light. Can be:
    * <ul>
    *     <li>"directional": A light that is infinitely far away and lights the entire scene from one direction.</li>
    *     <li>"point": A light that illuminates in all directions from a point.</li>
    *     <li>"spot": A light that illuminates in all directions from a point and is bounded by a cone.</li>
    * </ul>
    * Defaults to "directional".
    * @property {pc.Color} color The Color of the light. The alpha component of the color is
    * ignored. Defaults to white (1, 1, 1).
    * @property {Number} intensity The brightness of the light. Defaults to 1.
    * @property {Boolean} castShadows If enabled the light will cast shadows. Defaults to false.
    * @property {Number} shadowDistance The distance from the viewpoint beyond which shadows
    * are no longer rendered. Affects directional lights only. Defaults to 40.
    * @property {Number} shadowResolution The size of the texture used for the shadow map.
    * Valid sizes are 64, 128, 256, 512, 1024, 2048. Defaults to 1024.
    * @property {Number} shadowBias The depth bias for tuning the appearance of the shadow
    * mapping generated by this light. Defaults to 0.05.
    * @property {Number} normalOffsetBias Normal offset depth bias. Defaults to 0.
    * @property {Number} range The range of the light. Affects point and spot lights only.
    * Defaults to 10.
    * @property {Number} innerConeAngle The angle at which the spotlight cone starts
    * to fade off. The angle is specified in degrees. Affects spot lights only. Defaults
    * to 40.
    * @property {Number} outerConeAngle The angle at which the spotlight cone has faded
    * to nothing. The angle is specified in degrees. Affects spot lights only. Defaults
    * to 45.
    * @property {Number} falloffMode Controls the rate at which a light attentuates from
    * its position. Can be:
    * <ul>
    * <li>{@link pc.LIGHTFALLOFF_LINEAR}: Linear.</li>
    * <li>{@link pc.LIGHTFALLOFF_INVERSESQUARED}: Inverse squared.</li>
    * </ul>
    * Affects point and spot lights only. Defaults to pc.LIGHTFALLOFF_LINEAR.
    * @property {Number} mask Defines a mask to determine which {@link pc.MeshInstance}s are
    * lit by this light. Defaults to 1.
    * @property {Boolean} affectDynamic If enabled the light will affect non-lightmapped objects
    * @property {Boolean} affectLightmapped If enabled the light will affect lightmapped objects
    * @property {Boolean} bake If enabled the light will be rendered into lightmaps
    * @property {Boolean} bakeDir If enabled and bake=true, the light's direction will contribute to directional lightmaps.
    * Be aware, that directional lightmap is an approximation and can only hold single direction per pixel.
    * Intersecting multiple lights with bakeDir=true may lead to incorrect look of specular/bump-mapping in the area of intersection.
    * The error is not always visible though, and highly scene-dependent.
    * @property {Number} shadowUpdateMode Tells the renderer how often shadows must be updated for this light. Options:
    * <ul>
    * <li>{@link pc.SHADOWUPDATE_NONE}: Don't render shadows.</li>
    * <li>{@link pc.SHADOWUPDATE_THISFRAME}: Render shadows only once (then automatically switches to pc.SHADOWUPDATE_NONE).</li>
    * <li>{@link pc.SHADOWUPDATE_REALTIME}: Render shadows every frame (default).</li>
    * </ul>
    * @property {Number} shadowType Type of shadows being rendered by this light. Options:
    * <ul>
    * <li>{@link pc.SHADOW_DEPTH}: Render packed depth, can be used for hard or PCF sampling.</li>
    * <li>{@link pc.SHADOW_VSM8}: Render packed variance shadow map. All shadow receivers must also cast shadows for this mode to work correctly.</li>
    * <li>{@link pc.SHADOW_VSM16}: Render 16-bit exponential variance shadow map. Requires OES_texture_half_float extension. Falls back to pc.SHADOW_VSM8, if not supported.</li>
    * <li>{@link pc.SHADOW_VSM32}: Render 32-bit exponential variance shadow map. Requires OES_texture_float extension. Falls back to pc.SHADOW_VSM16, if not supported.</li>
    * </ul>
    * @property {Number} vsmBlurMode Blurring mode for variance shadow maps:
    * <ul>
    * <li>{@link pc.BLUR_BOX}: Box filter.</li>
    * <li>{@link pc.BLUR_GAUSSIAN}: Gaussian filter. May look smoother than box, but requires more samples.</li>
    * </ul>
    * @property {Number} vsmBlurSize Number of samples used for blurring a variance shadow map. Only uneven numbers work, even are incremented. Minimum value is 1, maximum is 25.
    * @property {Number} cookieAsset Asset that has texture that will be assigned to cookie internally once asset resource is available.
    * @property {pc.Texture} cookie Projection texture. Must be 2D for spot and cubemap for point (ignored if incorrect type is used).
    * @property {Number} cookieIntensity Projection texture intensity (default is 1).
    * @property {Boolean} cookieFalloff Toggle normal spotlight falloff when projection texture is used. When set to false, spotlight will work like a pure texture projector (only fading with distance). Default is false.
    * @property {String} cookieChannel  Color channels of the projection texture to use. Can be "r", "g", "b", "a", "rgb" or any swizzled combination.
    * @property {Number} cookieAngle Angle for spotlight cookie rotation.
    * @property {pc.Vec2} cookieScale Spotlight cookie scale.
    * @property {pc.Vec2} cookieOffset Spotlight cookie position offset.
    * @property {Boolean} isStatic Mark light as non-movable (optimization)
    * @extends pc.Component
    */
   class LightComponent extends pc.Component {
       /**
        * @component
        * @name pc.LightComponent
        * @class The Light Component enables the Entity to light the scene. There are three types
        * of light: directional, point and spot. Directional lights are global in that they are
        * considered to be infinitely far away and light the entire scene. Point and spot lights
        * are local in that they have a position and a range. A spot light is a specialization of
        * a point light where light is emitted in a cone rather than in all directions. Lights
        * also have the ability to cast shadows to add realism to your scenes.
        * @description Creates a new Light Component.
        * @param {pc.LightComponentSystem} system The ComponentSystem that created this Component.
        * @param {pc.Entity} entity The Entity that this Component is attached to.
        * @example
        * // Add a pc.LightComponent to an entity
        * var entity = new pc.Entity();
        * entity.addComponent('light', {
        *     type: "point",
        *     color: new pc.Color(1, 0, 0),
        *     range: 10
        * });
        * @example
        * // Get the pc.LightComponent on an entity
        * var lightComponent = entity.light;
        * @example
        * // Update a property on a light component
        * entity.light.range = 20;
        * @property {String} type The type of light. Can be:
        * <ul>
        *     <li>"directional": A light that is infinitely far away and lights the entire scene from one direction.</li>
        *     <li>"point": A light that illuminates in all directions from a point.</li>
        *     <li>"spot": A light that illuminates in all directions from a point and is bounded by a cone.</li>
        * </ul>
        * Defaults to "directional".
        * @property {pc.Color} color The Color of the light. The alpha component of the color is
        * ignored. Defaults to white (1, 1, 1).
        * @property {Number} intensity The brightness of the light. Defaults to 1.
        * @property {Boolean} castShadows If enabled the light will cast shadows. Defaults to false.
        * @property {Number} shadowDistance The distance from the viewpoint beyond which shadows
        * are no longer rendered. Affects directional lights only. Defaults to 40.
        * @property {Number} shadowResolution The size of the texture used for the shadow map.
        * Valid sizes are 64, 128, 256, 512, 1024, 2048. Defaults to 1024.
        * @property {Number} shadowBias The depth bias for tuning the appearance of the shadow
        * mapping generated by this light. Defaults to 0.05.
        * @property {Number} normalOffsetBias Normal offset depth bias. Defaults to 0.
        * @property {Number} range The range of the light. Affects point and spot lights only.
        * Defaults to 10.
        * @property {Number} innerConeAngle The angle at which the spotlight cone starts
        * to fade off. The angle is specified in degrees. Affects spot lights only. Defaults
        * to 40.
        * @property {Number} outerConeAngle The angle at which the spotlight cone has faded
        * to nothing. The angle is specified in degrees. Affects spot lights only. Defaults
        * to 45.
        * @property {Number} falloffMode Controls the rate at which a light attentuates from
        * its position. Can be:
        * <ul>
        * <li>{@link pc.LIGHTFALLOFF_LINEAR}: Linear.</li>
        * <li>{@link pc.LIGHTFALLOFF_INVERSESQUARED}: Inverse squared.</li>
        * </ul>
        * Affects point and spot lights only. Defaults to pc.LIGHTFALLOFF_LINEAR.
        * @property {Number} mask Defines a mask to determine which {@link pc.MeshInstance}s are
        * lit by this light. Defaults to 1.
        * @property {Boolean} affectDynamic If enabled the light will affect non-lightmapped objects
        * @property {Boolean} affectLightmapped If enabled the light will affect lightmapped objects
        * @property {Boolean} bake If enabled the light will be rendered into lightmaps
        * @property {Boolean} bakeDir If enabled and bake=true, the light's direction will contribute to directional lightmaps.
        * Be aware, that directional lightmap is an approximation and can only hold single direction per pixel.
        * Intersecting multiple lights with bakeDir=true may lead to incorrect look of specular/bump-mapping in the area of intersection.
        * The error is not always visible though, and highly scene-dependent.
        * @property {Number} shadowUpdateMode Tells the renderer how often shadows must be updated for this light. Options:
        * <ul>
        * <li>{@link pc.SHADOWUPDATE_NONE}: Don't render shadows.</li>
        * <li>{@link pc.SHADOWUPDATE_THISFRAME}: Render shadows only once (then automatically switches to pc.SHADOWUPDATE_NONE).</li>
        * <li>{@link pc.SHADOWUPDATE_REALTIME}: Render shadows every frame (default).</li>
        * </ul>
        * @property {Number} shadowType Type of shadows being rendered by this light. Options:
        * <ul>
        * <li>{@link pc.SHADOW_DEPTH}: Render packed depth, can be used for hard or PCF sampling.</li>
        * <li>{@link pc.SHADOW_VSM8}: Render packed variance shadow map. All shadow receivers must also cast shadows for this mode to work correctly.</li>
        * <li>{@link pc.SHADOW_VSM16}: Render 16-bit exponential variance shadow map. Requires OES_texture_half_float extension. Falls back to pc.SHADOW_VSM8, if not supported.</li>
        * <li>{@link pc.SHADOW_VSM32}: Render 32-bit exponential variance shadow map. Requires OES_texture_float extension. Falls back to pc.SHADOW_VSM16, if not supported.</li>
        * </ul>
        * @property {Number} vsmBlurMode Blurring mode for variance shadow maps:
        * <ul>
        * <li>{@link pc.BLUR_BOX}: Box filter.</li>
        * <li>{@link pc.BLUR_GAUSSIAN}: Gaussian filter. May look smoother than box, but requires more samples.</li>
        * </ul>
        * @property {Number} vsmBlurSize Number of samples used for blurring a variance shadow map. Only uneven numbers work, even are incremented. Minimum value is 1, maximum is 25.
        * @property {Number} cookieAsset Asset that has texture that will be assigned to cookie internally once asset resource is available.
        * @property {pc.Texture} cookie Projection texture. Must be 2D for spot and cubemap for point (ignored if incorrect type is used).
        * @property {Number} cookieIntensity Projection texture intensity (default is 1).
        * @property {Boolean} cookieFalloff Toggle normal spotlight falloff when projection texture is used. When set to false, spotlight will work like a pure texture projector (only fading with distance). Default is false.
        * @property {String} cookieChannel  Color channels of the projection texture to use. Can be "r", "g", "b", "a", "rgb" or any swizzled combination.
        * @property {Number} cookieAngle Angle for spotlight cookie rotation.
        * @property {pc.Vec2} cookieScale Spotlight cookie scale.
        * @property {pc.Vec2} cookieOffset Spotlight cookie position offset.
        * @property {Boolean} isStatic Mark light as non-movable (optimization)
        * @extends pc.Component
        */
       constructor(system: pc.LightComponentSystem, entity: pc.Entity);

   }

   /**
    * @component
    * @name pc.ModelComponent
    * @description Create a new ModelComponent
    * @class Enables an Entity to render a model or a primitive shape. This Component attaches additional model geometry in to the scene graph below the Entity.
    * @param {pc.ModelComponentSystem} system The ComponentSystem that created this Component
    * @param {pc.Entity} entity The Entity that this Component is attached to.
    * @extends pc.Component
    * @property {String} type The type of the model, which can be one of the following values:
    * <ul>
    *     <li>asset: The component will render a model asset</li>
    *     <li>box: The component will render a box</li>
    *     <li>capsule: The component will render a capsule</li>
    *     <li>cone: The component will render a cone</li>
    *     <li>cylinder: The component will render a cylinder</li>
    *     <li>sphere: The component will render a sphere</li>
    * </ul>
    * @property {pc.Asset} asset The asset for the model (only applies to models of type 'asset') - can also be an asset id.
    * @property {Boolean} castShadows If true, this model will cast shadows for lights that have shadow casting enabled.
    * @property {Boolean} receiveShadows If true, shadows will be cast on this model
    * @property {Number} materialAsset The material {@link pc.Asset} that will be used to render the model (not used on models of type 'asset')
    * @property {pc.Model} model The model that is added to the scene graph. It can be not set or loaded, so will return null.
    * @property {Object} mapping A dictionary that holds material overrides for each mesh instance. Only applies to model components of type 'asset'. The mapping contains pairs of mesh instance index - material asset id.
    * @property {Boolean} castShadowsLightmap If true, this model will cast shadows when rendering lightmaps
    * @property {Boolean} lightmapped If true, this model will be lightmapped after using lightmapper.bake()
    * @property {Number} lightmapSizeMultiplier Lightmap resolution multiplier
    * @property {Boolean} isStatic Mark model as non-movable (optimization)
    * @property {pc.MeshInstance[]} meshInstances An array of meshInstances contained in the component's model. If model is not set or loaded for component it will return null.
    */
   class ModelComponent extends pc.Component {
       /**
        * @component
        * @name pc.ModelComponent
        * @description Create a new ModelComponent
        * @class Enables an Entity to render a model or a primitive shape. This Component attaches additional model geometry in to the scene graph below the Entity.
        * @param {pc.ModelComponentSystem} system The ComponentSystem that created this Component
        * @param {pc.Entity} entity The Entity that this Component is attached to.
        * @extends pc.Component
        * @property {String} type The type of the model, which can be one of the following values:
        * <ul>
        *     <li>asset: The component will render a model asset</li>
        *     <li>box: The component will render a box</li>
        *     <li>capsule: The component will render a capsule</li>
        *     <li>cone: The component will render a cone</li>
        *     <li>cylinder: The component will render a cylinder</li>
        *     <li>sphere: The component will render a sphere</li>
        * </ul>
        * @property {pc.Asset} asset The asset for the model (only applies to models of type 'asset') - can also be an asset id.
        * @property {Boolean} castShadows If true, this model will cast shadows for lights that have shadow casting enabled.
        * @property {Boolean} receiveShadows If true, shadows will be cast on this model
        * @property {Number} materialAsset The material {@link pc.Asset} that will be used to render the model (not used on models of type 'asset')
        * @property {pc.Model} model The model that is added to the scene graph. It can be not set or loaded, so will return null.
        * @property {Object} mapping A dictionary that holds material overrides for each mesh instance. Only applies to model components of type 'asset'. The mapping contains pairs of mesh instance index - material asset id.
        * @property {Boolean} castShadowsLightmap If true, this model will cast shadows when rendering lightmaps
        * @property {Boolean} lightmapped If true, this model will be lightmapped after using lightmapper.bake()
        * @property {Number} lightmapSizeMultiplier Lightmap resolution multiplier
        * @property {Boolean} isStatic Mark model as non-movable (optimization)
        * @property {pc.MeshInstance[]} meshInstances An array of meshInstances contained in the component's model. If model is not set or loaded for component it will return null.
        */
       constructor(system: pc.ModelComponentSystem, entity: pc.Entity);

       /**
        * @function
        * @private
        * @name pc.ModelComponent#onSetType
        * @description Handle changes to the 'type' variable
        */
       private onSetType(): void;

       /**
        * @function
        * @name pc.ModelComponent#hide
        * @description Stop rendering model without removing it from the scene hierarchy.
        * This method sets the {@link pc.MeshInstance#visible} property of every MeshInstance in the model to false
        * Note, this does not remove the model or mesh instances from the scene hierarchy or draw call list.
        * So the model component still incurs some CPU overhead.
        * @example
        *   this.timer = 0;
        *   this.visible = true;
        *   // ...
        *   // blink model every 0.1 seconds
        *   this.timer += dt;
        *   if (this.timer > 0.1) {
        *       if (!this.visible) {
        *           this.entity.model.show();
        *           this.visible = true;
        *       } else {
        *           this.entity.model.hide();
        *           this.visible = false;
        *       }
        *       this.timer = 0;
        *   }
        */
       hide(): void;

       /**
        * @function
        * @name pc.ModelComponent#show
        * @description Enable rendering of the model if hidden using {@link pc.ModelComponent#hide}.
        * This method sets all the {@link pc.MeshInstance#visible} property on all mesh instances to true.
        */
       show(): void;

   }

   /**
    * @private
    * @name pc.ModelComponentData
    * @class Data for a {@link pc.ModelComponent}
    * @description Create a new data object
    * @extends pc.ComponentData
    */
   class ModelComponentData extends pc.ComponentData {
       /**
        * @private
        * @name pc.ModelComponentData
        * @class Data for a {@link pc.ModelComponent}
        * @description Create a new data object
        * @extends pc.ComponentData
        */
       constructor();

   }

   /**
    * @name pc.ModelComponentSystem
    * @description Create a new ModelComponentSystem
    * @class Allows an Entity to render a model or a primitive shape like a box,
    * capsule, sphere, cylinder, cone etc.
    * @param {pc.Application} app The Application.
    * @extends pc.ComponentSystem
    */
   class ModelComponentSystem extends pc.ComponentSystem {
       /**
        * @name pc.ModelComponentSystem
        * @description Create a new ModelComponentSystem
        * @class Allows an Entity to render a model or a primitive shape like a box,
        * capsule, sphere, cylinder, cone etc.
        * @param {pc.Application} app The Application.
        * @extends pc.ComponentSystem
        */
       constructor(app: pc.Application);

   }

   /**
    * @component
    * @name pc.ParticleSystemComponent
    * @description Create a new ParticleSystemComponent
    * @class Used to simulate particles and produce renderable particle mesh on either CPU or GPU.
    * GPU simulation is generally much faster than its CPU counterpart, because it avoids slow CPU-GPU synchronization and takes advantage of many GPU cores.
    * However, it requires client to support reasonable uniform count, reading from multiple textures in vertex shader and OES_texture_float extension, including rendering into float textures.
    * Most mobile devices fail to satisfy these requirements, so it's not recommended to simulate thousands of particles on them. GPU version also can't sort particles, so enabling sorting forces CPU mode too.
    * Particle rotation is specified by a single angle parameter: default billboard particles rotate around camera facing axis, while mesh particles rotate around 2 different view-independent axes.
    * Most of the simulation parameters are specified with pc.Curve or pc.CurveSet. Curves are interpolated based on each particle's lifetime, therefore parameters are able to change over time.
    * Most of the curve parameters can also be specified by 2 minimum/maximum curves, this way each particle will pick a random value in-between.
    * @param {pc.ParticleSystemComponent} system The ComponentSystem that created this Component
    * @param {pc.Entity} entity The Entity this Component is attached to
    * @extends pc.Component
    * @property {Boolean} loop Enables or disables respawning of particles.
    * @property {Boolean} paused Pauses or unpauses the simulation.
    * @property {Boolean} preWarm If enabled, the particle system will be initialized as though it had already completed a full cycle. This only works with looping particle systems.
    * @property {Boolean} lighting If enabled, particles will be lit by ambient and directional lights.
    * @property {Boolean} halfLambert Enabling Half Lambert lighting avoids particles looking too flat in shadowed areas. It is a completely non-physical lighting model but can give more pleasing visual results.
    * @property {Boolean} alignToMotion Orient particles in their direction of motion.
    * @property {Boolean} depthWrite If enabled, the particles will write to the depth buffer. If disabled, the depth buffer is left unchanged and particles will be guaranteed to overwrite one another in the order in which they are rendered.
    * @property {Boolean} noFog Disable fogging
    * @property {Number} numParticles Maximum number of simulated particles.
    * @property {Number} rate Minimal interval in seconds between particle births.
    * @property {Number} rate2 Maximal interval in seconds between particle births.
    * @property {Number} startAngle Minimal inital Euler angle of a particle.
    * @property {Number} startAngle2 Maximal inital Euler angle of a particle.
    * @property {Number} lifetime The length of time in seconds between a particle's birth and its death.
    * @property {Number} stretch A value in world units that controls the amount by which particles are stretched based on their velocity. Particles are stretched from their center towards their previous position.
    * @property {Number} intensity Color multiplier.
    * @property {Boolean} animLoop Controls whether the sprite sheet animation plays once or loops continuously.
    * @property {Number} animTilesX Number of horizontal tiles in the sprite sheet.
    * @property {Number} animTilesY Number of vertical tiles in the sprite sheet.
    * @property {Number} animNumFrames Number of sprite sheet frames to play. It is valid to set the number of frames to a value less than animTilesX multiplied by animTilesY.
    * @property {Number} animSpeed Sprite sheet animation speed. 1 = particle lifetime, 2 = twice during lifetime etc...
    * @property {Number} depthSoftening Controls fading of particles near their intersections with scene geometry. This effect, when it's non-zero, requires scene depth map to be rendered. Multiple depth-dependent effects can share the same map, but if you only use it for particles, bear in mind that it can double engine draw calls.
    * @property {Number} initialVelocity Defines magnitude of the initial emitter velocity. Direction is given by emitter shape.
    * @property {pc.Vec3} emitterExtents (Only for EMITTERSHAPE_BOX) The extents of a local space bounding box within which particles are spawned at random positions.
    * @property {Number} emitterRadius (Only for EMITTERSHAPE_SPHERE) The radius within which particles are spawned at random positions.
    * @property {pc.Vec3} wrapBounds The half extents of a world space box volume centered on the owner entity's position. If a particle crosses the boundary of one side of the volume, it teleports to the opposite side.
    * @property {pc.Texture} colorMap The color map texture to apply to all particles in the system. If no texture is assigned, a default spot texture is used.
    * @property {pc.Texture} normalMap The normal map texture to apply to all particles in the system. If no texture is assigned, an approximate spherical normal is calculated for each vertex.
    * @property {pc.EMITTERSHAPE} emitterShape Shape of the emitter. Defines the bounds inside which particles are spawned. Also affects the direction of initial velocity.
    * <ul>
    * <li><strong>{@link pc.EMITTERSHAPE_BOX}</strong>: Box shape parameterized by emitterExtents. Initial velocity is directed towards local Z axis.</li>
    * <li><strong>{@link pc.EMITTERSHAPE_SPHERE}</strong>: Sphere shape parameterized by emitterRadius. Initial velocity is directed outwards from the center.</li>
    * </ul>
    * @property {pc.PARTICLESORT} sort Sorting mode. Forces CPU simulation, so be careful.
    * <ul>
    * <li><strong>{@link pc.PARTICLESORT_NONE}</strong>: No sorting, particles are drawn in arbitary order. Can be simulated on GPU.</li>
    * <li><strong>{@link pc.PARTICLESORT_DISTANCE}</strong>: Sorting based on distance to the camera. CPU only.</li>
    * <li><strong>{@link pc.PARTICLESORT_NEWER_FIRST}</strong>: Newer particles are drawn first. CPU only.</li>
    * <li><strong>{@link pc.PARTICLESORT_OLDER_FIRST}</strong>: Older particles are drawn first. CPU only.</li>
    * </ul>
    * @property {pc.Mesh} mesh Triangular mesh to be used as a particle. Only first vertex/index buffer is used. Vertex buffer must contain local position at first 3 floats of each vertex.
    * @property {pc.BLEND} blend Blending mode.
    * @property {pc.CurveSet} localVelocityGraph Velocity relative to emitter over lifetime.
    * @property {pc.CurveSet} localVelocityGraph2 If not null, particles pick random values between localVelocityGraph and localVelocityGraph2.
    * @property {pc.CurveSet} velocityGraph World-space velocity over lifetime.
    * @property {pc.CurveSet} velocityGraph2 If not null, particles pick random values between velocityGraph and velocityGraph2.
    * @property {pc.CurveSet} colorGraph Color over lifetime.
    * @property {pc.Curve} rotationSpeedGraph Rotation speed over lifetime.
    * @property {pc.Curve} rotationSpeedGraph2 If not null, particles pick random values between rotationSpeedGraph and rotationSpeedGraph2.
    * @property {pc.Curve} scaleGraph Scale over lifetime.
    * @property {pc.Curve} scaleGraph2 If not null, particles pick random values between scaleGraph and scaleGraph2.
    * @property {pc.Curve} alphaGraph Alpha over lifetime.
    * @property {pc.Curve} alphaGraph2 If not null, particles pick random values between alphaGraph and alphaGraph2.
    */
   class ParticleSystemComponent extends pc.Component {
       /**
        * @component
        * @name pc.ParticleSystemComponent
        * @description Create a new ParticleSystemComponent
        * @class Used to simulate particles and produce renderable particle mesh on either CPU or GPU.
        * GPU simulation is generally much faster than its CPU counterpart, because it avoids slow CPU-GPU synchronization and takes advantage of many GPU cores.
        * However, it requires client to support reasonable uniform count, reading from multiple textures in vertex shader and OES_texture_float extension, including rendering into float textures.
        * Most mobile devices fail to satisfy these requirements, so it's not recommended to simulate thousands of particles on them. GPU version also can't sort particles, so enabling sorting forces CPU mode too.
        * Particle rotation is specified by a single angle parameter: default billboard particles rotate around camera facing axis, while mesh particles rotate around 2 different view-independent axes.
        * Most of the simulation parameters are specified with pc.Curve or pc.CurveSet. Curves are interpolated based on each particle's lifetime, therefore parameters are able to change over time.
        * Most of the curve parameters can also be specified by 2 minimum/maximum curves, this way each particle will pick a random value in-between.
        * @param {pc.ParticleSystemComponent} system The ComponentSystem that created this Component
        * @param {pc.Entity} entity The Entity this Component is attached to
        * @extends pc.Component
        * @property {Boolean} loop Enables or disables respawning of particles.
        * @property {Boolean} paused Pauses or unpauses the simulation.
        * @property {Boolean} preWarm If enabled, the particle system will be initialized as though it had already completed a full cycle. This only works with looping particle systems.
        * @property {Boolean} lighting If enabled, particles will be lit by ambient and directional lights.
        * @property {Boolean} halfLambert Enabling Half Lambert lighting avoids particles looking too flat in shadowed areas. It is a completely non-physical lighting model but can give more pleasing visual results.
        * @property {Boolean} alignToMotion Orient particles in their direction of motion.
        * @property {Boolean} depthWrite If enabled, the particles will write to the depth buffer. If disabled, the depth buffer is left unchanged and particles will be guaranteed to overwrite one another in the order in which they are rendered.
        * @property {Boolean} noFog Disable fogging
        * @property {Number} numParticles Maximum number of simulated particles.
        * @property {Number} rate Minimal interval in seconds between particle births.
        * @property {Number} rate2 Maximal interval in seconds between particle births.
        * @property {Number} startAngle Minimal inital Euler angle of a particle.
        * @property {Number} startAngle2 Maximal inital Euler angle of a particle.
        * @property {Number} lifetime The length of time in seconds between a particle's birth and its death.
        * @property {Number} stretch A value in world units that controls the amount by which particles are stretched based on their velocity. Particles are stretched from their center towards their previous position.
        * @property {Number} intensity Color multiplier.
        * @property {Boolean} animLoop Controls whether the sprite sheet animation plays once or loops continuously.
        * @property {Number} animTilesX Number of horizontal tiles in the sprite sheet.
        * @property {Number} animTilesY Number of vertical tiles in the sprite sheet.
        * @property {Number} animNumFrames Number of sprite sheet frames to play. It is valid to set the number of frames to a value less than animTilesX multiplied by animTilesY.
        * @property {Number} animSpeed Sprite sheet animation speed. 1 = particle lifetime, 2 = twice during lifetime etc...
        * @property {Number} depthSoftening Controls fading of particles near their intersections with scene geometry. This effect, when it's non-zero, requires scene depth map to be rendered. Multiple depth-dependent effects can share the same map, but if you only use it for particles, bear in mind that it can double engine draw calls.
        * @property {Number} initialVelocity Defines magnitude of the initial emitter velocity. Direction is given by emitter shape.
        * @property {pc.Vec3} emitterExtents (Only for EMITTERSHAPE_BOX) The extents of a local space bounding box within which particles are spawned at random positions.
        * @property {Number} emitterRadius (Only for EMITTERSHAPE_SPHERE) The radius within which particles are spawned at random positions.
        * @property {pc.Vec3} wrapBounds The half extents of a world space box volume centered on the owner entity's position. If a particle crosses the boundary of one side of the volume, it teleports to the opposite side.
        * @property {pc.Texture} colorMap The color map texture to apply to all particles in the system. If no texture is assigned, a default spot texture is used.
        * @property {pc.Texture} normalMap The normal map texture to apply to all particles in the system. If no texture is assigned, an approximate spherical normal is calculated for each vertex.
        * @property {pc.EMITTERSHAPE} emitterShape Shape of the emitter. Defines the bounds inside which particles are spawned. Also affects the direction of initial velocity.
        * <ul>
        * <li><strong>{@link pc.EMITTERSHAPE_BOX}</strong>: Box shape parameterized by emitterExtents. Initial velocity is directed towards local Z axis.</li>
        * <li><strong>{@link pc.EMITTERSHAPE_SPHERE}</strong>: Sphere shape parameterized by emitterRadius. Initial velocity is directed outwards from the center.</li>
        * </ul>
        * @property {pc.PARTICLESORT} sort Sorting mode. Forces CPU simulation, so be careful.
        * <ul>
        * <li><strong>{@link pc.PARTICLESORT_NONE}</strong>: No sorting, particles are drawn in arbitary order. Can be simulated on GPU.</li>
        * <li><strong>{@link pc.PARTICLESORT_DISTANCE}</strong>: Sorting based on distance to the camera. CPU only.</li>
        * <li><strong>{@link pc.PARTICLESORT_NEWER_FIRST}</strong>: Newer particles are drawn first. CPU only.</li>
        * <li><strong>{@link pc.PARTICLESORT_OLDER_FIRST}</strong>: Older particles are drawn first. CPU only.</li>
        * </ul>
        * @property {pc.Mesh} mesh Triangular mesh to be used as a particle. Only first vertex/index buffer is used. Vertex buffer must contain local position at first 3 floats of each vertex.
        * @property {pc.BLEND} blend Blending mode.
        * @property {pc.CurveSet} localVelocityGraph Velocity relative to emitter over lifetime.
        * @property {pc.CurveSet} localVelocityGraph2 If not null, particles pick random values between localVelocityGraph and localVelocityGraph2.
        * @property {pc.CurveSet} velocityGraph World-space velocity over lifetime.
        * @property {pc.CurveSet} velocityGraph2 If not null, particles pick random values between velocityGraph and velocityGraph2.
        * @property {pc.CurveSet} colorGraph Color over lifetime.
        * @property {pc.Curve} rotationSpeedGraph Rotation speed over lifetime.
        * @property {pc.Curve} rotationSpeedGraph2 If not null, particles pick random values between rotationSpeedGraph and rotationSpeedGraph2.
        * @property {pc.Curve} scaleGraph Scale over lifetime.
        * @property {pc.Curve} scaleGraph2 If not null, particles pick random values between scaleGraph and scaleGraph2.
        * @property {pc.Curve} alphaGraph Alpha over lifetime.
        * @property {pc.Curve} alphaGraph2 If not null, particles pick random values between alphaGraph and alphaGraph2.
        */
       constructor(system: pc.ParticleSystemComponent, entity: pc.Entity);

       /**
        * @function
        * @name pc.ParticleSystemComponent#reset
        * @description Resets particle state, doesn't affect playing.
        */
       reset(): void;

       /**
        * @function
        * @name pc.ParticleSystemComponent#stop
        * @description Disables the emission of new particles, lets existing to finish their simulation.
        */
       stop(): void;

       /**
        * @function
        * @name pc.ParticleSystemComponent#pause
        * @description Freezes the simulation.
        */
       pause(): void;

       /**
        * @function
        * @name pc.ParticleSystemComponent#unpause
        * @description Unfreezes the simulation.
        */
       unpause(): void;

       /**
        * @function
        * @name pc.ParticleSystemComponent#play
        * @description Enables/unfreezes the simulation.
        */
       play(): void;

       /**
        * @function
        * @name pc.ParticleSystemComponent#isPlaying
        * @description Checks if simulation is in progress.
        */
       isPlaying(): void;

       /**
        * @private
        * @function
        * @name pc.ParticleSystemComponent#rebuild
        * @description Rebuilds all data used by this particle system.
        */
       private rebuild(): void;

   }

   /**
    * @name pc.ParticleSystemComponentSystem
    * @description Create a new ParticleSystemComponentSystem
    * @class Allows an Entity to render a particle system
    * @param {pc.Application} app The Application.
    * @extends pc.ComponentSystem
    */
   class ParticleSystemComponentSystem extends pc.ComponentSystem {
       /**
        * @name pc.ParticleSystemComponentSystem
        * @description Create a new ParticleSystemComponentSystem
        * @class Allows an Entity to render a particle system
        * @param {pc.Application} app The Application.
        * @extends pc.ComponentSystem
        */
       constructor(app: pc.Application);

   }

   /**
    * @private
    * @name pc.ComponentSystemRegistry
    * @class Store, access and delete instances of the various ComponentSystems
    * @description Create a new ComponentSystemRegistry
    */
   class ComponentSystemRegistry {
       /**
        * @private
        * @name pc.ComponentSystemRegistry
        * @class Store, access and delete instances of the various ComponentSystems
        * @description Create a new ComponentSystemRegistry
        */
       constructor();

       /**
        * @private
        * @function
        * @name pc.ComponentSystemRegistry#add
        * @description Add a new Component type
        * @param {Object} name The name of the Component
        * @param {Object} component The {pc.ComponentSystem} instance
        */
       private add(name: Object, component: Object): void;

       /**
        * @private
        * @function
        * @name pc.ComponentSystemRegistry#remove
        * @description Remove a Component type
        * @param {Object} name The name of the Component remove
        */
       private remove(name: Object): void;

       /**
        * @private
        * @function
        * @name pc.ComponentSystemRegistry#list
        * @description Return the contents of the registry as an array, this order of the array
        * is the order in which the ComponentSystems must be initialized.
        * @returns {pc.ComponentSystem[]} An array of component systems.
        */
       private list(): pc.ComponentSystem[];

   }

   /**
    * @component
    * @name pc.RigidBodyComponent
    * @description Create a new RigidBodyComponent
    * @class The rigidbody Component, when combined with a {@link pc.CollisionComponent}, allows your Entities to be simulated using realistic physics.
    * A rigidbody Component will fall under gravity and collide with other rigid bodies, using scripts you can apply forces to the body.
    * @param {pc.RigidBodyComponentSystem} system The ComponentSystem that created this Component
    * @param {pc.Entity} entity The Entity this Component is attached to
    * @extends pc.Component
    * @property {Number} mass The mass of the body. This is only relevant for {@link pc.BODYTYPE_DYNAMIC} bodies, other types have infinite mass.
    * @property {pc.Vec3} linearVelocity Defines the speed of the body in a given direction.
    * @property {pc.Vec3} angularVelocity Defines the rotational speed of the body around each world axis.
    * @property {Number} linearDamping Controls the rate at which a body loses linear velocity over time.
    * @property {Number} angularDamping Controls the rate at which a body loses angular velocity over time.
    * @property {pc.Vec3} linearFactor Scaling factor for linear movement of the body in each axis.
    * @property {pc.Vec3} angularFactor Scaling factor for angular movement of the body in each axis.
    * @property {Number} friction The friction value used when contacts occur between two bodies. A higher value indicates more friction.
    * @property {Number} restitution The amount of energy lost when two objects collide, this determines the bounciness of the object.
    * A value of 0 means that no energy is lost in the collision, a value of 1 means that all energy is lost.
    * So the higher the value the less bouncy the object is.
    * @property {Number} group The collision group this body belongs to. Combine the group and the mask to prevent bodies colliding with each other.
    * @property {Number} mask The collision mask sets which groups this body collides with. It is a bitfield of 16 bits, the first 8 bits are reserved for engine use.
    * @property {String} type The rigid body type determines how the body is simulated. Can be:
    * <ul>
    *     <li>pc.BODYTYPE_STATIC: infinite mass and cannot move.</li>
    *     <li>pc.BODYTYPE_DYNAMIC: simulated according to applied forces.</li>
    *     <li>pc.BODYTYPE_KINEMATIC: infinite mass and does not respond to forces but can still be moved by setting their velocity or position.</li>
    * </ul>
    */
   class RigidBodyComponent extends pc.Component {
       /**
        * @component
        * @name pc.RigidBodyComponent
        * @description Create a new RigidBodyComponent
        * @class The rigidbody Component, when combined with a {@link pc.CollisionComponent}, allows your Entities to be simulated using realistic physics.
        * A rigidbody Component will fall under gravity and collide with other rigid bodies, using scripts you can apply forces to the body.
        * @param {pc.RigidBodyComponentSystem} system The ComponentSystem that created this Component
        * @param {pc.Entity} entity The Entity this Component is attached to
        * @extends pc.Component
        * @property {Number} mass The mass of the body. This is only relevant for {@link pc.BODYTYPE_DYNAMIC} bodies, other types have infinite mass.
        * @property {pc.Vec3} linearVelocity Defines the speed of the body in a given direction.
        * @property {pc.Vec3} angularVelocity Defines the rotational speed of the body around each world axis.
        * @property {Number} linearDamping Controls the rate at which a body loses linear velocity over time.
        * @property {Number} angularDamping Controls the rate at which a body loses angular velocity over time.
        * @property {pc.Vec3} linearFactor Scaling factor for linear movement of the body in each axis.
        * @property {pc.Vec3} angularFactor Scaling factor for angular movement of the body in each axis.
        * @property {Number} friction The friction value used when contacts occur between two bodies. A higher value indicates more friction.
        * @property {Number} restitution The amount of energy lost when two objects collide, this determines the bounciness of the object.
        * A value of 0 means that no energy is lost in the collision, a value of 1 means that all energy is lost.
        * So the higher the value the less bouncy the object is.
        * @property {Number} group The collision group this body belongs to. Combine the group and the mask to prevent bodies colliding with each other.
        * @property {Number} mask The collision mask sets which groups this body collides with. It is a bitfield of 16 bits, the first 8 bits are reserved for engine use.
        * @property {String} type The rigid body type determines how the body is simulated. Can be:
        * <ul>
        *     <li>pc.BODYTYPE_STATIC: infinite mass and cannot move.</li>
        *     <li>pc.BODYTYPE_DYNAMIC: simulated according to applied forces.</li>
        *     <li>pc.BODYTYPE_KINEMATIC: infinite mass and does not respond to forces but can still be moved by setting their velocity or position.</li>
        * </ul>
        */
       constructor(system: pc.RigidBodyComponentSystem, entity: pc.Entity);

       /**
        * @private
        * @function
        * @name pc.RigidBodyComponent#createBody
        * @description If the Entity has a Collision shape attached then create a rigid body using this shape. This method destroys the existing body.
        */
       private createBody(): void;

       /**
        * @function
        * @name pc.RigidBodyComponent#isActive
        * @description Returns true if the rigid body is currently actively being simulated. i.e. not 'sleeping'
        * @returns {Boolean} True if the body is active
        */
       isActive(): Boolean;

       /**
        * @function
        * @name pc.RigidBodyComponent#activate
        * @description Forceably activate the rigid body simulation
        */
       activate(): void;

       /**
        * @function
        * @name pc.RigidBodyComponent#applyForce^2
        * @description Apply an force to the body at a point. By default, the force is applied at the origin of the
        * body. However, the force can be applied at an offset this point by specifying a world space vector from
        * the body's origin to the point of application.
        * @param {pc.Vec3} force The force to apply, in world space.
        * @param {pc.Vec3} [relativePoint] A world space offset from the body's position where the force is applied.
        * @example
        * // EXAMPLE 1: Apply a force at the body's center
        * // Calculate a force vector pointing in the world space direction of the entity
        * var force = this.entity.forward.clone().scale(100);
        *
        * // Apply the force
        * this.entity.rigidbody.applyForce(force);
        *
        * // EXAMPLE 2: Apply a force at some relative offset from the body's center
        * // Calculate a force vector pointing in the world space direction of the entity
        * var force = this.entity.forward.clone().scale(100);
        *
        * // Calculate the world space relative offset
        * var relativePos = new pc.Vec3();
        * var childEntity = this.entity.findByName('Engine');
        * relativePos.sub2(childEntity.getPosition(), this.entity.getPosition());
        *
        * // Apply the force
        * this.entity.rigidbody.applyForce(force, relativePos);
        */
       applyForce^2(force: pc.Vec3, relativePoint?: pc.Vec3): void;

       /**
        * @function
        * @name pc.RigidBodyComponent#applyForce
        * @description Apply an force to the body at a point. By default, the force is applied at the origin of the
        * body. However, the force can be applied at an offset this point by specifying a world space vector from
        * the body's origin to the point of application.
        * @param {Number} x The x component of the force to apply, in world space.
        * @param {Number} y The y component of the force to apply, in world space.
        * @param {Number} z The z component of the force to apply, in world space.
        * @param {Number} [px] The x component of a world space offset from the body's position where the force is applied.
        * @param {Number} [py] The y component of a world space offset from the body's position where the force is applied.
        * @param {Number} [pz] The z component of a world space offset from the body's position where the force is applied.
        * @example
        * // EXAMPLE 1: Apply an approximation of gravity at the body's center
        * this.entity.rigidbody.applyForce(0, -10, 0);
        *
        * // EXAMPLE 2: Apply an approximation of gravity at 1 unit down the world Z from the center of the body
        * this.entity.rigidbody.applyForce(0, -10, 0, 0, 0, 1);
        */
       applyForce(x: Number, y: Number, z: Number, px?: Number, py?: Number, pz?: Number): void;

       /**
        * @function
        * @name pc.RigidBodyComponent#applyTorque^2
        * @description Apply torque (rotational force) to the body.
        * @param {pc.Vec3} force The torque to apply, in world space.
        */
       applyTorque^2(force: pc.Vec3): void;

       /**
        * @function
        * @name pc.RigidBodyComponent#applyTorque
        * @description Apply torque (rotational force) to the body.
        * @param {Number} x The x component of the torque to apply, in world space.
        * @param {Number} y The y component of the torque to apply, in world space.
        * @param {Number} z The z component of the torque to apply, in world space.
        */
       applyTorque(x: Number, y: Number, z: Number): void;

       /**
        * @function
        * @name pc.RigidBodyComponent#applyImpulse^2
        * @description Apply an impulse (instantaneous change of velocity) to the body at a point.
        * @param {pc.Vec3} impulse The impulse to apply, in world space.
        * @param {pc.Vec3} [relativePoint] The point at which to apply the impulse, in local space (relative to the entity).
        */
       applyImpulse^2(impulse: pc.Vec3, relativePoint?: pc.Vec3): void;

       /**
        * @function
        * @name pc.RigidBodyComponent#applyImpulse
        * @description Apply an impulse (instantaneous change of velocity) to the body at a point.
        * @param {Number} x The x component of the impulse to apply, in world space.
        * @param {Number} y The y component of the impulse to apply, in world space.
        * @param {Number} z The z component of the impulse to apply, in world space.
        * @param {Number} [px] The x component of the point at which to apply the impulse, in local space (relative to the Entity).
        * @param {Number} [py] The y component of the point at which to apply the impulse, in local space (relative to the Entity).
        * @param {Number} [pz] The z component of the point at which to apply the impulse, in local space (relative to the Entity).
        */
       applyImpulse(x: Number, y: Number, z: Number, px?: Number, py?: Number, pz?: Number): void;

       /**
        * @function
        * @name pc.RigidBodyComponent#applyTorqueImpulse^2
        * @description Apply a torque impulse (rotational force applied instantaneously) to the body.
        * @param {pc.Vec3} torqueImpulse The torque impulse to apply, in world space.
        */
       applyTorqueImpulse^2(torqueImpulse: pc.Vec3): void;

       /**
        * @function
        * @name pc.RigidBodyComponent#applyTorqueImpulse
        * @description Apply a torque impulse (rotational force applied instantaneously) to the body.
        * @param {Number} x The x component of the torque impulse to apply, in world space.
        * @param {Number} y The y component of the torque impulse to apply, in world space.
        * @param {Number} z The z component of the torque impulse to apply, in world space.
        */
       applyTorqueImpulse(x: Number, y: Number, z: Number): void;

       /**
        * @function
        * @name pc.RigidBodyComponent#isStatic
        * @description Returns true if the rigid body is of type {@link pc.BODYTYPE_STATIC}
        * @returns {Boolean} True if static
        */
       isStatic(): Boolean;

       /**
        * @function
        * @name pc.RigidBodyComponent#isStaticOrKinematic
        * @description Returns true if the rigid body is of type {@link pc.BODYTYPE_STATIC} or {@link pc.BODYTYPE_KINEMATIC}
        * @returns {Boolean} True if static or kinematic
        */
       isStaticOrKinematic(): Boolean;

       /**
        * @function
        * @name pc.RigidBodyComponent#isKinematic
        * @description Returns true if the rigid body is of type {@link pc.BODYTYPE_KINEMATIC}
        * @returns {Boolean} True if kinematic
        */
       isKinematic(): Boolean;

       /**
        * @private
        * @function
        * @name pc.RigidBodyComponent#syncEntityToBody
        * @description Set the rigid body transform to to be the same as the Entity transform.
        * This must be called after any Entity transformation functions (e.g. {@link pc.Entity#setPosition}) are called
        * in order to update the rigid body to match the Entity.
        */
       private syncEntityToBody(): void;

       /**
        * @private
        * @function
        * @name pc.RigidBodyComponent#syncBodyToEntity
        * @description Update the Entity transform from the rigid body.
        * This is called internally after the simulation is stepped, to keep the Entity transform in sync with the rigid body transform.
        */
       private syncBodyToEntity(): void;

       /**
        * @function
        * @name pc.RigidBodyComponent#teleport^3
        * @description Teleport an entity to a new position and/or orientation
        * @param {Number} x The new position x value
        * @param {Number} y The new position y value
        * @param {Number} z The new position z value
        * @param {Number} [x] The new x angle value
        * @param {Number} [y] The new y angle value
        * @param {Number} [z] The new z angle value
        */
       teleport^3(x?: Number, y?: Number, z?: Number): void;

       /**
        * @function
        * @name pc.RigidBodyComponent#teleport
        * @description Teleport an entity to a new position and/or orientation
        * @param {pc.Vec3} position The new position
        * @param {pc.Vec3} [angles] THe new set of Euler angles
        */
       teleport(position: pc.Vec3, angles?: pc.Vec3): void;

       /**
        * @function
        * @name pc.RigidBodyComponent#teleport^2
        * @description Teleport an entity to a new position and/or orientation
        * @param {pc.Vec3} position The new position
        * @param {pc.Quat} [rotation] The new rotation
        */
       teleport^2(position: pc.Vec3, rotation?: pc.Quat): void;

       /**
        * @private
        * @function
        * @name pc.RigidBodyComponent#_updateKinematic
        * @description Kinematic objects maintain their own linear and angular velocities. This method updates their transform
        * based on their current velocity. It is called in every frame in the main physics update loop, after the simulation is stepped.
        */
       private _updateKinematic(): void;

   }

   /**
    * @private
    * @name pc.RigidBodyComponentData
    * @description Create a new data structure for a RigidBodyComponent
    * @class Contains data for the RigidBodyComponent
    * @extends pc.ComponentData
    */
   class RigidBodyComponentData extends pc.ComponentData {
       /**
        * @private
        * @name pc.RigidBodyComponentData
        * @description Create a new data structure for a RigidBodyComponent
        * @class Contains data for the RigidBodyComponent
        * @extends pc.ComponentData
        */
       constructor();

   }

   /**
    * @name pc.RaycastResult
    * @class Object holding the result of a successful raycast hit
    * @description Create a new RaycastResul
    * @param {pc.Entity} entity The entity that was hit
    * @param {pc.Vec3} point The point at which the ray hit the entity in world space
    * @param {pc.Vec3} normal The normal vector of the surface where the ray hit in world space.
    * @property {pc.Entity} entity The entity that was hit
    * @property {pc.Vec3} point The point at which the ray hit the entity in world space
    * @property {pc.Vec3} normal The normal vector of the surface where the ray hit in world space.
    */
   class RaycastResult {
       /**
        * @name pc.RaycastResult
        * @class Object holding the result of a successful raycast hit
        * @description Create a new RaycastResul
        * @param {pc.Entity} entity The entity that was hit
        * @param {pc.Vec3} point The point at which the ray hit the entity in world space
        * @param {pc.Vec3} normal The normal vector of the surface where the ray hit in world space.
        * @property {pc.Entity} entity The entity that was hit
        * @property {pc.Vec3} point The point at which the ray hit the entity in world space
        * @property {pc.Vec3} normal The normal vector of the surface where the ray hit in world space.
        */
       constructor(entity: pc.Entity, point: pc.Vec3, normal: pc.Vec3);

   }

   /**
    * @name pc.SingleContactResult
    * @class Object holding the result of a contact between two rigid bodies
    * @description Create a new SingleContactResult
    * @param {pc.Entity} a The first entity involved in the contact
    * @param {pc.Entity} b The second entity involved in the contact
    * @param {pc.ContactPoint} contactPoint The contact point between the two entities
    * @property {pc.Entity} a The first entity involved in the contact
    * @property {pc.Entity} b The second entity involved in the contact
    * @property {pc.Vec3} localPointA The point on Entity A where the contact occured, relative to A
    * @property {pc.Vec3} localPointB The point on Entity B where the contact occured, relative to B
    * @property {pc.Vec3} pointA The point on Entity A where the contact occured, in world space
    * @property {pc.Vec3} pointB The point on Entity B where the contact occured, in world space
    * @property {pc.Vec3} normal The normal vector of the contact on Entity B, in world space
    */
   class SingleContactResult {
       /**
        * @name pc.SingleContactResult
        * @class Object holding the result of a contact between two rigid bodies
        * @description Create a new SingleContactResult
        * @param {pc.Entity} a The first entity involved in the contact
        * @param {pc.Entity} b The second entity involved in the contact
        * @param {pc.ContactPoint} contactPoint The contact point between the two entities
        * @property {pc.Entity} a The first entity involved in the contact
        * @property {pc.Entity} b The second entity involved in the contact
        * @property {pc.Vec3} localPointA The point on Entity A where the contact occured, relative to A
        * @property {pc.Vec3} localPointB The point on Entity B where the contact occured, relative to B
        * @property {pc.Vec3} pointA The point on Entity A where the contact occured, in world space
        * @property {pc.Vec3} pointB The point on Entity B where the contact occured, in world space
        * @property {pc.Vec3} normal The normal vector of the contact on Entity B, in world space
        */
       constructor(a: pc.Entity, b: pc.Entity, contactPoint: pc.ContactPoint);

   }

   /**
    * @name pc.ContactPoint
    * @class Object holding the result of a contact between two Entities.
    * @description Create a new ContactPoint
    * @param {pc.Vec3} localPoint The point on the entity where the contact occured, relative to the entity
    * @param {pc.Vec3} localPointOther The point on the other entity where the contact occured, relative to the other entity
    * @param {pc.Vec3} point The point on the entity where the contact occured, in world space
    * @param {pc.Vec3} pointOther The point on the other entity where the contact occured, in world space
    * @param {pc.Vec3} normal The normal vector of the contact on the other entity, in world space
    * @property {pc.Vec3} localPoint The point on the entity where the contact occured, relative to the entity
    * @property {pc.Vec3} localPointOther The point on the other entity where the contact occured, relative to the other entity
    * @property {pc.Vec3} point The point on the entity where the contact occured, in world space
    * @property {pc.Vec3} pointOther The point on the other entity where the contact occured, in world space
    * @property {pc.Vec3} normal The normal vector of the contact on the other entity, in world space
    */
   class ContactPoint {
       /**
        * @name pc.ContactPoint
        * @class Object holding the result of a contact between two Entities.
        * @description Create a new ContactPoint
        * @param {pc.Vec3} localPoint The point on the entity where the contact occured, relative to the entity
        * @param {pc.Vec3} localPointOther The point on the other entity where the contact occured, relative to the other entity
        * @param {pc.Vec3} point The point on the entity where the contact occured, in world space
        * @param {pc.Vec3} pointOther The point on the other entity where the contact occured, in world space
        * @param {pc.Vec3} normal The normal vector of the contact on the other entity, in world space
        * @property {pc.Vec3} localPoint The point on the entity where the contact occured, relative to the entity
        * @property {pc.Vec3} localPointOther The point on the other entity where the contact occured, relative to the other entity
        * @property {pc.Vec3} point The point on the entity where the contact occured, in world space
        * @property {pc.Vec3} pointOther The point on the other entity where the contact occured, in world space
        * @property {pc.Vec3} normal The normal vector of the contact on the other entity, in world space
        */
       constructor(localPoint: pc.Vec3, localPointOther: pc.Vec3, point: pc.Vec3, pointOther: pc.Vec3, normal: pc.Vec3);

   }

   /**
    * @name pc.ContactResult
    * @class Object holding the result of a contact between two Entities
    * @description Create a new ContactResult
    * @param {pc.Entity} other The entity that was involved in the contact with this entity
    * @param {pc.ContactPoint[]} contacts An array of ContactPoints with the other entity
    * @property {pc.Entity} other The entity that was involved in the contact with this entity
    * @property {pc.ContactPoint[]} contacts An array of ContactPoints with the other entity
    */
   class ContactResult {
       /**
        * @name pc.ContactResult
        * @class Object holding the result of a contact between two Entities
        * @description Create a new ContactResult
        * @param {pc.Entity} other The entity that was involved in the contact with this entity
        * @param {pc.ContactPoint[]} contacts An array of ContactPoints with the other entity
        * @property {pc.Entity} other The entity that was involved in the contact with this entity
        * @property {pc.ContactPoint[]} contacts An array of ContactPoints with the other entity
        */
       constructor(other: pc.Entity, contacts: pc.ContactPoint[]);

   }

   /**
    * @name pc.RigidBodyComponentSystem
    * @description Create a new RigidBodyComponentSystem
    * @class The RigidBodyComponentSystem maintains the dynamics world for simulating rigid bodies, it also controls global values for the world such as gravity.
    * Note: The RigidBodyComponentSystem is only valid if 3D Physics is enabled in your application. You can enable this in the application settings for your Depot.
    * @param {pc.Application} app The Application
    * @extends pc.ComponentSystem
    */
   class RigidBodyComponentSystem extends pc.ComponentSystem {
       /**
        * @name pc.RigidBodyComponentSystem
        * @description Create a new RigidBodyComponentSystem
        * @class The RigidBodyComponentSystem maintains the dynamics world for simulating rigid bodies, it also controls global values for the world such as gravity.
        * Note: The RigidBodyComponentSystem is only valid if 3D Physics is enabled in your application. You can enable this in the application settings for your Depot.
        * @param {pc.Application} app The Application
        * @extends pc.ComponentSystem
        */
       constructor(app: pc.Application);

       /**
        * @function
        * @name pc.RigidBodyComponentSystem#setGravity^2
        * @description Set the gravity vector for the 3D physics world
        * @param {pc.Vec3} gravity The gravity vector to use for the 3D physics world.
        */
       setGravity^2(gravity: pc.Vec3): void;

       /**
        * @function
        * @name pc.RigidBodyComponentSystem#setGravity
        * @description Set the gravity vector for the 3D physics world
        * @param {Number} x The x-component of the gravity vector
        * @param {Number} y The y-component of the gravity vector
        * @param {Number} z The z-component of the gravity vector
        */
       setGravity(x: Number, y: Number, z: Number): void;

       /**
        * @function
        * @name pc.RigidBodyComponentSystem#raycastFirst
        * @description Raycast the world and return the first entity the ray hits. Fire a ray into the world from start to end,
        * if the ray hits an entity with a rigidbody component, it returns a {@link pc.RaycastResult}, otherwise returns null.
        * @param {pc.Vec3} start The world space point where the ray starts
        * @param {pc.Vec3} end The world space point where the ray ends
        * @returns {pc.RaycastResult} The result of the raycasting or null if there was no hit.
        */
       raycastFirst(start: pc.Vec3, end: pc.Vec3): pc.RaycastResult;

       /**
        * @private
        * @function
        * @name pc.RigidBodyComponentSystem#_storeCollision
        * @description Stores a collision between the entity and other in the contacts map and returns true if it is a new collision
        * @param {pc.Entity} entity The entity
        * @param {pc.Entity} other The entity that collides with the first entity
        */
       private _storeCollision(entity: pc.Entity, other: pc.Entity): void;

       /**
        * @private
        * @function
        * @name pc.RigidBodyComponentSystem#_cleanOldCollisions
        * @description Removes collisions that no longer exist from the collisions list and fires collisionend events to the
        * related entities.
        */
       private _cleanOldCollisions(): void;

       /**
        * @private
        * @name pc.RigidBodyComponentSystem#raycast
        * @description Raycast the world and return all entities the ray hits. Fire a ray into the world from start to end,
        * if the ray hits an entity with a rigidbody component, the callback function is called along with a {@link pc.RaycastResult}.
        * @param {pc.Vec3} start The world space point where the ray starts
        * @param {pc.Vec3} end The world space point where the ray ends
        * @param {Function} callback Function called if ray hits another body. Passed a single argument: a {@link pc.RaycastResult} object
        */
       private raycast: any;

   }

   /**
    * @name pc.ScreenComponentSystem
    * @description Create a new ScreenComponentSystem
    * @class Attach 2D text to an entity
    * @param {pc.Application} app The application
    * @extends pc.ComponentSystem
    */
   class ScreenComponentSystem extends pc.ComponentSystem {
       /**
        * @name pc.ScreenComponentSystem
        * @description Create a new ScreenComponentSystem
        * @class Attach 2D text to an entity
        * @param {pc.Application} app The application
        * @extends pc.ComponentSystem
        */
       constructor(app: pc.Application);

   }

   /**
    * @component
    * @name pc.ScriptComponent
    * @class The ScriptComponent allows you to extend the functionality of an Entity by attaching your own Script Types defined in javascript files
    * to be executed with access to the Entity. For more details on scripting see <a href="//developer.playcanvas.com/user-manual/scripting/">Scripting</a>.
    * @param {pc.ScriptComponentSystem} system The ComponentSystem that created this Component
    * @param {pc.Entity} entity The Entity that this Component is attached to.
    * @extends pc.Component
    * @property {ScriptType[]} scripts An array of all script instances attached to an entity. This Array shall not be modified by developer.
    */
   class ScriptComponent extends pc.Component {
       /**
        * @component
        * @name pc.ScriptComponent
        * @class The ScriptComponent allows you to extend the functionality of an Entity by attaching your own Script Types defined in javascript files
        * to be executed with access to the Entity. For more details on scripting see <a href="//developer.playcanvas.com/user-manual/scripting/">Scripting</a>.
        * @param {pc.ScriptComponentSystem} system The ComponentSystem that created this Component
        * @param {pc.Entity} entity The Entity that this Component is attached to.
        * @extends pc.Component
        * @property {ScriptType[]} scripts An array of all script instances attached to an entity. This Array shall not be modified by developer.
        */
       constructor(system: pc.ScriptComponentSystem, entity: pc.Entity);

       /**
        * @function
        * @name pc.ScriptComponent#has
        * @description Detect if script is attached to an entity using name of {@link ScriptType}.
        * @param {String} name The name of the Script Type
        * @returns {Boolean} If script is attached to an entity
        * @example
        * if (entity.script.has('playerController')) {
        *     // entity has script
        * }
        */
       has(name: String): Boolean;

       /**
        * @function
        * @name pc.ScriptComponent#create
        * @description Create a script instance using name of a {@link ScriptType} and attach to an entity script component.
        * @param {String} name The name of the Script Type
        * @param {Object} [args] Object with arguments for a script
        * @param {Boolean} [args.enabled] if script instance is enabled after creation
        * @param {Object} [args.attributes] Object with values for attributes, where key is name of an attribute
        * @returns {ScriptType} Returns an instance of a {@link ScriptType} if successfuly attached to an entity,
        * or null if it failed because a script with a same name has already been added
        * or if the {@link ScriptType} cannot be found by name in the {@link pc.ScriptRegistry}.
        * @example
        * entity.script.create('playerController', {
        *     attributes: {
        *         speed: 4
        *     }
        * });
        */
       create(name: String, args?: { enabled: Boolean, attributes: Object }): ScriptType;

       /**
        * @function
        * @name pc.ScriptComponent#destroy
        * @description Destroy the script instance that is attached to an entity.
        * @param {String} name The name of the Script Type
        * @returns {Boolean} If it was successfuly destroyed
        * @example
        * entity.script.destroy('playerController');
        */
       destroy(name: String): Boolean;

       /**
        * @function
        * @name pc.ScriptComponent#move
        * @description Move script instance to different position to alter update order of scripts within entity.
        * @param {String} name The name of the Script Type
        * @param {Number} ind New position index
        * @returns {Boolean} If it was successfuly moved
        * @example
        * entity.script.destroy('playerController');
        */
       move(name: String, ind: Number): Boolean;

   }

   /**
    * @name pc.ScriptComponentSystem
    * @description Create a new ScriptComponentSystem
    * @class Allows scripts to be attached to an Entity and executed
    * @param {pc.Application} app The application
    * @extends pc.ComponentSystem
    */
   class ScriptComponentSystem extends pc.ComponentSystem {
       /**
        * @name pc.ScriptComponentSystem
        * @description Create a new ScriptComponentSystem
        * @class Allows scripts to be attached to an Entity and executed
        * @param {pc.Application} app The application
        * @extends pc.ComponentSystem
        */
       constructor(app: pc.Application);

   }

   /**
    * @component
    * @name pc.SoundComponent
    * @class The Sound Component controls playback of {@link pc.Sound}s.
    * @description Create a new Sound Component
    * @param {pc.SoundComponentSystem} system The ComponentSystem that created this Component
    * @param {pc.Entity} entity The entity that the Component is attached to
    * @extends pc.Component
    * @property {Number} volume The volume modifier to play the audio with. In range 0-1.
    * @property {Number} pitch The pitch modifier to play the audio with. Must be larger than 0.01
    * @property {Boolean} positional If true the audio will play back at the location of the Entity in space, so the audio will be affect by the position of the {@link pc.AudioListenerComponent}.
    * @property {String} distanceModel Determines which algorithm to use to reduce the volume of the sound as it moves away from the listener. Can be one of {@link pc.DISTANCE_LINEAR}, {@link pc.DISTANCE_INVERSE} or {@link pc.DISTANCE_EXPONENTIAL}. Default is {@link pc.DISTANCE_LINEAR}.
    * @property {Number} refDistance The reference distance for reducing volume as the sound source moves further from the listener.
    * @property {Number} maxDistance The maximum distance from the listener at which audio falloff stops. Note the volume of the audio is not 0 after this distance, but just doesn't fall off anymore.
    * @property {Number} rollOffFactor The factor used in the falloff equation.
    * @property {Object} slots A dictionary that contains the {@link pc.SoundSlot}s managed by this Component.
    */
   class SoundComponent extends pc.Component {
       /**
        * @component
        * @name pc.SoundComponent
        * @class The Sound Component controls playback of {@link pc.Sound}s.
        * @description Create a new Sound Component
        * @param {pc.SoundComponentSystem} system The ComponentSystem that created this Component
        * @param {pc.Entity} entity The entity that the Component is attached to
        * @extends pc.Component
        * @property {Number} volume The volume modifier to play the audio with. In range 0-1.
        * @property {Number} pitch The pitch modifier to play the audio with. Must be larger than 0.01
        * @property {Boolean} positional If true the audio will play back at the location of the Entity in space, so the audio will be affect by the position of the {@link pc.AudioListenerComponent}.
        * @property {String} distanceModel Determines which algorithm to use to reduce the volume of the sound as it moves away from the listener. Can be one of {@link pc.DISTANCE_LINEAR}, {@link pc.DISTANCE_INVERSE} or {@link pc.DISTANCE_EXPONENTIAL}. Default is {@link pc.DISTANCE_LINEAR}.
        * @property {Number} refDistance The reference distance for reducing volume as the sound source moves further from the listener.
        * @property {Number} maxDistance The maximum distance from the listener at which audio falloff stops. Note the volume of the audio is not 0 after this distance, but just doesn't fall off anymore.
        * @property {Number} rollOffFactor The factor used in the falloff equation.
        * @property {Object} slots A dictionary that contains the {@link pc.SoundSlot}s managed by this Component.
        */
       constructor(system: pc.SoundComponentSystem, entity: pc.Entity);

       /**
        * @function
        * @name pc.SoundComponent#addSlot
        * @description Creates a new {@link pc.SoundSlot} with the specified name.
        * @param {String} name The name of the slot
        * @param {Object} options Settings for the slot
        * @param {Number} [options.volume=1] The playback volume, between 0 and 1.
        * @param {Number} [options.pitch=1] The relative pitch, default of 1, plays at normal pitch.
        * @param {Boolean} [options.loop=false] If true the sound will restart when it reaches the end.
        * @param {Number} [options.startTime=0] The start time from which the sound will start playing.
        * @param {Number} [options.duration=null] The duration of the sound that the slot will play starting from startTime.
        * @param {Boolean} [options.overlap=false] If true then sounds played from slot will be played independently of each other. Otherwise the slot will first stop the current sound before starting the new one.
        * @param {Boolean} [options.autoPlay=false] If true the slot will start playing as soon as its audio asset is loaded.
        * @param {Number} [options.asset=null] The asset id of the audio asset that is going to be played by this slot.
        * @returns {pc.SoundSlot} The new slot.
        * @example
        * // get an asset by id
        * var asset = app.assets.get(10);
        * // add a slot
        * this.entity.sound.addSlot('beep', {
        *     asset: asset
        * });
        * // play
        * this.entity.sound.play('beep');
        */
       addSlot(name: String, options: { volume: Number, pitch: Number, loop: Boolean, startTime: Number, duration: Number, overlap: Boolean, autoPlay: Boolean, asset: Number }): pc.SoundSlot;

       /**
        * @function
        * @name pc.SoundComponent#removeSlot
        * @description Removes the {@link pc.SoundSlot} with the specified name.
        * @param  {String} name The name of the slot
        * @example
        * // remove a slot called 'beep'
        * this.entity.sound.removeSlot('beep');
        */
       removeSlot(name: String): void;

       /**
        * @function
        * @name pc.SoundComponent#slot
        * @description Returns the slot with the specified name
        * @param  {String} name The name of the slot
        * @returns {pc.SoundSlot} The slot
        * @example
        * // get a slot and set its volume
        * this.entity.sound.slot('beep').volume = 0.5;
        *
        */
       slot(name: String): pc.SoundSlot;

       /**
        * @function
        * @name pc.SoundComponent#play
        * @description Begins playing the sound slot with the specified name. The slot will restart playing if it is already playing unless the overlap field is true in which case a new sound will be created and played.
        * @param {String} name The name of the {@link pc.SoundSlot} to play
        * @example
        * // get asset by id
        * var asset = app.assets.get(10);
        * // create a slot and play it
        * this.entity.sound.addSlot('beep', {
        *     asset: asset
        * });
        * this.entity.sound.play('beep');
        * @returns {pc.SoundInstance} The sound instance that will be played.
        */
       play(name: String): pc.SoundInstance;

       /**
        * @function
        * @name pc.SoundComponent#pause
        * @description Pauses playback of the slot with the specified name. If the name is undefined then all slots currently played will be paused. The slots can be resumed by calling {@link pc.SoundComponent#resume}.
        * @param {String} [name] The name of the slot to pause. Leave undefined to pause everything.
        * @example
        * // pause all sounds
        * this.entity.sound.pause();
        * // pause a specific sound
        * this.entity.sound.pause('beep');
        */
       pause(name?: String): void;

       /**
        * @function
        * @name pc.SoundComponent#resume
        * @description Resumes playback of the sound slot with the specified name if it's paused. If no name is specified all slots will be resumed.
        * @param {String} name The name of the slot to resume. Leave undefined to resume everything.
        * @example
        * // resume all sounds
        * this.entity.sound.resume();
        * // resume a specific sound
        * this.entity.sound.resume('beep');
        */
       resume(name: String): void;

       /**
        * @function
        * @name pc.SoundComponent#stop
        * @description Stops playback of the sound slot with the specified name if it's paused. If no name is specified all slots will be stopped.
        * @param {String} name The name of the slot to stop. Leave undefined to stop everything.
        * @example
        * // stop all sounds
        * this.entity.sound.stop();
        * // stop a specific sound
        * this.entity.sound.stop('beep');
        */
       stop(name: String): void;

   }

   /**
    * @static
    * @readOnly
    * @name pc.DISTANCE_LINEAR
    * @type String
    * @description Linear distance model
    */
   var DISTANCE_LINEAR: String;

   /**
    * @static
    * @readonly
    * @type String
    * @name pc.DISTANCE_INVERSE
    * @description Inverse distance model
    */
   var DISTANCE_INVERSE: String;

   /**
    * @static
    * @readonly
    * @type String
    * @name pc.DISTANCE_EXPONENTIAL
    * @description Exponential distance model
    */
   var DISTANCE_EXPONENTIAL: String;

   /**
    * @private
    * @constructor
    */
   class SoundComponentData {
       /**
        * @private
        * @constructor
        */
       constructor();

   }

   /**
    * @name pc.SoundSlot
    * @class The SoundSlot controls playback of an audio asset.
    * @description Create a new SoundSlot
    * @param {pc.SoundComponent} component The Component that created this slot.
    * @param {String} name The name of the slot.
    * @param {Object} options Settings for the slot
    * @param {Number} [options.volume=1] The playback volume, between 0 and 1.
    * @param {Number} [options.pitch=1] The relative pitch, default of 1, plays at normal pitch.
    * @param {Boolean} [options.loop=false] If true the sound will restart when it reaches the end.
    * @param {Number} [options.startTime=0] The start time from which the sound will start playing.
    * @param {Number} [options.duration=null] The duration of the sound that the slot will play starting from startTime.
    * @param {Boolean} [options.overlap=false] If true then sounds played from slot will be played independently of each other. Otherwise the slot will first stop the current sound before starting the new one.
    * @param {Boolean} [options.autoPlay=false] If true the slot will start playing as soon as its audio asset is loaded.
    * @param {Number} [options.asset=null] The asset id of the audio asset that is going to be played by this slot.
    * @property {String} name The name of the slot
    * @property {String} asset The asset id
    * @property {Boolean} autoPlay If true the slot will begin playing as soon as it is loaded
    * @property {Number} volume The volume modifier to play the sound with. In range 0-1.
    * @property {Number} pitch The pitch modifier to play the sound with. Must be larger than 0.01
    * @property {Number} startTime The start time from which the sound will start playing.
    * @property {Number} duration The duration of the sound that the slot will play starting from startTime.
    * @property {Boolean} loop If true the slot will restart when it finishes playing
    * @property {Boolean} overlap If true then sounds played from slot will be played independently of each other. Otherwise the slot will first stop the current sound before starting the new one.
    * @property {Boolean} isLoaded Returns true if the asset of the slot is loaded.
    * @property {Boolean} isPlaying  Returns true if the slot is currently playing.
    * @property {Boolean} isPaused Returns true if the slot is currently paused.
    * @property {Boolean} isStopped Returns true if the slot is currently stopped.
    * @property {pc.SoundInstance[]} instances An array that contains all the {@link pc.SoundInstance}s currently being played by the slot.
    */
   class SoundSlot {
       /**
        * @name pc.SoundSlot
        * @class The SoundSlot controls playback of an audio asset.
        * @description Create a new SoundSlot
        * @param {pc.SoundComponent} component The Component that created this slot.
        * @param {String} name The name of the slot.
        * @param {Object} options Settings for the slot
        * @param {Number} [options.volume=1] The playback volume, between 0 and 1.
        * @param {Number} [options.pitch=1] The relative pitch, default of 1, plays at normal pitch.
        * @param {Boolean} [options.loop=false] If true the sound will restart when it reaches the end.
        * @param {Number} [options.startTime=0] The start time from which the sound will start playing.
        * @param {Number} [options.duration=null] The duration of the sound that the slot will play starting from startTime.
        * @param {Boolean} [options.overlap=false] If true then sounds played from slot will be played independently of each other. Otherwise the slot will first stop the current sound before starting the new one.
        * @param {Boolean} [options.autoPlay=false] If true the slot will start playing as soon as its audio asset is loaded.
        * @param {Number} [options.asset=null] The asset id of the audio asset that is going to be played by this slot.
        * @property {String} name The name of the slot
        * @property {String} asset The asset id
        * @property {Boolean} autoPlay If true the slot will begin playing as soon as it is loaded
        * @property {Number} volume The volume modifier to play the sound with. In range 0-1.
        * @property {Number} pitch The pitch modifier to play the sound with. Must be larger than 0.01
        * @property {Number} startTime The start time from which the sound will start playing.
        * @property {Number} duration The duration of the sound that the slot will play starting from startTime.
        * @property {Boolean} loop If true the slot will restart when it finishes playing
        * @property {Boolean} overlap If true then sounds played from slot will be played independently of each other. Otherwise the slot will first stop the current sound before starting the new one.
        * @property {Boolean} isLoaded Returns true if the asset of the slot is loaded.
        * @property {Boolean} isPlaying  Returns true if the slot is currently playing.
        * @property {Boolean} isPaused Returns true if the slot is currently paused.
        * @property {Boolean} isStopped Returns true if the slot is currently stopped.
        * @property {pc.SoundInstance[]} instances An array that contains all the {@link pc.SoundInstance}s currently being played by the slot.
        */
       constructor(component: pc.SoundComponent, name: String, options: { volume: Number, pitch: Number, loop: Boolean, startTime: Number, duration: Number, overlap: Boolean, autoPlay: Boolean, asset: Number });

       /**
        * @function pc.SoundSlot#play
        * @description Plays a sound. If {@link pc.SoundSlot#overlap} is true the new sound
        * instance will be played independently of any other instances already playing.
        * Otherwise existing sound instances will stop before playing the new sound.
        * @return {pc.SoundInstance} The new sound instance
        */
       play(): pc.SoundInstance;

       /**
        * @function
        * @name  pc.SoundSlot#pause
        * @description Pauses all sound instances. To continue playback call {@link pc.SoundSlot#resume}.
        */
       pause(): void;

       /**
        * @function
        * @name  pc.SoundSlot#resume
        * @description Resumes playback of all paused sound instances.
        * @returns {Boolean} True if any instances were resumed.
        */
       resume(): Boolean;

       /**
        * @function
        * @name  pc.SoundSlot#stop
        * @description Stops playback of all sound instances.
        * @returns {Boolean} True if any instances were stopped.
        */
       stop(): Boolean;

       /**
        * @function
        * @name  pc.SoundSlot#load
        * @description Loads the asset assigned to this slot.
        */
       load(): void;

       /**
        * @function
        * @name  pc.SoundSlot#setExternalNodes
        * @description Connect external Web Audio API nodes. Any sound played by this slot will
        * automatically attach the specified nodes to the source that plays the sound. You need to pass
        * the first node of the node graph that you created externally and the last node of that graph. The first
        * node will be connected to the audio source and the last node will be connected to the destination of the AudioContext (e.g speakers).
        * @param {AudioNode} firstNode The first node that will be connected to the audio source of sound instances.
        * @param {AudioNode} [lastNode] The last node that will be connected to the destination of the AudioContext.
        * If unspecified then the firstNode will be connected to the destination instead.
        * @example
        * var context = app.systems.sound.context;
        * var analyzer = context.createAnalyzer();
        * var distortion = context.createWaveShaper();
        * var filter = context.createBiquadFilter();
        * analyzer.connect(distortion);
        * distortion.connect(filter);
        * slot.setExternalNodes(analyzer, filter);
        */
       setExternalNodes(firstNode: AudioNode, lastNode?: AudioNode): void;

       /**
        * @function
        * @name pc.SoundSlot#clearExternalNodes
        * @description Clears any external nodes set by {@link pc.SoundSlot#setExternalNodes}.
        */
       clearExternalNodes(): void;

       /**
        * @function
        * @name pc.SoundSlot#getExternalNodes
        * @description Gets an array that contains the two external nodes set by {@link pc.SoundSlot#setExternalNodes}.
        * @returns {AudioNode[]} An array of 2 elements that contains the first and last nodes set by {@link pc.SoundSlot#setExternalNodes}.
        */
       getExternalNodes(): AudioNode[];

       /**
        * @function
        * @private
        * @name pc.SoundSlot#_hasAsset
        * @returns {Boolean} Returns true if the slot has an asset assigned.
        */
       private _hasAsset(): Boolean;

       /**
        * @function
        * @private
        * @name pc.SoundSlot#_createInstance
        * @description Creates a new pc.SoundInstance with the properties of the slot.
        * @returns {pc.SoundInstance} The new instance
        */
       private _createInstance(): pc.SoundInstance;

   }

   /**
    * @name pc.SoundComponentSystem
    * @class Manages creation of {@link pc.SoundComponent}s.
    * @description Create a SoundComponentSystem
    * @param {pc.Application} app The Application
    * @param {pc.SoundManager} manager The sound manager
    * @property {Number} volume Sets / gets the volume for the entire Sound system. All sounds will have their volume
    * multiplied by this value. Valid between [0, 1].
    * @property {AudioContext} context Gets the AudioContext currently used by the sound manager. Requires Web Audio API support.
    * @property {pc.SoundManager} manager Gets / sets the sound manager
    * @extends pc.ComponentSystem
    */
   class SoundComponentSystem extends pc.ComponentSystem {
       /**
        * @name pc.SoundComponentSystem
        * @class Manages creation of {@link pc.SoundComponent}s.
        * @description Create a SoundComponentSystem
        * @param {pc.Application} app The Application
        * @param {pc.SoundManager} manager The sound manager
        * @property {Number} volume Sets / gets the volume for the entire Sound system. All sounds will have their volume
        * multiplied by this value. Valid between [0, 1].
        * @property {AudioContext} context Gets the AudioContext currently used by the sound manager. Requires Web Audio API support.
        * @property {pc.SoundManager} manager Gets / sets the sound manager
        * @extends pc.ComponentSystem
        */
       constructor(app: pc.Application, manager: pc.SoundManager);

   }

   /**
    * @name pc.ComponentSystem
    * @class Component Systems contain the logic and functionality to update all Components of a particular type
    * @param {pc.Application} app The running Application
    */
   class ComponentSystem {
       /**
        * @name pc.ComponentSystem
        * @class Component Systems contain the logic and functionality to update all Components of a particular type
        * @param {pc.Application} app The running Application
        */
       constructor(app: pc.Application);

       /**
        * @private
        * @field
        * @type Array
        * @name pc.ComponentSystem#store
        * @description The store where all {@link pc.ComponentData} objects are kept
        */
       private store: Array;

       /**
        * @private
        * @function
        * @name pc.ComponentSystem#addComponent
        * @description Create new {@link pc.Component} and {@link pc.ComponentData} instances and attach them to the entity
        * @param {pc.Entity} entity The Entity to attach this component to
        * @param {Object} data The source data with which to create the compoent
        * @returns {pc.Component} Returns a Component of type defined by the component system
        * @example
        *   var entity = new pc.Entity(app);
        *   app.systems.model.addComponent(entity, { type: 'box' });
        *   // entity.model is now set to a pc.ModelComponent
        */
       private addComponent(entity: pc.Entity, data: Object): pc.Component;

       /**
        * @private
        * @function
        * @name pc.ComponentSystem#removeComponent
        * @description Remove the {@link pc.Component} from the entity and delete the associated {@link pc.ComponentData}
        * @param {pc.Entity} entity The entity to remove the component from
        * @example
        * app.systems.model.removeComponent(entity);
        * // entity.model === undefined
        */
       private removeComponent(entity: pc.Entity): void;

       /**
        * @private
        * @function
        * @name pc.ComponentSystem#cloneComponent
        * @description Create a clone of component. This creates a copy all ComponentData variables.
        * @param {pc.Entity} entity The entity to clone the component from
        * @param {pc.Entity} clone The entity to clone the component into
        */
       private cloneComponent(entity: pc.Entity, clone: pc.Entity): void;

       /**
        * @private
        * @function
        * @name pc.ComponentSystem#initializeComponentData
        * @description Called during {@link pc.ComponentSystem#addComponent} to initialize the {@link pc.ComponentData} in the store
        * This can be overridden by derived Component Systems and either called by the derived System or replaced entirely
        */
       private initializeComponentData(): void;

   }

   /**
    * @component
    * @name pc.ZoneComponent
    * @extends pc.Component
    * @class The ZoneComponent allows you to define an area in world space of certain size.
    * This can be used in various ways, such as affecting audio reverb when audiolistener is within zone.
    * Or create culling system with portals between zones to hide whole indoor sections for performance reasons.
    * And many other possible options. Zones are building blocks and meant to be used in many different ways.
    * @param {pc.ZoneComponentSystem} system The ComponentSystem that created this Component
    * @param {pc.Vec3} size The Size of Box of a Zone.
    */
   class ZoneComponent extends pc.Component {
       /**
        * @component
        * @name pc.ZoneComponent
        * @extends pc.Component
        * @class The ZoneComponent allows you to define an area in world space of certain size.
        * This can be used in various ways, such as affecting audio reverb when audiolistener is within zone.
        * Or create culling system with portals between zones to hide whole indoor sections for performance reasons.
        * And many other possible options. Zones are building blocks and meant to be used in many different ways.
        * @param {pc.ZoneComponentSystem} system The ComponentSystem that created this Component
        * @param {pc.Vec3} size The Size of Box of a Zone.
        */
       constructor(system: pc.ZoneComponentSystem, size: pc.Vec3);

   }

   /**
    * @name pc.ZoneComponentSystem
    * @description Create a new ZoneComponentSystem
    * @class Defines zone in world.
    * @param {pc.Application} app The application
    * @extends pc.ComponentSystem
    */
   class ZoneComponentSystem extends pc.ComponentSystem {
       /**
        * @name pc.ZoneComponentSystem
        * @description Create a new ZoneComponentSystem
        * @class Defines zone in world.
        * @param {pc.Application} app The application
        * @extends pc.ComponentSystem
        */
       constructor(app: pc.Application);

   }

   /**
    * @name pc.Entity
    * @class The Entity is the core primitive of a PlayCanvas game. Generally speaking an object in your game will consist of an {@link pc.Entity},
    * and a set of {@link pc.Component}s which are managed by their respective {@link pc.ComponentSystem}s. One of those components maybe a
    * {@link pc.ScriptComponent} which allows you to write custom code to attach to your Entity.
    * <p>
    * The Entity uniquely identifies the object and also provides a transform for position and orientation
    * which it inherits from {@link pc.GraphNode} so can be added into the scene graph.
    * The Component and ComponentSystem provide the logic to give an Entity a specific type of behaviour. e.g. the ability to
    * render a model or play a sound. Components are specific to a instance of an Entity and are attached (e.g. `this.entity.model`)
    * ComponentSystems allow access to all Entities and Components and are attached to the {@link pc.Application}.
    * </p>
    *
    * @example
    * var app = ... // Get the pc.Application
    *
    * var entity = new pc.Entity();
    *
    * // Add a Component to the Entity
    * entity.addComponent("camera", {
    *   fov: 45,
    *   nearClip: 1,
    *   farClip: 10000
    * });
    *
    * // Add the Entity into the scene graph
    * app.root.addChild(entity);
    *
    * // Move the entity
    * entity.translate(10, 0, 0);
    *
    * // Or translate it by setting it's position directly
    * var p = entity.getPosition();
    * entity.setPosition(p.x + 10, p.y, p.z);
    *
    * // Change the entity's rotation in local space
    * var e = entity.getLocalEulerAngles();
    * entity.setLocalEulerAngles(e.x, e.y + 90, e.z);
    *
    * // Or use rotateLocal
    * entity.rotateLocal(0, 90, 0);
    *
    * @extends pc.GraphNode
    */
   class Entity extends pc.GraphNode {
       /**
        * @name pc.Entity
        * @class The Entity is the core primitive of a PlayCanvas game. Generally speaking an object in your game will consist of an {@link pc.Entity},
        * and a set of {@link pc.Component}s which are managed by their respective {@link pc.ComponentSystem}s. One of those components maybe a
        * {@link pc.ScriptComponent} which allows you to write custom code to attach to your Entity.
        * <p>
        * The Entity uniquely identifies the object and also provides a transform for position and orientation
        * which it inherits from {@link pc.GraphNode} so can be added into the scene graph.
        * The Component and ComponentSystem provide the logic to give an Entity a specific type of behaviour. e.g. the ability to
        * render a model or play a sound. Components are specific to a instance of an Entity and are attached (e.g. `this.entity.model`)
        * ComponentSystems allow access to all Entities and Components and are attached to the {@link pc.Application}.
        * </p>
        *
        * @example
        * var app = ... // Get the pc.Application
        *
        * var entity = new pc.Entity();
        *
        * // Add a Component to the Entity
        * entity.addComponent("camera", {
        *   fov: 45,
        *   nearClip: 1,
        *   farClip: 10000
        * });
        *
        * // Add the Entity into the scene graph
        * app.root.addChild(entity);
        *
        * // Move the entity
        * entity.translate(10, 0, 0);
        *
        * // Or translate it by setting it's position directly
        * var p = entity.getPosition();
        * entity.setPosition(p.x + 10, p.y, p.z);
        *
        * // Change the entity's rotation in local space
        * var e = entity.getLocalEulerAngles();
        * entity.setLocalEulerAngles(e.x, e.y + 90, e.z);
        *
        * // Or use rotateLocal
        * entity.rotateLocal(0, 90, 0);
        *
        * @extends pc.GraphNode
        */
       constructor();

       /**
        * @function
        * @name pc.Entity#addComponent
        * @description Create a new Component and add attach it to the Entity.
        * Use this to add functionality to the Entity like rendering a model, adding light, etc.
        * @param {String} type The name of the component type. e.g. "model", "light"
        * @param {Object} data The initialization data for the specific component type
        * @returns {pc.Component} The new Component that was attached to the entity
        * @example
        * var entity = new pc.Entity();
        * entity.addComponent("light"); // Add a light component with default properties
        * entity.addComponent("camera", { // Add a camera component with some specified properties
        *   fov: 45,
        *   clearColor: new pc.Color(1,0,0),
        * });
        */
       addComponent(type: String, data: Object): pc.Component;

       /**
        * @function
        * @name pc.Entity#removeComponent
        * @description Remove a component from the Entity.
        * @param {String} type The name of the Component type
        * @example
        * var entity = new pc.Entity();
        * entity.addComponent("light"); // add new light component
        * //...
        * entity.removeComponent("light"); // remove light component
        */
       removeComponent(type: String): void;

       /**
        * @private
        * @function
        * @name pc.Entity#getGuid
        * @description Get the GUID value for this Entity
        * @returns {String} The GUID of the Entity
        */
       private getGuid(): String;

       /**
        * @private
        * @function
        * @name pc.Entity#setGuid
        * @description Set the GUID value for this Entity.
        *
        * N.B. It is unlikely that you should need to change the GUID value of an Entity at run-time. Doing so will corrupt the graph this Entity is in.
        * @param {String} guid The GUID to assign to the Entity
        */
       private setGuid(guid: String): void;

       /**
        * @private
        * @function
        * @name pc.Entity#setRequest
        * @description Used during resource loading to ensure that child resources of Entities are tracked
        * @param {ResourceRequest} request The request being used to load this entity
        */
       private setRequest(request: ResourceRequest): void;

       /**
        * @private
        * @function
        * @name pc.Entity#getRequest
        * @description Get the Request that is being used to load this Entity
        * @returns {ResourceRequest} The Request
        */
       private getRequest(): ResourceRequest;

       /**
        * @function
        * @name pc.Entity#findByGuid
        * @description Find a descendant of this Entity with the GUID
        * @returns {pc.Entity} The Entity with the GUID or null
        */
       findByGuid(): pc.Entity;

       /**
        * @function
        * @name pc.Entity#destroy
        * @description Remove all components from the Entity and detach it from the Entity hierarchy. Then recursively destroy all ancestor Entities
        * @example
        * var firstChild = this.entity.children[0];
        * firstChild.destroy(); // delete child, all components and remove from hierarchy
        */
       destroy(): void;

       /**
        * @function
        * @name pc.Entity#clone
        * @description Create a deep copy of the Entity. Duplicate the full Entity hierarchy, with all Components and all descendants.
        * Note, this Entity is not in the hierarchy and must be added manually.
        * @returns {pc.Entity} A new Entity which is a deep copy of the original.
        * @example
        *   var e = this.entity.clone(); // Clone Entity
        *   this.entity.parent.addChild(e); // Add it as a sibling to the original
        */
       clone(): pc.Entity;

   }

   /**
    * @name pc.script
    * @namespace
    * @description Functions for creating user scripts for the script component
    * @property {Boolean} legacy If True, then engine will use legacy scripting system, defaults to true (subject to change)
    */
   module script {
       /**
        * @function
        * @name pc.script.create
        * @description Create a script resource object. A script file should contain a single call to pc.script.create and the callback should return a script object which will be
        * instanciated when attached to Entities.
        * @param {String} name The name of the script object.
        * @param {Function} callback The callback function which is passed an {pc.Application} object,
        * which is used to access Entities and Components, and should return the Type of the script resource
        * to be instanced for each Entity.
        * @example
        * pc.script.create( function (app) {
        *  var Scriptable = function (entity) {
        *      // store entity
        *      this.entity = entity;
        *
        *      // use app
        *      app.components.model.addComponent(entity, {...});
        *  };
        *
        *  return Scriptable;
        * }
        */
       function create(name: String, callback: (() => any)): void;

       /**
        * @function
        * @name pc.script.attribute
        * @description Creates a script attribute for the current script. The script attribute can be accessed
        * inside the script instance like so 'this.attributeName' or outside a script instance like so 'entity.script.attributeName'.
        * Script attributes can be edited from the Attribute Editor of the PlayCanvas Editor like normal Components.
        * @param {String} name The name of the attribute
        * @param {String} type The type of the attribute. Can be one of the following: 'number', 'string', 'boolean', 'asset', 'entity', 'rgb', 'rgba', 'vector', 'enumeration', 'curve', 'colorcurve'
        * @param {Object} defaultValue The default value of the attribute
        * @param {Object} options Optional parameters for the attribute. Valid values are:
        * <ul>
        *   <li>{Number} min: The minimum value of the attribute</li>
        *   <li>{Number} max: The maximum value of the attribute</li>
        *   <li>{Number} step: The step that will be used when changing the attribute value in the PlayCanvas Editor</li>
        *   <li>{Number} decimalPrecision: A number that specifies the number of decimal digits allowed for the value</li>
        *   <li>{Object[]} enumerations: An array of name, value pairs from which the user can select one if the attribute type is an enumeration</li>
        *   <li>{String[]} curves: (For 'curve' attributes only) An array of strings that define the names of each curve in the curve editor.</li>
        *   <li>{Array} color: (For 'curve' attributes only) If true then the curve attribute will be a color curve.</li>
        * </ul>
        * @example
        * pc.script.attribute('speed', 'number', 5);
        * pc.script.attribute('message', 'string', "My message");
        * pc.script.attribute('enemyPosition', 'vector', [1,0,0]);
        * pc.script.attribute('spellType', 'enumeration', 0, {
        *     enumerations: [{
        *        name: "Fire",
        *        value: 0
        *     }, {
        *        name: "Ice",
        *        value: 1
        *     }]
        *  });
        * pc.script.attribute('enemy', 'entity');
        * pc.script.attribute('enemySpeed', 'curve');
        * pc.script.attribute('enemyPosition', 'curve', null, {
        *     curves: ['x', 'y', 'z']
        * });
        * pc.script.attribute('color', 'colorcurve', null, {
        *     type: 'rgba'
        * });
        *
        * pc.script.create('scriptable', function (app) {
        *  var Scriptable = function (entity) {
        *      // store entity
        *      this.entity = entity;
        *  };
        *
        *  return Scriptable;
        * }
        */
       function attribute(name: String, type: String, defaultValue: Object, options: Object): void;

       /**
        * @function
        * @name pc.script.createLoadingScreen
        * @description Handles the creation of the loading screen of the application. A script can subscribe to
        * the events of a {@link pc.Application} to show a loading screen, progress bar etc. In order for this to work
        * you need to set the project's loading screen script to the script that calls this method.
        * @param  {Function} callback A function which can set up and tear down a customised loading screen.
        * @example
        * pc.script.createLoadingScreen(function (app) {
        *     var showSplashScreen = function () { // }
        *     var hideSplashScreen = function () { // }
        *     var showProgress = function (progress) { // }
        *     app.on("preload:start", showSplashScreen);
        *     app.on("preload:progress", showProgress);
        *     app.on("start", hideSplashScreen);
        * });
        */
       function createLoadingScreen(callback: (() => any)): void;

   }

   /**
    * @private
    * @constructor
    */
   class ApplicationStats {
       /**
        * @private
        * @constructor
        */
       constructor();

   }

   /**
    * @name pc.GraphicsDevice
    * @class The graphics device manages the underlying graphics context. It is responsible
    * for submitting render state changes and graphics primitives to the hardware. A graphics
    * device is tied to a specific canvas HTML element. It is valid to have more than one
    * canvas element per page and create a new graphics device against each.
    * @description Creates a new graphics device.
    * @param {Object} canvas The canvas to which the graphics device is tied.
    * @param {Object} [options] Options passed when creating the WebGL context. More info here https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
    */
   class GraphicsDevice {
       /**
        * @name pc.GraphicsDevice
        * @class The graphics device manages the underlying graphics context. It is responsible
        * for submitting render state changes and graphics primitives to the hardware. A graphics
        * device is tied to a specific canvas HTML element. It is valid to have more than one
        * canvas element per page and create a new graphics device against each.
        * @description Creates a new graphics device.
        * @param {Object} canvas The canvas to which the graphics device is tied.
        * @param {Object} [options] Options passed when creating the WebGL context. More info here https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
        */
       constructor(canvas: Object, options?: Object);

       /**
        * @readonly
        * @name pc.GraphicsDevice#precision
        * @type String
        * @description The highest shader precision supported by this graphics device. Can be 'hiphp', 'mediump' or 'lowp'.
        */
       precision: String;

       /**
        * @readonly
        * @name pc.GraphicsDevice#maxCubeMapSize
        * @type Number
        * @description The maximum supported dimension of a cube map.
        */
       maxCubeMapSize: Number;

       /**
        * @readonly
        * @name pc.GraphicsDevice#maxTextureSize
        * @type Number
        * @description The maximum supported dimension of a texture.
        */
       maxTextureSize: Number;

       /**
        * @function
        * @name pc.GraphicsDevice#setViewport
        * @description Set the active rectangle for rendering on the specified device.
        * @param {Number} x The pixel space x-coordinate of the bottom left corner of the viewport.
        * @param {Number} y The pixel space y-coordinate of the bottom left corner of the viewport.
        * @param {Number} w The width of the viewport in pixels.
        * @param {Number} h The height of the viewport in pixels.
        */
       setViewport(x: Number, y: Number, w: Number, h: Number): void;

       /**
        * @function
        * @name pc.GraphicsDevice#setScissor
        * @description Set the active scissor rectangle on the specified device.
        * @param {Number} x The pixel space x-coordinate of the bottom left corner of the scissor rectangle.
        * @param {Number} y The pixel space y-coordinate of the bottom left corner of the scissor rectangle.
        * @param {Number} w The width of the scissor rectangle in pixels.
        * @param {Number} h The height of the scissor rectangle in pixels.
        */
       setScissor(x: Number, y: Number, w: Number, h: Number): void;

       /**
        * @private
        * @function
        * @name pc.GraphicsDevice#getProgramLibrary
        * @description Retrieves the program library assigned to the specified graphics device.
        * @returns {pc.ProgramLibrary} The program library assigned to the device.
        */
       private getProgramLibrary(): pc.ProgramLibrary;

       /**
        * @private
        * @function
        * @name pc.GraphicsDevice#setProgramLibrary
        * @description Assigns a program library to the specified device. By default, a graphics
        * device is created with a program library that manages all of the programs that are
        * used to render any graphical primitives. However, this function allows the user to
        * replace the existing program library with a new one.
        * @param {pc.ProgramLibrary} programLib The program library to assign to the device.
        */
       private setProgramLibrary(programLib: pc.ProgramLibrary): void;

       /**
        * @function
        * @name pc.GraphicsDevice#updateBegin
        * @description Marks the beginning of a block of rendering. Internally, this function
        * binds the render target currently set on the device. This function should be matched
        * with a call to pc.GraphicsDevice#updateEnd. Calls to pc.GraphicsDevice#updateBegin
        * and pc.GraphicsDevice#updateEnd must not be nested.
        */
       updateBegin(): void;

       /**
        * @function
        * @name pc.GraphicsDevice#updateEnd
        * @description Marks the end of a block of rendering. This function should be called
        * after a matching call to pc.GraphicsDevice#updateBegin. Calls to pc.GraphicsDevice#updateBegin
        * and pc.GraphicsDevice#updateEnd must not be nested.
        */
       updateEnd(): void;

       /**
        * @function
        * @name pc.GraphicsDevice#draw
        * @description Submits a graphical primitive to the hardware for immediate rendering.
        * @param {Object} primitive Primitive object describing how to submit current vertex/index buffers defined as follows:
        * @param {Number} primitive.type The type of primitive to render. Can be:
        * <ul>
        *     <li>pc.PRIMITIVE_POINTS</li>
        *     <li>pc.PRIMITIVE_LINES</li>
        *     <li>pc.PRIMITIVE_LINELOOP</li>
        *     <li>pc.PRIMITIVE_LINESTRIP</li>
        *     <li>pc.PRIMITIVE_TRIANGLES</li>
        *     <li>pc.PRIMITIVE_TRISTRIP</li>
        *     <li>pc.PRIMITIVE_TRIFAN</li>
        * </ul>
        * @param {Number} primitive.base The offset of the first index or vertex to dispatch in the draw call.
        * @param {Number} primitive.count The number of indices or vertices to dispatch in the draw call.
        * @param {Boolean} primitive.indexed True to interpret the primitive as indexed, thereby using the currently set index buffer and false otherwise.
        * @example
        * // Render a single, unindexed triangle
        * device.draw({
        *     type: pc.PRIMITIVE_TRIANGLES,
        *     base: 0,
        *     count: 3,
        *     indexed: false
        * )};
        */
       draw(primitive: { type: Number, base: Number, count: Number, indexed: Boolean }): void;

       /**
        * @function
        * @name pc.GraphicsDevice#clear
        * @description Clears the frame buffer of the currently set render target.
        * @param {Object} options Optional options object that controls the behavior of the clear operation defined as follows:
        * @param {Number[]} options.color The color to clear the color buffer to in the range 0.0 to 1.0 for each component.
        * @param {Number} options.depth The depth value to clear the depth buffer to in the range 0.0 to 1.0.
        * @param {Number} options.flags The buffers to clear (the types being color, depth and stencil). Can be any bitwise
        * combination of:
        * <ul>
        *     <li>pc.CLEARFLAG_COLOR</li>
        *     <li>pc.CLEARFLAG_DEPTH</li>
        *     <li>pc.CLEARFLAG_STENCIL</li>
        * </ul>
        * @example
        * // Clear color buffer to black and depth buffer to 1.0
        * device.clear();
        *
        * // Clear just the color buffer to red
        * device.clear({
        *     color: [1, 0, 0, 1],
        *     flags: pc.CLEARFLAG_COLOR
        * });
        *
        * // Clear color buffer to yellow and depth to 1.0
        * device.clear({
        *     color: [1, 1, 0, 1],
        *     depth: 1.0,
        *     flags: pc.CLEARFLAG_COLOR | pc.CLEARFLAG_DEPTH
        * });
        */
       clear(options: { color: Number[], depth: Number, flags: Number }): void;

       /**
        * @function
        * @name pc.GraphicsDevice#setRenderTarget
        * @description Sets the specified render target on the device. If null
        * is passed as a parameter, the back buffer becomes the current target
        * for all rendering operations.
        * @param {pc.RenderTarget} renderTarget The render target to activate.
        * @example
        * // Set a render target to receive all rendering output
        * device.setRenderTarget(renderTarget);
        *
        * // Set the back buffer to receive all rendering output
        * device.setRenderTarget(null);
        */
       setRenderTarget(renderTarget: pc.RenderTarget): void;

       /**
        * @function
        * @name pc.GraphicsDevice#getRenderTarget
        * @description Queries the currently set render target on the device.
        * @returns {pc.RenderTarget} The current render target.
        * @example
        * // Get the current render target
        * var renderTarget = device.getRenderTarget();
        */
       getRenderTarget(): pc.RenderTarget;

       /**
        * @function
        * @name pc.GraphicsDevice#getDepthTest
        * @description Queries whether depth testing is enabled.
        * @returns {Boolean} true if depth testing is enabled and false otherwise.
        * @example
        * var depthTest = device.getDepthTest();
        * console.log('Depth testing is ' + depthTest ? 'enabled' : 'disabled');
        */
       getDepthTest(): Boolean;

       /**
        * @function
        * @name pc.GraphicsDevice#setDepthTest
        * @description Enables or disables depth testing of fragments. Once this state
        * is set, it persists until it is changed. By default, depth testing is enabled.
        * @param {Boolean} depthTest true to enable depth testing and false otherwise.
        * @example
        * device.setDepthTest(true);
        */
       setDepthTest(depthTest: Boolean): void;

       /**
        * @function
        * @name pc.GraphicsDevice#getDepthWrite
        * @description Queries whether writes to the depth buffer are enabled.
        * @returns {Boolean} true if depth writing is enabled and false otherwise.
        * @example
        * var depthWrite = device.getDepthWrite();
        * console.log('Depth writing is ' + depthWrite ? 'enabled' : 'disabled');
        */
       getDepthWrite(): Boolean;

       /**
        * @function
        * @name pc.GraphicsDevice#setDepthWrite
        * @description Enables or disables writes to the depth buffer. Once this state
        * is set, it persists until it is changed. By default, depth writes are enabled.
        * @param {Boolean} writeDepth true to enable depth writing and false otherwise.
        * @example
        * device.setDepthWrite(true);
        */
       setDepthWrite(writeDepth: Boolean): void;

       /**
        * @function
        * @name pc.GraphicsDevice#setColorWrite
        * @description Enables or disables writes to the color buffer. Once this state
        * is set, it persists until it is changed. By default, color writes are enabled
        * for all color channels.
        * @param {Boolean} writeRed true to enable writing  of the red channel and false otherwise.
        * @param {Boolean} writeGreen true to enable writing  of the green channel and false otherwise.
        * @param {Boolean} writeBlue true to enable writing  of the blue channel and false otherwise.
        * @param {Boolean} writeAlpha true to enable writing  of the alpha channel and false otherwise.
        * @example
        * // Just write alpha into the frame buffer
        * device.setColorWrite(false, false, false, true);
        */
       setColorWrite(writeRed: Boolean, writeGreen: Boolean, writeBlue: Boolean, writeAlpha: Boolean): void;

       /**
        * @function
        * @name pc.GraphicsDevice#getBlending
        * @description Queries whether blending is enabled.
        * @returns {Boolean} True if blending is enabled and false otherwise.
        */
       getBlending(): Boolean;

       /**
        * @function
        * @name pc.GraphicsDevice#setBlending
        * @description Enables or disables blending.
        * @param {Boolean} blending True to enable blending and false to disable it.
        */
       setBlending(blending: Boolean): void;

       /**
        * @function
        * @name pc.GraphicsDevice#setStencilTest
        * @description Enables or disables stencil test.
        * @param {Boolean} enable True to enable stencil test and false to disable it.
        */
       setStencilTest(enable: Boolean): void;

       /**
        * @function
        * @name pc.GraphicsDevice#setStencilFunc
        * @description Configures stencil test for both front and back faces.
        * @param {Number} func A comparison function that decides if the pixel should be written, based on the current stencil buffer value,
        * reference value, and mask value. Can be:
        * <ul>
        *     <li>pc.FUNC_NEVER: never pass</li>
        *     <li>pc.FUNC_LESS: pass if (ref & mask) < (stencil & mask)</li>
        *     <li>pc.FUNC_EQUAL: pass if (ref & mask) == (stencil & mask)</li>
        *     <li>pc.FUNC_LESSEQUAL: pass if (ref & mask) <= (stencil & mask)</li>
        *     <li>pc.FUNC_GREATER: pass if (ref & mask) > (stencil & mask)</li>
        *     <li>pc.FUNC_NOTEQUAL: pass if (ref & mask) != (stencil & mask)</li>
        *     <li>pc.FUNC_GREATEREQUAL: pass if (ref & mask) >= (stencil & mask)</li>
        *     <li>pc.FUNC_ALWAYS: always pass</li>
        * </ul>
        * @param {Number} ref Reference value used in comparison.
        * @param {Number} mask Mask applied to stencil buffer value and reference value before comparison.
        */
       setStencilFunc(func: Number, ref: Number, mask: Number): void;

       /**
        * @function
        * @name pc.GraphicsDevice#setStencilFuncFront
        * @description Same as pc.GraphicsDevice#setStencilFunc, but only for front faces.
        */
       setStencilFuncFront(): void;

       /**
        * @function
        * @name pc.GraphicsDevice#setStencilFuncBack
        * @description Same as pc.GraphicsDevice#setStencilFunc, but only for back faces.
        */
       setStencilFuncBack(): void;

       /**
        * @function
        * @name pc.GraphicsDevice#setStencilOperation
        * @description Configures how stencil buffer values should be modified based on the result of depth/stencil tests. Works for both front and back faces.
        * @param {Number} fail Action to take if stencil test is failed
        * @param {Number} zfail Action to take if depth test is failed
        * @param {Number} zpass Action to take if both depth and stencil test are passed
        * All arguments can be:
        * <ul>
        *     <li>pc.STENCILOP_KEEP: don't change the stencil buffer value</li>
        *     <li>pc.STENCILOP_ZERO: set value to zero</li>
        *     <li>pc.STENCILOP_REPLACE: replace value with the reference value (see pc.GraphicsDevice#setStencilFunc)</li>
        *     <li>pc.STENCILOP_INCREMENT: increment the value</li>
        *     <li>pc.STENCILOP_INCREMENTWRAP: increment the value, but wrap it to zero when it's larger than a maximum representable value</li>
        *     <li>pc.STENCILOP_DECREMENT: decrement the value</li>
        *     <li>pc.STENCILOP_DECREMENTWRAP: decrement the value, but wrap it to a maximum representable value, if the current value is 0</li>
        *     <li>pc.STENCILOP_INVERT: invert the value bitwise</li>
        * </ul>
        */
       setStencilOperation(fail: Number, zfail: Number, zpass: Number): void;

       /**
        * @function
        * @name pc.GraphicsDevice#setStencilOperationFront
        * @description Same as pc.GraphicsDevice#setStencilOperation, but only for front faces.
        */
       setStencilOperationFront(): void;

       /**
        * @function
        * @name pc.GraphicsDevice#setStencilOperationBack
        * @description Same as pc.GraphicsDevice#setStencilOperation, but only for back faces.
        */
       setStencilOperationBack(): void;

       /**
        * @function
        * @name pc.GraphicsDevice#setBlendFunction
        * @description Configures blending operations. Both source and destination
        * blend modes can take the following values:
        * <ul>
        *     <li>pc.BLENDMODE_ZERO</li>
        *     <li>pc.BLENDMODE_ONE</li>
        *     <li>pc.BLENDMODE_SRC_COLOR</li>
        *     <li>pc.BLENDMODE_ONE_MINUS_SRC_COLOR</li>
        *     <li>pc.BLENDMODE_DST_COLOR</li>
        *     <li>pc.BLENDMODE_ONE_MINUS_DST_COLOR</li>
        *     <li>pc.BLENDMODE_SRC_ALPHA</li>
        *     <li>pc.BLENDMODE_SRC_ALPHA_SATURATE</li>
        *     <li>pc.BLENDMODE_ONE_MINUS_SRC_ALPHA</li>
        *     <li>pc.BLENDMODE_DST_ALPHA</li>
        *     <li>pc.BLENDMODE_ONE_MINUS_DST_ALPHA</li>
        * </ul>
        * @param {Number} blendSrc The source blend function.
        * @param {Number} blendDst The destination blend function.
        */
       setBlendFunction(blendSrc: Number, blendDst: Number): void;

       /**
        * @function
        * @name pc.GraphicsDevice#setBlendEquation
        * @description Configures the blending equation. The default blend equation is
        * pc.BLENDEQUATION_ADD.
        * @param {Number} blendEquation The blend equation. Can be:
        * <ul>
        *     <li>pc.BLENDEQUATION_ADD</li>
        *     <li>pc.BLENDEQUATION_SUBTRACT</li>
        *     <li>pc.BLENDEQUATION_REVERSE_SUBTRACT</li>
        * </ul>
        */
       setBlendEquation(blendEquation: Number): void;

       /**
        * @function
        * @name pc.GraphicsDevice#setCullMode
        * @description Controls how triangles are culled based on their face direction.
        * The default cull mode is pc.CULLFACE_BACK.
        * @param {Number} cullMode The cull mode to set. Can be:
        * <ul>
        *     <li>pc.CULLFACE_NONE</li>
        *     <li>pc.CULLFACE_BACK</li>
        *     <li>pc.CULLFACE_FRONT</li>
        *     <li>pc.CULLFACE_FRONTANDBACK</li>
        * </ul>
        */
       setCullMode(cullMode: Number): void;

       /**
        * @function
        * @name pc.GraphicsDevice#setIndexBuffer
        * @description Sets the current index buffer on the graphics device. On subsequent
        * calls to pc.GraphicsDevice#draw, the specified index buffer will be used to provide
        * index data for any indexed primitives.
        * @param {pc.IndexBuffer} indexBuffer The index buffer to assign to the device.
        */
       setIndexBuffer(indexBuffer: pc.IndexBuffer): void;

       /**
        * @function
        * @name pc.GraphicsDevice#setVertexBuffer
        * @description Sets the current vertex buffer for a specific stream index on the graphics
        * device. On subsequent calls to pc.GraphicsDevice#draw, the specified vertex buffer will be
        * used to provide vertex data for any primitives.
        * @param {pc.VertexBuffer} vertexBuffer The vertex buffer to assign to the device.
        * @param {Number} stream The stream index for the vertex buffer, indexed from 0 upwards.
        */
       setVertexBuffer(vertexBuffer: pc.VertexBuffer, stream: Number): void;

       /**
        * @function
        * @name pc.GraphicsDevice#setShader
        * @description Sets the active shader to be used during subsequent draw calls.
        * @param {pc.Shader} shader The shader to set to assign to the device.
        */
       setShader(shader: pc.Shader): void;

       /**
        * @private
        * @function
        * @name pc.GraphicsDevice#getBoneLimit
        * @description Queries the maximum number of bones that can be referenced by a shader.
        * The shader generators (pc.programlib) use this number to specify the matrix array
        * size of the uniform 'matrix_pose[0]'. The value is calculated based on the number of
        * available uniform vectors available after subtracting the number taken by a typical
        * heavyweight shader. If a different number is required, it can be tuned via
        * pc.GraphicsDevice#setBoneLimit.
        * @returns {Number} The maximum number of bones that can be supported by the host hardware.
        */
       private getBoneLimit(): Number;

       /**
        * @private
        * @function
        * @name pc.GraphicsDevice#setBoneLimit
        * @description Specifies the maximum number of bones that the device can support on
        * the current hardware. This function allows the default calculated value based on
        * available vector uniforms to be overridden.
        * @param {Number} maxBones The maximum number of bones supported by the host hardware.
        */
       private setBoneLimit(maxBones: Number): void;

       /**
        * @function
        * @name pc.GraphicsDevice#resizeCanvas
        * @description Sets the width and height of the canvas, then fires the 'resizecanvas' event.
        */
       resizeCanvas(): void;

       /**
        * @function
        * @name pc.GraphicsDevice#clearShaderCache
        * @description Frees memory from all shaders ever allocated with this device
        */
       clearShaderCache(): void;

       /**
        * @readonly
        * @name pc.GraphicsDevice#width
        * @type Number
        * @description Width of the back buffer in pixels.
        */
       width: Number;

       /**
        * @readonly
        * @name pc.GraphicsDevice#height
        * @type Number
        * @description Height of the back buffer in pixels.
        */
       height: Number;

       /**
        * @readonly
        * @name pc.GraphicsDevice#maxAnisotropy
        * @type Number
        * @description The maximum supported texture anisotropy setting.
        */
       maxAnisotropy: Number;

   }

   /**
    * @static
    * @readonly
    * @type Number
    * @name pc.ADDRESS_REPEAT
    * @description Ignores the integer part of texture coordinates, using only the fractional part.
    */
   var ADDRESS_REPEAT: Number;

   /**
    * @static
    * @readonly
    * @type Number
    * @name pc.ADDRESS_CLAMP_TO_EDGE
    * @description Clamps texture coordinate to the range 0 to 1.
    */
   var ADDRESS_CLAMP_TO_EDGE: Number;

   /**
    * @static
    * @readonly
    * @type Number
    * @name pc.ADDRESS_MIRRORED_REPEAT
    * @description Texture coordinate to be set to the fractional part if the integer part is even; if the integer part is odd,
    * then the texture coordinate is set to 1 minus the fractional part.
    */
   var ADDRESS_MIRRORED_REPEAT: Number;

   /**
    * @enum pc.BLENDMODE
    * @name pc.BLENDMODE_ZERO
    * @description Multiply all fragment components by zero.
    */
   enum BLENDMODE_ZERO {
   }

   /**
    * @enum pc.BLENDMODE
    * @name pc.BLENDMODE_ONE
    * @description Multiply all fragment components by one.
    */
   enum BLENDMODE_ONE {
   }

   /**
    * @enum pc.BLENDMODE
    * @name pc.BLENDMODE_SRC_COLOR
    * @description Multiply all fragment components by the components of the source fragment.
    */
   enum BLENDMODE_SRC_COLOR {
   }

   /**
    * @enum pc.BLENDMODE
    * @name pc.BLENDMODE_ONE_MINUS_SRC_COLOR
    * @description Multiply all fragment components by one minus the components of the source fragment.
    */
   enum BLENDMODE_ONE_MINUS_SRC_COLOR {
   }

   /**
    * @enum pc.BLENDMODE
    * @name pc.BLENDMODE_DST_COLOR
    * @description Multiply all fragment components by the components of the destination fragment.
    */
   enum BLENDMODE_DST_COLOR {
   }

   /**
    * @enum pc.BLENDMODE
    * @name pc.BLENDMODE_ONE_MINUS_DST_COLOR
    * @description Multiply all fragment components by one minus the components of the destination fragment.
    */
   enum BLENDMODE_ONE_MINUS_DST_COLOR {
   }

   /**
    * @enum pc.BLENDMODE
    * @name pc.BLENDMODE_SRC_ALPHA
    * @description Multiply all fragment components by the alpha value of the source fragment.
    */
   enum BLENDMODE_SRC_ALPHA {
   }

   /**
    * @enum pc.BLENDMODE
    * @name pc.BLENDMODE_SRC_ALPHA_SATURATE
    * @description Multiply all fragment components by the alpha value of the source fragment.
    */
   enum BLENDMODE_SRC_ALPHA_SATURATE {
   }

   /**
    * @enum pc.BLENDMODE
    * @name pc.BLENDMODE_ONE_MINUS_SRC_ALPHA
    * @description Multiply all fragment components by one minus the alpha value of the source fragment.
    */
   enum BLENDMODE_ONE_MINUS_SRC_ALPHA {
   }

   /**
    * @enum pc.BLENDMODE
    * @name pc.BLENDMODE_DST_ALPHA
    * @description Multiply all fragment components by the alpha value of the destination fragment.
    */
   enum BLENDMODE_DST_ALPHA {
   }

   /**
    * @enum pc.BLENDMODE
    * @name pc.BLENDMODE_ONE_MINUS_DST_ALPHA
    * @description Multiply all fragment components by one minus the alpha value of the destination fragment.
    */
   enum BLENDMODE_ONE_MINUS_DST_ALPHA {
   }

   /**
    * @enum pc.BLENDEQUATION
    * @name pc.BLENDEQUATION_ADD
    * @description Add the results of the source and destination fragment multiplies.
    */
   enum BLENDEQUATION_ADD {
   }

   /**
    * @enum pc.BLENDEQUATION
    * @name pc.BLENDEQUATION_SUBTRACT
    * @description Subtract the results of the source and destination fragment multiplies.
    */
   enum BLENDEQUATION_SUBTRACT {
   }

   /**
    * @enum pc.BLENDEQUATION
    * @name pc.BLENDEQUATION_REVERSE_SUBTRACT
    * @description Reverse and subtract the results of the source and destination fragment multiplies.
    */
   enum BLENDEQUATION_REVERSE_SUBTRACT {
   }

   /**
    * @enum pc.BUFFER
    * @name pc.BUFFER_STATIC
    * @description The data store contents will be modified once and used many times.
    */
   enum BUFFER_STATIC {
   }

   /**
    * @enum pc.BUFFER
    * @name pc.BUFFER_DYNAMIC
    * @description The data store contents will be modified repeatedly and used many times.
    */
   enum BUFFER_DYNAMIC {
   }

   /**
    * @enum pc.BUFFER
    * @name pc.BUFFER_STREAM
    * @description The data store contents will be modified once and used at most a few times.
    */
   enum BUFFER_STREAM {
   }

   /**
    * @enum pc.CLEARFLAG
    * @name pc.CLEARFLAG_COLOR
    * @description Clear the color buffer.
    */
   enum CLEARFLAG_COLOR {
   }

   /**
    * @enum pc.CLEARFLAG
    * @name pc.CLEARFLAG_DEPTH
    * @description Clear the depth buffer.
    */
   enum CLEARFLAG_DEPTH {
   }

   /**
    * @enum pc.CLEARFLAG
    * @name pc.CLEARFLAG_STENCIL
    * @description Clear the stencil buffer.
    */
   enum CLEARFLAG_STENCIL {
   }

   /**
    * @enum pc.CUBEFACE
    * @name pc.CUBEFACE_POSX
    * @description The positive X face of a cubemap.
    */
   enum CUBEFACE_POSX {
   }

   /**
    * @enum pc.CUBEFACE
    * @name pc.CUBEFACE_NEGX
    * @description The negative X face of a cubemap.
    */
   enum CUBEFACE_NEGX {
   }

   /**
    * @enum pc.CUBEFACE
    * @name pc.CUBEFACE_POSY
    * @description The positive Y face of a cubemap.
    */
   enum CUBEFACE_POSY {
   }

   /**
    * @enum pc.CUBEFACE
    * @name pc.CUBEFACE_NEGY
    * @description The negative Y face of a cubemap.
    */
   enum CUBEFACE_NEGY {
   }

   /**
    * @enum pc.CUBEFACE
    * @name pc.CUBEFACE_POSZ
    * @description The positive Z face of a cubemap.
    */
   enum CUBEFACE_POSZ {
   }

   /**
    * @enum pc.CUBEFACE
    * @name pc.CUBEFACE_NEGZ
    * @description The negative Z face of a cubemap.
    */
   enum CUBEFACE_NEGZ {
   }

   /**
    * @enum pc.CULLFACE
    * @name pc.CULLFACE_NONE
    * @description No triangles are culled.
    */
   enum CULLFACE_NONE {
   }

   /**
    * @enum pc.CULLFACE
    * @name pc.CULLFACE_BACK
    * @description Triangles facing away from the view direction are culled.
    */
   enum CULLFACE_BACK {
   }

   /**
    * @enum pc.CULLFACE
    * @name pc.CULLFACE_FRONT
    * @description Triangles facing the view direction are culled.
    */
   enum CULLFACE_FRONT {
   }

   /**
    * @enum pc.CULLFACE
    * @name pc.CULLFACE_FRONTANDBACK
    * @description Triangles are culled regardless of their orientation with respect to the view
    * direction. Note that point or line primitives are unaffected by this render state.
    */
   enum CULLFACE_FRONTANDBACK {
   }

   /**
    * @enum pc.ELEMENTTYPE
    * @name pc.ELEMENTTYPE_INT8
    * @description Signed byte vertex element type.
    */
   enum ELEMENTTYPE_INT8 {
   }

   /**
    * @enum pc.ELEMENTTYPE
    * @name pc.ELEMENTTYPE_UINT8
    * @description Unsigned byte vertex element type.
    */
   enum ELEMENTTYPE_UINT8 {
   }

   /**
    * @enum pc.ELEMENTTYPE
    * @name pc.ELEMENTTYPE_INT16
    * @description Signed short vertex element type.
    */
   enum ELEMENTTYPE_INT16 {
   }

   /**
    * @enum pc.ELEMENTTYPE
    * @name pc.ELEMENTTYPE_UINT16
    * @description Unsigned short vertex element type.
    */
   enum ELEMENTTYPE_UINT16 {
   }

   /**
    * @enum pc.ELEMENTTYPE
    * @name pc.ELEMENTTYPE_INT32
    * @description Signed integer vertex element type.
    */
   enum ELEMENTTYPE_INT32 {
   }

   /**
    * @enum pc.ELEMENTTYPE
    * @name pc.ELEMENTTYPE_UINT32
    * @description Unsigned integer vertex element type.
    */
   enum ELEMENTTYPE_UINT32 {
   }

   /**
    * @enum pc.ELEMENTTYPE
    * @name pc.ELEMENTTYPE_FLOAT32
    * @description Floating point vertex element type.
    */
   enum ELEMENTTYPE_FLOAT32 {
   }

   /**
    * @enum pc.FILTER
    * @name pc.FILTER_NEAREST
    * @description Point sample filtering.
    */
   enum FILTER_NEAREST {
   }

   /**
    * @enum pc.FILTER
    * @name pc.FILTER_LINEAR
    * @description Bilinear filtering.
    */
   enum FILTER_LINEAR {
   }

   /**
    * @enum pc.FILTER
    * @name pc.FILTER_NEAREST_MIPMAP_NEAREST
    * @description Use the nearest neighbor in the nearest mipmap level.
    */
   enum FILTER_NEAREST_MIPMAP_NEAREST {
   }

   /**
    * @enum pc.FILTER
    * @name pc.FILTER_NEAREST_MIPMAP_LINEAR
    * @description Linearly interpolate in the nearest mipmap level.
    */
   enum FILTER_NEAREST_MIPMAP_LINEAR {
   }

   /**
    * @enum pc.FILTER
    * @name pc.FILTER_LINEAR_MIPMAP_NEAREST
    * @description Use the nearest neighbor after linearly interpolating between mipmap levels.
    */
   enum FILTER_LINEAR_MIPMAP_NEAREST {
   }

   /**
    * @enum pc.FILTER
    * @name pc.FILTER_LINEAR_MIPMAP_LINEAR
    * @description Linearly interpolate both the mipmap levels and between texels.
    */
   enum FILTER_LINEAR_MIPMAP_LINEAR {
   }

   /**
    * @enum pc.INDEXFORMAT
    * @name pc.INDEXFORMAT_UINT8
    * @description 8-bit unsigned vertex indices.
    */
   enum INDEXFORMAT_UINT8 {
   }

   /**
    * @enum pc.INDEXFORMAT
    * @name pc.INDEXFORMAT_UINT16
    * @description 16-bit unsigned vertex indices.
    */
   enum INDEXFORMAT_UINT16 {
   }

   /**
    * @enum pc.INDEXFORMAT
    * @name pc.INDEXFORMAT_UINT32
    * @description 32-bit unsigned vertex indices.
    */
   enum INDEXFORMAT_UINT32 {
   }

   /**
    * @enum pc.PIXELFORMAT
    * @name pc.PIXELFORMAT_A8
    * @description 8-bit alpha.
    */
   enum PIXELFORMAT_A8 {
   }

   /**
    * @enum pc.PIXELFORMAT
    * @name pc.PIXELFORMAT_L8
    * @description 8-bit luminance.
    */
   enum PIXELFORMAT_L8 {
   }

   /**
    * @enum pc.PIXELFORMAT
    * @name pc.PIXELFORMAT_L8_A8
    * @description 8-bit luminance with 8-bit alpha.
    */
   enum PIXELFORMAT_L8_A8 {
   }

   /**
    * @enum pc.PIXELFORMAT
    * @name pc.PIXELFORMAT_R5_G6_B5
    * @description 16-bit RGB (5-bits for red channel, 6 for green and 5 for blue).
    */
   enum PIXELFORMAT_R5_G6_B5 {
   }

   /**
    * @enum pc.PIXELFORMAT
    * @name pc.PIXELFORMAT_R5_G5_B5_A1
    * @description 16-bit RGBA (5-bits for red channel, 5 for green, 5 for blue with 1-bit alpha).
    */
   enum PIXELFORMAT_R5_G5_B5_A1 {
   }

   /**
    * @enum pc.PIXELFORMAT
    * @name pc.PIXELFORMAT_R4_G4_B4_A4
    * @description 16-bit RGBA (4-bits for red channel, 4 for green, 4 for blue with 4-bit alpha).
    */
   enum PIXELFORMAT_R4_G4_B4_A4 {
   }

   /**
    * @enum pc.PIXELFORMAT
    * @name pc.PIXELFORMAT_R8_G8_B8
    * @description 24-bit RGB (8-bits for red channel, 8 for green and 8 for blue).
    */
   enum PIXELFORMAT_R8_G8_B8 {
   }

   /**
    * @enum pc.PIXELFORMAT
    * @name pc.PIXELFORMAT_R8_G8_B8_A8
    * @description 32-bit RGBA (8-bits for red channel, 8 for green, 8 for blue with 8-bit alpha).
    */
   enum PIXELFORMAT_R8_G8_B8_A8 {
   }

   /**
    * @enum pc.PIXELFORMAT
    * @name pc.PIXELFORMAT_DXT1
    * @description Block compressed format, storing 16 input pixels in 64 bits of output, consisting of two 16-bit RGB 5:6:5 color values and a 4x4 two bit lookup table.
    */
   enum PIXELFORMAT_DXT1 {
   }

   /**
    * @enum pc.PIXELFORMAT
    * @name pc.PIXELFORMAT_DXT3
    * @description Block compressed format, storing 16 input pixels (corresponding to a 4x4 pixel block) into 128 bits of output, consisting of 64 bits of alpha channel data (4 bits for each pixel) followed by 64 bits of color data, encoded the same way as DXT1.
    */
   enum PIXELFORMAT_DXT3 {
   }

   /**
    * @enum pc.PIXELFORMAT
    * @name pc.PIXELFORMAT_DXT5
    * @description Block compressed format, storing 16 input pixels into 128 bits of output, consisting of 64 bits of alpha channel data (two 8 bit alpha values and a 4x4 3 bit lookup table) followed by 64 bits of color data (encoded the same way as DXT1).
    */
   enum PIXELFORMAT_DXT5 {
   }

   /**
    * @enum pc.PIXELFORMAT
    * @name pc.PIXELFORMAT_RGB16F
    * @description 16-bit floating point RGB (16-bit float for each red, green and blue channels).
    */
   enum PIXELFORMAT_RGB16F {
   }

   /**
    * @enum pc.PIXELFORMAT
    * @name pc.PIXELFORMAT_RGBA16F
    * @description 16-bit floating point RGBA (16-bit float for each red, green, blue and alpha channels).
    */
   enum PIXELFORMAT_RGBA16F {
   }

   /**
    * @enum pc.PIXELFORMAT
    * @name pc.PIXELFORMAT_RGB32F
    * @description 32-bit floating point RGB (32-bit float for each red, green and blue channels).
    */
   enum PIXELFORMAT_RGB32F {
   }

   /**
    * @enum pc.PIXELFORMAT
    * @name pc.PIXELFORMAT_RGBA32F
    * @description 32-bit floating point RGBA (32-bit float for each red, green, blue and alpha channels).
    */
   enum PIXELFORMAT_RGBA32F {
   }

   /**
    * @enum pc.PRIMITIVE
    * @name pc.PRIMITIVE_POINTS
    * @description List of distinct points.
    */
   enum PRIMITIVE_POINTS {
   }

   /**
    * @enum pc.PRIMITIVE
    * @name pc.PRIMITIVE_LINES
    * @description Discrete list of line segments.
    */
   enum PRIMITIVE_LINES {
   }

   /**
    * @enum pc.PRIMITIVE
    * @name pc.PRIMITIVE_LINELOOP
    * @description List of points that are linked sequentially by line segments, with a closing line segment between the last and first points.
    */
   enum PRIMITIVE_LINELOOP {
   }

   /**
    * @enum pc.PRIMITIVE
    * @name pc.PRIMITIVE_LINESTRIP
    * @description List of points that are linked sequentially by line segments.
    */
   enum PRIMITIVE_LINESTRIP {
   }

   /**
    * @enum pc.PRIMITIVE
    * @name pc.PRIMITIVE_TRIANGLES
    * @description Discrete list of triangles.
    */
   enum PRIMITIVE_TRIANGLES {
   }

   /**
    * @enum pc.PRIMITIVE
    * @name pc.PRIMITIVE_TRISTRIP
    * @description Connected strip of triangles where a specified vertex forms a triangle using the previous two.
    */
   enum PRIMITIVE_TRISTRIP {
   }

   /**
    * @enum pc.PRIMITIVE
    * @name pc.PRIMITIVE_TRIFAN
    * @description Connected fan of triangles where the first vertex forms triangles with the following pairs of vertices.
    */
   enum PRIMITIVE_TRIFAN {
   }

   /**
    * @enum pc.SEMANTIC
    * @name pc.SEMANTIC_POSITION
    * @description Vertex attribute to be treated as a position.
    */
   enum SEMANTIC_POSITION {
   }

   /**
    * @enum pc.SEMANTIC
    * @name pc.SEMANTIC_NORMAL
    * @description Vertex attribute to be treated as a normal.
    */
   enum SEMANTIC_NORMAL {
   }

   /**
    * @enum pc.SEMANTIC
    * @name pc.SEMANTIC_TANGENT
    * @description Vertex attribute to be treated as a tangent.
    */
   enum SEMANTIC_TANGENT {
   }

   /**
    * @enum pc.SEMANTIC
    * @name pc.SEMANTIC_BLENDWEIGHT
    * @description Vertex attribute to be treated as skin blend weights.
    */
   enum SEMANTIC_BLENDWEIGHT {
   }

   /**
    * @enum pc.SEMANTIC
    * @name pc.SEMANTIC_BLENDINDICES
    * @description Vertex attribute to be treated as skin blend indices.
    */
   enum SEMANTIC_BLENDINDICES {
   }

   /**
    * @enum pc.SEMANTIC
    * @name pc.SEMANTIC_COLOR
    * @description Vertex attribute to be treated as a color.
    */
   enum SEMANTIC_COLOR {
   }

   /**
    * @enum pc.SEMANTIC
    * @name pc.SEMANTIC_TEXCOORD0
    * @description Vertex attribute to be treated as a texture coordinate (set 0).
    */
   enum SEMANTIC_TEXCOORD0 {
   }

   /**
    * @enum pc.SEMANTIC
    * @name pc.SEMANTIC_TEXCOORD1
    * @description Vertex attribute to be treated as a texture coordinate (set 1).
    */
   enum SEMANTIC_TEXCOORD1 {
   }

   /**
    * @enum pc.SEMANTIC
    * @name pc.SEMANTIC_TEXCOORD2
    * @description Vertex attribute to be treated as a texture coordinate (set 2).
    */
   enum SEMANTIC_TEXCOORD2 {
   }

   /**
    * @enum pc.SEMANTIC
    * @name pc.SEMANTIC_TEXCOORD3
    * @description Vertex attribute to be treated as a texture coordinate (set 3).
    */
   enum SEMANTIC_TEXCOORD3 {
   }

   /**
    * @enum pc.SEMANTIC
    * @name pc.SEMANTIC_TEXCOORD4
    * @description Vertex attribute to be treated as a texture coordinate (set 4).
    */
   enum SEMANTIC_TEXCOORD4 {
   }

   /**
    * @enum pc.SEMANTIC
    * @name pc.SEMANTIC_TEXCOORD5
    * @description Vertex attribute to be treated as a texture coordinate (set 5).
    */
   enum SEMANTIC_TEXCOORD5 {
   }

   /**
    * @enum pc.SEMANTIC
    * @name pc.SEMANTIC_TEXCOORD6
    * @description Vertex attribute to be treated as a texture coordinate (set 6).
    */
   enum SEMANTIC_TEXCOORD6 {
   }

   /**
    * @enum pc.SEMANTIC
    * @name pc.SEMANTIC_TEXCOORD7
    * @description Vertex attribute to be treated as a texture coordinate (set 7).
    */
   enum SEMANTIC_TEXCOORD7 {
   }

   /**
    * @enum pc.SEMANTIC
    * @name pc.SEMANTIC_ATTR0
    * @description Vertex attribute with a user defined semantic.
    */
   enum SEMANTIC_ATTR0 {
   }

   /**
    * @enum pc.SEMANTIC
    * @name pc.SEMANTIC_ATTR1
    * @description Vertex attribute with a user defined semantic.
    */
   enum SEMANTIC_ATTR1 {
   }

   /**
    * @enum pc.SEMANTIC
    * @name pc.SEMANTIC_ATTR2
    * @description Vertex attribute with a user defined semantic.
    */
   enum SEMANTIC_ATTR2 {
   }

   /**
    * @enum pc.SEMANTIC
    * @name pc.SEMANTIC_ATTR3
    * @description Vertex attribute with a user defined semantic.
    */
   enum SEMANTIC_ATTR3 {
   }

   /**
    * @enum pc.SEMANTIC
    * @name pc.SEMANTIC_ATTR4
    * @description Vertex attribute with a user defined semantic.
    */
   enum SEMANTIC_ATTR4 {
   }

   /**
    * @enum pc.SEMANTIC
    * @name pc.SEMANTIC_ATTR5
    * @description Vertex attribute with a user defined semantic.
    */
   enum SEMANTIC_ATTR5 {
   }

   /**
    * @enum pc.SEMANTIC
    * @name pc.SEMANTIC_ATTR6
    * @description Vertex attribute with a user defined semantic.
    */
   enum SEMANTIC_ATTR6 {
   }

   /**
    * @enum pc.SEMANTIC
    * @name pc.SEMANTIC_ATTR7
    * @description Vertex attribute with a user defined semantic.
    */
   enum SEMANTIC_ATTR7 {
   }

   /**
    * @enum pc.SEMANTIC
    * @name pc.SEMANTIC_ATTR8
    * @description Vertex attribute with a user defined semantic.
    */
   enum SEMANTIC_ATTR8 {
   }

   /**
    * @enum pc.SEMANTIC
    * @name pc.SEMANTIC_ATTR9
    * @description Vertex attribute with a user defined semantic.
    */
   enum SEMANTIC_ATTR9 {
   }

   /**
    * @enum pc.SEMANTIC
    * @name pc.SEMANTIC_ATTR10
    * @description Vertex attribute with a user defined semantic.
    */
   enum SEMANTIC_ATTR10 {
   }

   /**
    * @enum pc.SEMANTIC
    * @name pc.SEMANTIC_ATTR11
    * @description Vertex attribute with a user defined semantic.
    */
   enum SEMANTIC_ATTR11 {
   }

   /**
    * @enum pc.SEMANTIC
    * @name pc.SEMANTIC_ATTR12
    * @description Vertex attribute with a user defined semantic.
    */
   enum SEMANTIC_ATTR12 {
   }

   /**
    * @enum pc.SEMANTIC
    * @name pc.SEMANTIC_ATTR13
    * @description Vertex attribute with a user defined semantic.
    */
   enum SEMANTIC_ATTR13 {
   }

   /**
    * @enum pc.SEMANTIC
    * @name pc.SEMANTIC_ATTR14
    * @description Vertex attribute with a user defined semantic.
    */
   enum SEMANTIC_ATTR14 {
   }

   /**
    * @enum pc.SEMANTIC
    * @name pc.SEMANTIC_ATTR15
    * @description Vertex attribute with a user defined semantic.
    */
   enum SEMANTIC_ATTR15 {
   }

   /**
    * @enum pc.TEXTURELOCK
    * @name pc.TEXTURELOCK_READ
    * @description Read only. Any changes to the locked mip level's pixels will not update the texture.
    */
   enum TEXTURELOCK_READ {
   }

   /**
    * @enum pc.TEXTURELOCK
    * @name pc.TEXTURELOCK_WRITE
    * @description Write only. The contents of the specified mip level will be entirely replaced.
    */
   enum TEXTURELOCK_WRITE {
   }

   /**
    * @name pc.IndexBuffer
    * @class An index buffer is the mechanism via which the application specifies primitive
    * index data to the graphics hardware.
    * @description Creates a new index buffer.
    * @example
    * // Create an index buffer holding 3 16-bit indices
    * // The buffer is marked as static, hinting that the buffer will never be modified
    * var indexBuffer = new pc.IndexBuffer(graphicsDevice, pc.INDEXFORMAT_UINT16, 3, pc.BUFFER_STATIC);
    * @param {pc.GraphicsDevice} graphicsDevice The graphics device used to manage this index buffer.
    * @param {Number} format The type of each index to be stored in the index buffer (see pc.INDEXFORMAT_*).
    * @param {Number} numIndices The number of indices to be stored in the index buffer.
    * @param {Number} [usage] The usage type of the vertex buffer (see pc.BUFFER_*).
    */
   class IndexBuffer {
       /**
        * @name pc.IndexBuffer
        * @class An index buffer is the mechanism via which the application specifies primitive
        * index data to the graphics hardware.
        * @description Creates a new index buffer.
        * @example
        * // Create an index buffer holding 3 16-bit indices
        * // The buffer is marked as static, hinting that the buffer will never be modified
        * var indexBuffer = new pc.IndexBuffer(graphicsDevice, pc.INDEXFORMAT_UINT16, 3, pc.BUFFER_STATIC);
        * @param {pc.GraphicsDevice} graphicsDevice The graphics device used to manage this index buffer.
        * @param {Number} format The type of each index to be stored in the index buffer (see pc.INDEXFORMAT_*).
        * @param {Number} numIndices The number of indices to be stored in the index buffer.
        * @param {Number} [usage] The usage type of the vertex buffer (see pc.BUFFER_*).
        */
       constructor(graphicsDevice: pc.GraphicsDevice, format: Number, numIndices: Number, usage?: Number);

       /**
        * @function
        * @name pc.IndexBuffer#destroy
        * @description Frees resources associated with this index buffer.
        */
       destroy(): void;

       /**
        * @function
        * @name pc.IndexBuffer#getFormat
        * @description Returns the data format of the specified index buffer.
        * @returns {Number} The data format of the specified index buffer (see pc.INDEXFORMAT_*).
        */
       getFormat(): Number;

       /**
        * @function
        * @name pc.IndexBuffer#getNumIndices
        * @description Returns the number of indices stored in the specified index buffer.
        * @returns {Number} The number of indices stored in the specified index buffer.
        */
       getNumIndices(): Number;

       /**
        * @function
        * @name pc.IndexBuffer#lock
        * @description Gives access to the block of memory that stores the buffer's indices.
        * @returns {ArrayBuffer} A contiguous block of memory where index data can be written to.
        */
       lock(): ArrayBuffer;

       /**
        * @function
        * @name pc.IndexBuffer#unlock
        * @description Signals that the block of memory returned by a call to the lock function is
        * ready to be given to the graphics hardware. Only unlocked index buffers can be set on the
        * currently active device.
        */
       unlock(): void;

   }

   /**
    * @name pc.PostEffect
    * @class Base class for all post effects. Post effects take a a render target as input
    * apply effects to it and then render the result to an output render target or the screen
    * if no output is specified.
    * @description Creates new PostEffect
    * @param {pc.GraphicsDevice} graphicsDevice The graphics device of the application
    */
   class PostEffect {
       /**
        * @name pc.PostEffect
        * @class Base class for all post effects. Post effects take a a render target as input
        * apply effects to it and then render the result to an output render target or the screen
        * if no output is specified.
        * @description Creates new PostEffect
        * @param {pc.GraphicsDevice} graphicsDevice The graphics device of the application
        */
       constructor(graphicsDevice: pc.GraphicsDevice);

       /**
        * @function
        * @name pc.PostEffect#render
        * @description Render the post effect using the specified inputTarget
        * to the specified outputTarget.
        * @param {pc.RenderTarget} inputTarget The input render target
        * @param {pc.RenderTarget} outputTarget The output render target. If null then this will be the screen.
        * @param {pc.Vec4} rect (Optional) The rect of the current camera. If not specified then it will default to [0,0,1,1]
        */
       render(inputTarget: pc.RenderTarget, outputTarget: pc.RenderTarget, rect: pc.Vec4): void;

   }

   /**
    * @name pc.RenderTarget
    * @class A render target is a rectangular rendering surface.
    * @description Creates a new render target.
    * @param {pc.GraphicsDevice} graphicsDevice The graphics device used to manage this frame buffer.
    * @param {pc.Texture} colorBuffer The texture that this render target will treat as a rendering surface.
    * @param {Object} options Object for passing optional arguments.
    * @param {Boolean} options.depth True if the render target is to include a depth buffer and false otherwise (default is true).
    * @param {Boolean} options.stencil True if the render target is to include a stencil buffer and false otherwise (default is false). Requires depth buffer.
    * Defaults to true.
    * @param {Number} options.face If the colorBuffer parameter is a cubemap, use this option to specify the
    * face of the cubemap to render to. Can be:
    * <ul>
    *     <li>pc.CUBEFACE_POSX</li>
    *     <li>pc.CUBEFACE_NEGX</li>
    *     <li>pc.CUBEFACE_POSY</li>
    *     <li>pc.CUBEFACE_NEGY</li>
    *     <li>pc.CUBEFACE_POSZ</li>
    *     <li>pc.CUBEFACE_NEGZ</li>
    * </ul>
    * Defaults to pc.CUBEFACE_POSX.
    * @example
    * // Create a 512x512x24-bit render target with a depth buffer
    * var colorBuffer = new pc.Texture(graphicsDevice, {
    *     width: 512,
    *     height: 512,
    *     format: pc.PIXELFORMAT_R8_G8_B8
    * });
    * var renderTarget = new pc.RenderTarget(graphicsDevice, colorBuffer, {
    *     depth: true
    * });
    *
    * // Set the render target on an entity's camera component
    * entity.camera.renderTarget = renderTarget;
    */
   class RenderTarget {
       /**
        * @name pc.RenderTarget
        * @class A render target is a rectangular rendering surface.
        * @description Creates a new render target.
        * @param {pc.GraphicsDevice} graphicsDevice The graphics device used to manage this frame buffer.
        * @param {pc.Texture} colorBuffer The texture that this render target will treat as a rendering surface.
        * @param {Object} options Object for passing optional arguments.
        * @param {Boolean} options.depth True if the render target is to include a depth buffer and false otherwise (default is true).
        * @param {Boolean} options.stencil True if the render target is to include a stencil buffer and false otherwise (default is false). Requires depth buffer.
        * Defaults to true.
        * @param {Number} options.face If the colorBuffer parameter is a cubemap, use this option to specify the
        * face of the cubemap to render to. Can be:
        * <ul>
        *     <li>pc.CUBEFACE_POSX</li>
        *     <li>pc.CUBEFACE_NEGX</li>
        *     <li>pc.CUBEFACE_POSY</li>
        *     <li>pc.CUBEFACE_NEGY</li>
        *     <li>pc.CUBEFACE_POSZ</li>
        *     <li>pc.CUBEFACE_NEGZ</li>
        * </ul>
        * Defaults to pc.CUBEFACE_POSX.
        * @example
        * // Create a 512x512x24-bit render target with a depth buffer
        * var colorBuffer = new pc.Texture(graphicsDevice, {
        *     width: 512,
        *     height: 512,
        *     format: pc.PIXELFORMAT_R8_G8_B8
        * });
        * var renderTarget = new pc.RenderTarget(graphicsDevice, colorBuffer, {
        *     depth: true
        * });
        *
        * // Set the render target on an entity's camera component
        * entity.camera.renderTarget = renderTarget;
        */
       constructor(graphicsDevice: pc.GraphicsDevice, colorBuffer: pc.Texture, options: { depth: Boolean, stencil: Boolean, face: Number });

       /**
        * @function
        * @name pc.RenderTarget#destroy
        * @description Frees resources associated with this render target.
        */
       destroy(): void;

       /**
        * @readonly
        * @name pc.RenderTarget#colorBuffer
        * @type pc.Texture
        * @description Color buffer set up on the render target.
        */
       colorBuffer: pc.Texture;

       /**
        * @readonly
        * @name pc.RenderTarget#face
        * @type Number
        * @description If the render target is bound to a cubemap, this property
        * specifies which face of the cubemap is rendered to. Can be:
        * <ul>
        *     <li>pc.CUBEFACE_POSX</li>
        *     <li>pc.CUBEFACE_NEGX</li>
        *     <li>pc.CUBEFACE_POSY</li>
        *     <li>pc.CUBEFACE_NEGY</li>
        *     <li>pc.CUBEFACE_POSZ</li>
        *     <li>pc.CUBEFACE_NEGZ</li>
        * </ul>
        */
       face: Number;

       /**
        * @readonly
        * @name pc.RenderTarget#width
        * @type Number
        * @description Width of the render target in pixels.
        */
       width: Number;

       /**
        * @readonly
        * @name pc.RenderTarget#height
        * @type Number
        * @description Height of the render target in pixels.
        */
       height: Number;

   }

   /**
    * @name pc.Shader
    * @class A shader is a program that is repsonsible for rendering graphical primitives on a device's
    * graphics processor. The shader is generated from a shader definition. This shader definition specifies
    * the code for processing vertices and fragments processed by the GPU. The language of the code is GLSL
    * (or more specifically ESSL, the OpenGL ES Shading Language). The shader definition also describes how
    * the PlayCanvas engine should map vertex buffer elements onto the attributes specified in the vertex
    * shader code.
    * @description Creates a new shader object.
    * @param {pc.GraphicsDevice} graphicsDevice The graphics device used to manage this shader.
    * @param {Object} definition The shader definition from which to build the shader.
    * @param {Object} definition.attributes Object detailing the mapping of vertex shader attribute names
    * to semantics (pc.SEMANTIC_*). This enables the engine to match vertex buffer data as inputs to the
    * shader.
    * @param {String} definition.vshader Vertex shader source (GLSL code).
    * @param {String} definition.fshader Fragment shader source (GLSL code).
    * @example
    * // Create a shader that renders primitives with a solid red color
    * var shaderDefinition = {
    *     attributes: {
    *         aPosition: pc.SEMANTIC_POSITION
    *     },
    *     vshader: [
    *         "attribute vec3 aPosition;",
    *         "",
    *         "void main(void)",
    *         "{",
    *         "    gl_Position = vec4(aPosition, 1.0);",
    *         "}"
    *     ].join("\n"),
    *     fshader: [
    *         "precision " + graphicsDevice.precision + " float;",
    *         "",
    *         "void main(void)",
    *         "{",
    *         "    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);",
    *         "}"
    *     ].join("\n")
    * };
    *
    * shader = new pc.Shader(graphicsDevice, shaderDefinition);
    * @author Will Eastcott
    */
   class Shader {
       /**
        * @name pc.Shader
        * @class A shader is a program that is repsonsible for rendering graphical primitives on a device's
        * graphics processor. The shader is generated from a shader definition. This shader definition specifies
        * the code for processing vertices and fragments processed by the GPU. The language of the code is GLSL
        * (or more specifically ESSL, the OpenGL ES Shading Language). The shader definition also describes how
        * the PlayCanvas engine should map vertex buffer elements onto the attributes specified in the vertex
        * shader code.
        * @description Creates a new shader object.
        * @param {pc.GraphicsDevice} graphicsDevice The graphics device used to manage this shader.
        * @param {Object} definition The shader definition from which to build the shader.
        * @param {Object} definition.attributes Object detailing the mapping of vertex shader attribute names
        * to semantics (pc.SEMANTIC_*). This enables the engine to match vertex buffer data as inputs to the
        * shader.
        * @param {String} definition.vshader Vertex shader source (GLSL code).
        * @param {String} definition.fshader Fragment shader source (GLSL code).
        * @example
        * // Create a shader that renders primitives with a solid red color
        * var shaderDefinition = {
        *     attributes: {
        *         aPosition: pc.SEMANTIC_POSITION
        *     },
        *     vshader: [
        *         "attribute vec3 aPosition;",
        *         "",
        *         "void main(void)",
        *         "{",
        *         "    gl_Position = vec4(aPosition, 1.0);",
        *         "}"
        *     ].join("\n"),
        *     fshader: [
        *         "precision " + graphicsDevice.precision + " float;",
        *         "",
        *         "void main(void)",
        *         "{",
        *         "    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);",
        *         "}"
        *     ].join("\n")
        * };
        *
        * shader = new pc.Shader(graphicsDevice, shaderDefinition);
        * @author Will Eastcott
        */
       constructor(graphicsDevice: pc.GraphicsDevice, definition: { attributes: Object, vshader: String, fshader: String });

       /**
        * @function
        * @name pc.Shader#destroy
        * @description Frees resources associated with this shader.
        */
       destroy(): void;

   }

   /**
    * @name pc.Texture
    * @class A texture is a container for texel data that can be utilized in a fragment shader.
    * Typically, the texel data represents an image that is mapped over geometry.
    * @description Creates a new texture.
    * @param {pc.GraphicsDevice} graphicsDevice The graphics device used to manage this texture.
    * @param {Object} options Object for passing optional arguments.
    * @param {Number} options.width The width of the texture in pixels. Defaults to 4.
    * @param {Number} options.height The height of the texture in pixels. Defaults to 4.
    * @param {Number} options.format The pixel format of the texture. Can be:
    * <ul>
    *     <li>{@link pc.PIXELFORMAT_A8}</li>
    *     <li>{@link pc.PIXELFORMAT_L8}</li>
    *     <li>{@link pc.PIXELFORMAT_L8_A8}</li>
    *     <li>{@link pc.PIXELFORMAT_R5_G6_B5}</li>
    *     <li>{@link pc.PIXELFORMAT_R5_G5_B5_A1}</li>
    *     <li>{@link pc.PIXELFORMAT_R4_G4_B4_A4}</li>
    *     <li>{@link pc.PIXELFORMAT_R8_G8_B8}</li>
    *     <li>{@link pc.PIXELFORMAT_R8_G8_B8_A8}</li>
    *     <li>{@link pc.PIXELFORMAT_DXT1}</li>
    *     <li>{@link pc.PIXELFORMAT_DXT3}</li>
    *     <li>{@link pc.PIXELFORMAT_DXT5}</li>
    *     <li>{@link pc.PIXELFORMAT_RGB16F}</li>
    *     <li>{@link pc.PIXELFORMAT_RGBA16F}</li>
    *     <li>{@link pc.PIXELFORMAT_RGB32F}</li>
    *     <li>{@link pc.PIXELFORMAT_RGBA32F}</li>
    *     <li>{@link pc.PIXELFORMAT_ETC1}</li>
    *     <li>{@link pc.PIXELFORMAT_PVRTC_2BPP_RGB_1}</li>
    *     <li>{@link pc.PIXELFORMAT_PVRTC_2BPP_RGBA_1}</li>
    *     <li>{@link pc.PIXELFORMAT_PVRTC_4BPP_RGB_1}</li>
    *     <li>{@link pc.PIXELFORMAT_PVRTC_4BPP_RGBA_1}</li>
    * </ul>
    * Defaults to pc.PIXELFORMAT_R8_G8_B8_A8.
    * @param {Boolean} options.cubemap Specifies whether the texture is to be a cubemap. Defaults to false.
    * @param {Boolean} options.rgbm Specifies whether the texture contains RGBM-encoded HDR data. Defaults to false.
    * @param {Boolean} options.fixCubemapSeams Specifies whether this cubemap texture requires special
    * seam fixing shader code to look right. Defaults to false.
    * @example
    * // Create a 8x8x24-bit texture
    * var texture = new pc.Texture(graphicsDevice, {
    *     width: 8,
    *     height: 8,
    *     format: pc.PIXELFORMAT_R8_G8_B8
    * });
    *
    * // Fill the texture with a gradient
    * var pixels = texture.lock();
    * var count = 0;
    * for (var i = 0; i < 8; i++) {
    *     for (var j = 0; j < 8; j++) {
    *         pixels[count++] = i * 32;
    *         pixels[count++] = j * 32;
    *         pixels[count++] = 255;
    *     }
    * }
    * texture.unlock();
    * @author Will Eastcott
    */
   class Texture {
       /**
        * @name pc.Texture
        * @class A texture is a container for texel data that can be utilized in a fragment shader.
        * Typically, the texel data represents an image that is mapped over geometry.
        * @description Creates a new texture.
        * @param {pc.GraphicsDevice} graphicsDevice The graphics device used to manage this texture.
        * @param {Object} options Object for passing optional arguments.
        * @param {Number} options.width The width of the texture in pixels. Defaults to 4.
        * @param {Number} options.height The height of the texture in pixels. Defaults to 4.
        * @param {Number} options.format The pixel format of the texture. Can be:
        * <ul>
        *     <li>{@link pc.PIXELFORMAT_A8}</li>
        *     <li>{@link pc.PIXELFORMAT_L8}</li>
        *     <li>{@link pc.PIXELFORMAT_L8_A8}</li>
        *     <li>{@link pc.PIXELFORMAT_R5_G6_B5}</li>
        *     <li>{@link pc.PIXELFORMAT_R5_G5_B5_A1}</li>
        *     <li>{@link pc.PIXELFORMAT_R4_G4_B4_A4}</li>
        *     <li>{@link pc.PIXELFORMAT_R8_G8_B8}</li>
        *     <li>{@link pc.PIXELFORMAT_R8_G8_B8_A8}</li>
        *     <li>{@link pc.PIXELFORMAT_DXT1}</li>
        *     <li>{@link pc.PIXELFORMAT_DXT3}</li>
        *     <li>{@link pc.PIXELFORMAT_DXT5}</li>
        *     <li>{@link pc.PIXELFORMAT_RGB16F}</li>
        *     <li>{@link pc.PIXELFORMAT_RGBA16F}</li>
        *     <li>{@link pc.PIXELFORMAT_RGB32F}</li>
        *     <li>{@link pc.PIXELFORMAT_RGBA32F}</li>
        *     <li>{@link pc.PIXELFORMAT_ETC1}</li>
        *     <li>{@link pc.PIXELFORMAT_PVRTC_2BPP_RGB_1}</li>
        *     <li>{@link pc.PIXELFORMAT_PVRTC_2BPP_RGBA_1}</li>
        *     <li>{@link pc.PIXELFORMAT_PVRTC_4BPP_RGB_1}</li>
        *     <li>{@link pc.PIXELFORMAT_PVRTC_4BPP_RGBA_1}</li>
        * </ul>
        * Defaults to pc.PIXELFORMAT_R8_G8_B8_A8.
        * @param {Boolean} options.cubemap Specifies whether the texture is to be a cubemap. Defaults to false.
        * @param {Boolean} options.rgbm Specifies whether the texture contains RGBM-encoded HDR data. Defaults to false.
        * @param {Boolean} options.fixCubemapSeams Specifies whether this cubemap texture requires special
        * seam fixing shader code to look right. Defaults to false.
        * @example
        * // Create a 8x8x24-bit texture
        * var texture = new pc.Texture(graphicsDevice, {
        *     width: 8,
        *     height: 8,
        *     format: pc.PIXELFORMAT_R8_G8_B8
        * });
        *
        * // Fill the texture with a gradient
        * var pixels = texture.lock();
        * var count = 0;
        * for (var i = 0; i < 8; i++) {
        *     for (var j = 0; j < 8; j++) {
        *         pixels[count++] = i * 32;
        *         pixels[count++] = j * 32;
        *         pixels[count++] = 255;
        *     }
        * }
        * texture.unlock();
        * @author Will Eastcott
        */
       constructor(graphicsDevice: pc.GraphicsDevice, options: { width: Number, height: Number, format: Number, cubemap: Boolean, rgbm: Boolean, fixCubemapSeams: Boolean });

       /**
        * @name pc.Texture#minFilter
        * @type Number
        * @description The minification filter to be applied to the texture. Can be:
        * <ul>
        *     <li>{@link pc.FILTER_NEAREST}</li>
        *     <li>{@link pc.FILTER_LINEAR}</li>
        *     <li>{@link pc.FILTER_NEAREST_MIPMAP_NEAREST}</li>
        *     <li>{@link pc.FILTER_NEAREST_MIPMAP_LINEAR}</li>
        *     <li>{@link pc.FILTER_LINEAR_MIPMAP_NEAREST}</li>
        *     <li>{@link pc.FILTER_LINEAR_MIPMAP_LINEAR}</li>
        * </ul>
        */
       minFilter: Number;

       /**
        * @name pc.Texture#magFilter
        * @type Number
        * @description The magnification filter to be applied to the texture. Can be:
        * <ul>
        *     <li>{@link pc.FILTER_NEAREST}</li>
        *     <li>{@link pc.FILTER_LINEAR}</li>
        * </ul>
        */
       magFilter: Number;

       /**
        * @name pc.Texture#addressU
        * @type Number
        * @description The addressing mode to be applied to the texture. Can be:
        * <ul>
        *     <li>{@link pc.ADDRESS_REPEAT}</li>
        *     <li>{@link pc.ADDRESS_CLAMP_TO_EDGE}</li>
        *     <li>{@link pc.ADDRESS_MIRRORED_REPEAT}</li>
        * </ul>
        */
       addressU: Number;

       /**
        * @name pc.Texture#addressV
        * @type Number
        * @description The addressing mode to be applied to the texture. Can be:
        * <ul>
        *     <li>{@link pc.ADDRESS_REPEAT}</li>
        *     <li>{@link pc.ADDRESS_CLAMP_TO_EDGE}</li>
        *     <li>{@link pc.ADDRESS_MIRRORED_REPEAT}</li>
        * </ul>
        */
       addressV: Number;

       /**
        * @private
        * @deprecated
        * @name pc.Texture#autoMipmap
        * @type Boolean
        * @description Toggles automatic mipmap generation. Can't be used on non power of two textures.
        */
       private autoMipmap: Boolean;

       /**
        * @name pc.Texture#mipmaps
        * @type Boolean
        * @description Defines if texture should generate/upload mipmaps if possible.
        */
       mipmaps: Boolean;

       /**
        * @name pc.Texture#anisotropy
        * @type Number
        * @description Integer value specifying the level of anisotropic to apply to the texture
        * ranging from 1 (no anisotropic filtering) to the {@link pc.GraphicsDevice} property maxAnisotropy.
        */
       anisotropy: Number;

       /**
        * @readonly
        * @name pc.Texture#width
        * @type Number
        * @description The width of the texture in pixels.
        */
       width: Number;

       /**
        * @readonly
        * @name pc.Texture#height
        * @type Number
        * @description The height of the texture in pixels.
        */
       height: Number;

       /**
        * @readonly
        * @name pc.Texture#format
        * @type Number
        * @description The pixel format of the texture. Can be:
        * <ul>
        *     <li>{@link pc.PIXELFORMAT_A8}</li>
        *     <li>{@link pc.PIXELFORMAT_L8}</li>
        *     <li>{@link pc.PIXELFORMAT_L8_A8}</li>
        *     <li>{@link pc.PIXELFORMAT_R5_G6_B5}</li>
        *     <li>{@link pc.PIXELFORMAT_R5_G5_B5_A1}</li>
        *     <li>{@link pc.PIXELFORMAT_R4_G4_B4_A4}</li>
        *     <li>{@link pc.PIXELFORMAT_R8_G8_B8}</li>
        *     <li>{@link pc.PIXELFORMAT_R8_G8_B8_A8}</li>
        *     <li>{@link pc.PIXELFORMAT_DXT1}</li>
        *     <li>{@link pc.PIXELFORMAT_DXT3}</li>
        *     <li>{@link pc.PIXELFORMAT_DXT5}</li>
        *     <li>{@link pc.PIXELFORMAT_RGB16F}</li>
        *     <li>{@link pc.PIXELFORMAT_RGBA16F}</li>
        *     <li>{@link pc.PIXELFORMAT_RGB32F}</li>
        *     <li>{@link pc.PIXELFORMAT_RGBA32F}</li>
        *     <li>{@link pc.PIXELFORMAT_ETC1}</li>
        *     <li>{@link pc.PIXELFORMAT_PVRTC_2BPP_RGB_1}</li>
        *     <li>{@link pc.PIXELFORMAT_PVRTC_2BPP_RGBA_1}</li>
        *     <li>{@link pc.PIXELFORMAT_PVRTC_4BPP_RGB_1}</li>
        *     <li>{@link pc.PIXELFORMAT_PVRTC_4BPP_RGBA_1}</li>
        * </ul>
        */
       format: Number;

       /**
        * @readonly
        * @name pc.Texture#cubemap
        * @type Boolean
        * @description Returns true if this texture is a cube map and false otherwise.
        */
       cubemap: Boolean;

       /**
        * @private
        * @function
        * @name pc.Texture#bind
        * @description Activates the specified texture on the current texture unit.
        */
       private bind(): void;

       /**
        * @function
        * @name pc.Texture#destroy
        * @description Forcibly free up the underlying WebGL resource owned by the texture.
        */
       destroy(): void;

       /**
        * @function
        * @name pc.Texture#lock
        * @description Locks a miplevel of the texture, returning a typed array to be filled with pixel data.
        * @param {Object} options Optional options object. Valid properties are as follows:
        * @param {Number} options.level The mip level to lock with 0 being the top level. Defaults to 0.
        * @param {Number} options.face If the texture is a cubemap, this is the index of the face to lock.
        */
       lock(options: { level: Number, face: Number }): void;

       /**
        * @private
        * @function
        * @name pc.Texture#recover
        * @description Restores the texture in the event of the underlying WebGL context being lost and then
        * restored.
        */
       private recover(): void;

       /**
        * @function
        * @name pc.Texture#setSource
        * @description Set the pixel data of the texture from a canvas, image, video DOM element. If the
        * texture is a cubemap, the supplied source must be an array of 6 canvases, images or videos.
        * @param {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement|Array} source A canvas, image or video element,
        * or an array of 6 canvas, image or video elements.
        */
       setSource(source: (HTMLCanvasElement|HTMLImageElement|HTMLVideoElement|Array)): void;

       /**
        * @function
        * @name pc.Texture#getSource
        * @description Get the pixel data of the texture. If this is a cubemap then an array of 6 images will be returned otherwise
        * a single image.
        * @return {HTMLImageElement} The source image of this texture.
        */
       getSource(): HTMLImageElement;

       /**
        * @function
        * @name pc.Texture#unlock
        * @description Unlocks the currently locked mip level and uploads it to VRAM.
        */
       unlock(): void;

       /**
        * @function
        * @name pc.Texture#upload
        * @description Forces a reupload of the textures pixel data to graphics memory. Ordinarily, this function
        * is called by internally by {@link pc.Texture#setSource} and {@link pc.Texture#unlock}. However, it still needs to
        * be called explicitly in the case where an HTMLVideoElement is set as the source of the texture.  Normally,
        * this is done once every frame before video textured geometry is rendered.
        */
       upload(): void;

   }

   /**
    * @name pc.VertexBuffer
    * @class A vertex buffer is the mechanism via which the application specifies vertex
    * data to the graphics hardware.
    * @description Creates a new vertex buffer object.
    * @param {pc.GraphicsDevice} graphicsDevice The graphics device used to manage this vertex buffer.
    * @param {pc.VertexFormat} format The vertex format of this vertex buffer.
    * @param {Number} numVertices The number of vertices that this vertex buffer will hold.
    * @param {Number} [usage] The usage type of the vertex buffer (see pc.BUFFER_*).
    */
   class VertexBuffer {
       /**
        * @name pc.VertexBuffer
        * @class A vertex buffer is the mechanism via which the application specifies vertex
        * data to the graphics hardware.
        * @description Creates a new vertex buffer object.
        * @param {pc.GraphicsDevice} graphicsDevice The graphics device used to manage this vertex buffer.
        * @param {pc.VertexFormat} format The vertex format of this vertex buffer.
        * @param {Number} numVertices The number of vertices that this vertex buffer will hold.
        * @param {Number} [usage] The usage type of the vertex buffer (see pc.BUFFER_*).
        */
       constructor(graphicsDevice: pc.GraphicsDevice, format: pc.VertexFormat, numVertices: Number, usage?: Number);

       /**
        * @function
        * @name pc.VertexBuffer#destroy
        * @description Frees resources associated with this vertex buffer.
        */
       destroy(): void;

       /**
        * @function
        * @name pc.VertexBuffer#getFormat
        * @description Returns the data format of the specified vertex buffer.
        * @returns {pc.VertexFormat} The data format of the specified vertex buffer.
        */
       getFormat(): pc.VertexFormat;

       /**
        * @function
        * @name pc.VertexBuffer#getUsage
        * @description Returns the usage type of the specified vertex buffer. This indicates
        * whether the buffer can be modified once and used many times (pc.BUFFER_STATIC),
        * modified repeatedly and used many times (pc.BUFFER_DYNAMIC) or modified once
        * and used at most a few times (pc.BUFFER_STREAM).
        * @returns {Number} The usage type of the vertex buffer (see pc.BUFFER_*).
        */
       getUsage(): Number;

       /**
        * @function
        * @name pc.VertexBuffer#getNumVertices
        * @description Returns the number of vertices stored in the specified vertex buffer.
        * @returns {Number} The number of vertices stored in the vertex buffer.
        */
       getNumVertices(): Number;

       /**
        * @function
        * @name pc.VertexBuffer#lock
        * @description Returns a mapped memory block representing the content of the vertex buffer.
        * @returns {ArrayBuffer} An array containing the byte data stored in the vertex buffer.
        */
       lock(): ArrayBuffer;

       /**
        * @function
        * @name pc.VertexBuffer#unlock
        * @description Notifies the graphics engine that the client side copy of the vertex buffer's
        * memory can be returned to the control of the graphics driver.
        */
       unlock(): void;

   }

   /**
    * @name pc.VertexFormat
    * @class A vertex format is a descriptor that defines the layout of vertex data inside
    * a {@link pc.VertexBuffer}.
    * @description Returns a new pc.VertexFormat object.
    * @param {pc.GraphicsDevice} graphicsDevice The graphics device used to manage this vertex format.
    * @param {Object[]} description An array of vertex attribute descriptions.
    * @param {Number} description[].semantic The meaning of the vertex element. This is used to link
    * the vertex data to a shader input. Can be:
    * <ul>
    *     <li>pc.SEMANTIC_POSITION</li>
    *     <li>pc.SEMANTIC_NORMAL</li>
    *     <li>pc.SEMANTIC_TANGENT</li>
    *     <li>pc.SEMANTIC_BLENDWEIGHT</li>
    *     <li>pc.SEMANTIC_BLENDINDICES</li>
    *     <li>pc.SEMANTIC_COLOR</li>
    *     <li>pc.SEMANTIC_TEXCOORD0</li>
    *     <li>pc.SEMANTIC_TEXCOORD1</li>
    *     <li>pc.SEMANTIC_TEXCOORD2</li>
    *     <li>pc.SEMANTIC_TEXCOORD3</li>
    *     <li>pc.SEMANTIC_TEXCOORD4</li>
    *     <li>pc.SEMANTIC_TEXCOORD5</li>
    *     <li>pc.SEMANTIC_TEXCOORD6</li>
    *     <li>pc.SEMANTIC_TEXCOORD7</li>
    * </ul>
    * If vertex data has a meaning other that one of those listed above, use the user-defined
    * semantics: pc.SEMANTIC_ATTR0 to pc.SEMANTIC_ATTR15.
    * @param {Number} description[].components The number of components of the vertex attribute.
    * Can be 1, 2, 3 or 4.
    * @param {Number} description[].type The data type of the attribute. Can be:
    * <ul>
    *     <li>pc.ELEMENTTYPE_INT8</li>
    *     <li>pc.ELEMENTTYPE_UINT8</li>
    *     <li>pc.ELEMENTTYPE_INT16</li>
    *     <li>pc.ELEMENTTYPE_UINT16</li>
    *     <li>pc.ELEMENTTYPE_INT32</li>
    *     <li>pc.ELEMENTTYPE_UINT32</li>
    *     <li>pc.ELEMENTTYPE_FLOAT32</li>
    * </ul>
    * @param {Boolean} description[].normalize If true, vertex attribute data will be mapped from a
    * 0 to 255 range down to 0 to 1 when fed to a shader. If false, vertex attribute data is left
    * unchanged. If this property is unspecified, false is assumed.
    * @example
    * // Specify 3-component positions (x, y, z)
    * var vertexFormat = new pc.VertexFormat(graphicsDevice, [
    *     { semantic: pc.SEMANTIC_POSITION, components: 3, type: pc.ELEMENTTYPE_FLOAT32 },
    * ]);
    * @example
    * // Specify 2-component positions (x, y), a texture coordinate (u, v) and a vertex color (r, g, b, a)
    * var vertexFormat = new pc.VertexFormat(graphicsDevice, [
    *     { semantic: pc.SEMANTIC_POSITION, components: 2, type: pc.ELEMENTTYPE_FLOAT32 },
    *     { semantic: pc.SEMANTIC_TEXCOORD0, components: 2, type: pc.ELEMENTTYPE_FLOAT32 },
    *     { semantic: pc.SEMANTIC_COLOR, components: 4, type: pc.ELEMENTTYPE_UINT8, normalize: true }
    * ]);
    * @author Will Eastcott
    */
   class VertexFormat {
       /**
        * @name pc.VertexFormat
        * @class A vertex format is a descriptor that defines the layout of vertex data inside
        * a {@link pc.VertexBuffer}.
        * @description Returns a new pc.VertexFormat object.
        * @param {pc.GraphicsDevice} graphicsDevice The graphics device used to manage this vertex format.
        * @param {Object[]} description An array of vertex attribute descriptions.
        * @param {Number} description[].semantic The meaning of the vertex element. This is used to link
        * the vertex data to a shader input. Can be:
        * <ul>
        *     <li>pc.SEMANTIC_POSITION</li>
        *     <li>pc.SEMANTIC_NORMAL</li>
        *     <li>pc.SEMANTIC_TANGENT</li>
        *     <li>pc.SEMANTIC_BLENDWEIGHT</li>
        *     <li>pc.SEMANTIC_BLENDINDICES</li>
        *     <li>pc.SEMANTIC_COLOR</li>
        *     <li>pc.SEMANTIC_TEXCOORD0</li>
        *     <li>pc.SEMANTIC_TEXCOORD1</li>
        *     <li>pc.SEMANTIC_TEXCOORD2</li>
        *     <li>pc.SEMANTIC_TEXCOORD3</li>
        *     <li>pc.SEMANTIC_TEXCOORD4</li>
        *     <li>pc.SEMANTIC_TEXCOORD5</li>
        *     <li>pc.SEMANTIC_TEXCOORD6</li>
        *     <li>pc.SEMANTIC_TEXCOORD7</li>
        * </ul>
        * If vertex data has a meaning other that one of those listed above, use the user-defined
        * semantics: pc.SEMANTIC_ATTR0 to pc.SEMANTIC_ATTR15.
        * @param {Number} description[].components The number of components of the vertex attribute.
        * Can be 1, 2, 3 or 4.
        * @param {Number} description[].type The data type of the attribute. Can be:
        * <ul>
        *     <li>pc.ELEMENTTYPE_INT8</li>
        *     <li>pc.ELEMENTTYPE_UINT8</li>
        *     <li>pc.ELEMENTTYPE_INT16</li>
        *     <li>pc.ELEMENTTYPE_UINT16</li>
        *     <li>pc.ELEMENTTYPE_INT32</li>
        *     <li>pc.ELEMENTTYPE_UINT32</li>
        *     <li>pc.ELEMENTTYPE_FLOAT32</li>
        * </ul>
        * @param {Boolean} description[].normalize If true, vertex attribute data will be mapped from a
        * 0 to 255 range down to 0 to 1 when fed to a shader. If false, vertex attribute data is left
        * unchanged. If this property is unspecified, false is assumed.
        * @example
        * // Specify 3-component positions (x, y, z)
        * var vertexFormat = new pc.VertexFormat(graphicsDevice, [
        *     { semantic: pc.SEMANTIC_POSITION, components: 3, type: pc.ELEMENTTYPE_FLOAT32 },
        * ]);
        * @example
        * // Specify 2-component positions (x, y), a texture coordinate (u, v) and a vertex color (r, g, b, a)
        * var vertexFormat = new pc.VertexFormat(graphicsDevice, [
        *     { semantic: pc.SEMANTIC_POSITION, components: 2, type: pc.ELEMENTTYPE_FLOAT32 },
        *     { semantic: pc.SEMANTIC_TEXCOORD0, components: 2, type: pc.ELEMENTTYPE_FLOAT32 },
        *     { semantic: pc.SEMANTIC_COLOR, components: 4, type: pc.ELEMENTTYPE_UINT8, normalize: true }
        * ]);
        * @author Will Eastcott
        */
       constructor(graphicsDevice: pc.GraphicsDevice, description: Object[]);

   }

   /**
    * @name pc.VertexIterator
    * @class A vertex iterator simplifies the process of writing vertex data to a vertex buffer.
    * @description Returns a new pc.VertexIterator object.
    * @param {pc.VertexBuffer} vertexBuffer The vertex buffer to be iterated.
    * @author Will Eastcott
    */
   class VertexIterator {
       /**
        * @name pc.VertexIterator
        * @class A vertex iterator simplifies the process of writing vertex data to a vertex buffer.
        * @description Returns a new pc.VertexIterator object.
        * @param {pc.VertexBuffer} vertexBuffer The vertex buffer to be iterated.
        * @author Will Eastcott
        */
       constructor(vertexBuffer: pc.VertexBuffer);

       /**
        * @function
        * @name pc.VertexIterator#next
        * @description Moves the vertex iterator on to the next vertex.
        * @example
        * var iterator = new pc.VertexIterator(vertexBuffer);
        * iterator.element[pc.SEMANTIC_POSTIION].set(-0.9, -0.9, 0.0);
        * iterator.element[pc.SEMANTIC_COLOR].set(255, 0, 0, 255);
        * iterator.next();
        * iterator.element[pc.SEMANTIC_POSTIION].set(0.9, -0.9, 0.0);
        * iterator.element[pc.SEMANTIC_COLOR].set(0, 255, 0, 255);
        * iterator.next();
        * iterator.element[pc.SEMANTIC_POSTIION].set(0.0, 0.9, 0.0);
        * iterator.element[pc.SEMANTIC_COLOR].set(0, 0, 255, 255);
        * iterator.end();
        */
       next(): void;

       /**
        * @function
        * @name pc.VertexIterator#end
        * @description Notifies the vertex buffer being iterated that writes are complete. Internally
        * the vertex buffer is unlocked and vertex data is uploaded to video memory.
        * @example
        * var iterator = new pc.VertexIterator(vertexBuffer);
        * iterator.element[pc.SEMANTIC_POSTIION].set(-0.9, -0.9, 0.0);
        * iterator.element[pc.SEMANTIC_COLOR].set(255, 0, 0, 255);
        * iterator.next();
        * iterator.element[pc.SEMANTIC_POSTIION].set(0.9, -0.9, 0.0);
        * iterator.element[pc.SEMANTIC_COLOR].set(0, 255, 0, 255);
        * iterator.next();
        * iterator.element[pc.SEMANTIC_POSTIION].set(0.0, 0.9, 0.0);
        * iterator.element[pc.SEMANTIC_COLOR].set(0, 0, 255, 255);
        * iterator.end();
        */
       end(): void;

   }

   /**
    * @name pc.Controller
    * @class A general input handler which handles both mouse and keyboard input assigned to named actions.
    * This allows you to define input handlers separately to defining keyboard/mouse configurations.
    * @description Create a new instance of a Controller.
    * @param {Element} [element] Element to attach Controller to.
    * @param {Object} [options] Optional arguments.
    * @param {pc.Keyboard} [options.keyboard] A Keyboard object to use.
    * @param {pc.Mouse} [options.mouse] A Mouse object to use.
    * @param {pc.GamePads} [options.gamepads] A Gamepads object to use.
    * @example
    * var c = new pc.Controller(document)
    *
    * // Register the "fire" action and assign it to both the Enter key and the Spacebar.
    * c.registerKeys("fire", [pc.KEY_ENTER, pc.KEY_SPACE]);
    */
   class Controller {
       /**
        * @name pc.Controller
        * @class A general input handler which handles both mouse and keyboard input assigned to named actions.
        * This allows you to define input handlers separately to defining keyboard/mouse configurations.
        * @description Create a new instance of a Controller.
        * @param {Element} [element] Element to attach Controller to.
        * @param {Object} [options] Optional arguments.
        * @param {pc.Keyboard} [options.keyboard] A Keyboard object to use.
        * @param {pc.Mouse} [options.mouse] A Mouse object to use.
        * @param {pc.GamePads} [options.gamepads] A Gamepads object to use.
        * @example
        * var c = new pc.Controller(document)
        *
        * // Register the "fire" action and assign it to both the Enter key and the Spacebar.
        * c.registerKeys("fire", [pc.KEY_ENTER, pc.KEY_SPACE]);
        */
       constructor(element?: Element, options?: { keyboard: pc.Keyboard, mouse: pc.Mouse, gamepads: pc.GamePads });

       /**
        * @function
        * @name pc.Controller#attach
        * @description Attach Controller to a Element, this is required before you can monitor for key/mouse inputs.
        * @param {Element} element The element to attach mouse and keyboard event handler too
        */
       attach(element: Element): void;

       /**
        * @function
        * @name pc.Controller#detach
        * @description Detach Controller from an Element, this should be done before the Controller is destroyed
        */
       detach(): void;

       /**
        * @function
        * @name pc.Controller#disableContextMenu
        * @description Disable the context menu usually activated with the right mouse button.
        */
       disableContextMenu(): void;

       /**
        * @function
        * @name pc.Controller#enableContextMenu
        * @description Enable the context menu usually activated with the right mouse button. This is enabled by default.
        */
       enableContextMenu(): void;

       /**
        * @function
        * @name pc.Controller#update
        * @description Update the Keyboard and Mouse handlers
        * @param {Object} dt The time since the last frame
        */
       update(dt: Object): void;

       /**
        * @function
        * @name pc.Controller#registerKeys
        * @description Create or update a action which is enabled when the supplied keys are pressed.
        * @param {String} action The name of the action
        * @param {Number[]} keys A list of keycodes
        */
       registerKeys(action: String, keys: Number[]): void;

       /**
        * @function
        * @name pc.Controller#registerMouse
        * @description Create or update an action which is enabled when the supplied mouse button is pressed
        * @param {String} action The name of the action
        * @param {Number} button The mouse button
        */
       registerMouse(action: String, button: Number): void;

       /**
        * @function
        * @name pc.Controller#registerPadButton
        * @description Create or update an action which is enabled when the gamepad button is pressed
        * @param {String} action The name of the action
        * @param {Number} pad The index of the pad to register (use pc.PAD_1, etc)
        * @param {Number} button The pad button
        */
       registerPadButton(action: String, pad: Number, button: Number): void;

       /**
        * @function
        * @name pc.Controller#registerAxis
        * @param {Object} [options]
        * @param {Object} [options.pad] The index of the game pad to register for (use pc.PAD_1, etc)
        */
       registerAxis(options?: { pad: Object }): void;

       /**
        * @function
        * @name pc.Controller#isPressed
        * @description Return true if the current action is enabled
        * @param {String} action The name of the action
        */
       isPressed(action: String): void;

       /**
        * @function
        * @name pc.Controller#wasPressed
        * @description Returns true if the action was enabled this since the last update
        * @param {String} action The name of the action
        * @returns {Boolean} True if the action was enabled this since the last update
        */
       wasPressed(action: String): Boolean;

   }

   /**
    * @name pc.GamePads
    * @class Input handler for accessing GamePad input
    */
   class GamePads {
       /**
        * @name pc.GamePads
        * @class Input handler for accessing GamePad input
        */
       constructor();

       /**
        * @function
        * @name pc.GamePads#update
        * @description Update the current and previous state of the gamepads. This must be called every frame for wasPressed()
        * to work
        */
       update(): void;

       /**
        * @function
        * @name pc.GamePads#poll
        * @description Poll for the latest data from the gamepad API.
        * @returns {Object[]} An array of gamepads and mappings for the model of gamepad that is attached
        * @example
        *   var gamepads = new pc.GamePads();
        *   var pads = gamepads.poll();
        *   // pads[0] = { map: <map>, pad: <pad> }
        */
       poll(): Object[];

       /**
        * @function
        * @name pc.GamePads#isPressed
        * @description Returns true if the button on the pad requested is pressed
        * @param {Number} index The index of the pad to check, use constants pc.PAD_1, pc.PAD_2, etc
        * @param {Number} button The button to test, use constants pc.PAD_FACE_1, etc
        * @returns {Boolean} True if the button is pressed
        */
       isPressed(index: Number, button: Number): Boolean;

       /**
        * @function
        * @name pc.GamePads#wasPressed
        * @description Returns true if the button was pressed since the last frame
        * @param {Number} index The index of the pad to check, use constants pc.PAD_1, pc.PAD_2, etc
        * @param {Number} button The button to test, use constants pc.PAD_FACE_1, etc
        * @returns {Boolean} True if the button was pressed since the last frame
        */
       wasPressed(index: Number, button: Number): Boolean;

       /**
        * @function
        * @name pc.GamePads#getAxis
        * @description Get the value of one of the analogue axes of the pad
        * @param {Number} index The index of the pad to check, use constants pc.PAD_1, pc.PAD_2, etc
        * @param {Number} axes The axes to get the value of, use constants pc.PAD_L_STICK_X, etc
        * @returns {Number} The value of the axis between -1 and 1.
        */
       getAxis(index: Number, axes: Number): Number;

   }

   /**
    * @enum pc.EVENT
    * @name pc.EVENT_KEYDOWN
    * @description Name of event fired when a key is pressed
    */
   enum EVENT_KEYDOWN {
   }

   /**
    * @enum pc.EVENT
    * @name pc.EVENT_KEYUP
    * @description Name of event fired when a key is released
    */
   enum EVENT_KEYUP {
   }

   /**
    * @enum pc.EVENT
    * @name pc.EVENT_MOUSEDOWN
    * @description Name of event fired when a mouse button is pressed
    */
   enum EVENT_MOUSEDOWN {
   }

   /**
    * @enum pc.EVENT
    * @name pc.EVENT_MOUSEMOVE
    * @description Name of event fired when the mouse is moved
    */
   enum EVENT_MOUSEMOVE {
   }

   /**
    * @enum pc.EVENT
    * @name pc.EVENT_MOUSEUP
    * @description Name of event fired when a mouse button is released
    */
   enum EVENT_MOUSEUP {
   }

   /**
    * @enum pc.EVENT
    * @name pc.EVENT_MOUSEWHEEL
    * @description Name of event fired when the mouse wheel is rotated
    */
   enum EVENT_MOUSEWHEEL {
   }

   /**
    * @enum pc.EVENT
    * @name pc.EVENT_TOUCHSTART
    * @description Name of event fired when a new touch occurs. For example, a finger is placed on the device.
    */
   enum EVENT_TOUCHSTART {
   }

   /**
    * @enum pc.EVENT
    * @name pc.EVENT_TOUCHEND
    * @description Name of event fired when touch ends. For example, a finger is lifted off the device.
    */
   enum EVENT_TOUCHEND {
   }

   /**
    * @enum pc.EVENT
    * @name pc.EVENT_TOUCHMOVE
    * @description Name of event fired when a touch moves.
    */
   enum EVENT_TOUCHMOVE {
   }

   /**
    * @enum pc.EVENT
    * @name pc.EVENT_TOUCHCANCEL
    * @description Name of event fired when a touch point is interupted in some way.
    * The exact reasons for cancelling a touch can vary from device to device.
    * For example, a modal alert pops up during the interaction; the touch point leaves the document area;
    * or there are more touch points than the device supports, in which case the earliest touch point is canceled.
    */
   enum EVENT_TOUCHCANCEL {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_BACKSPACE
    */
   enum KEY_BACKSPACE {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_TAB
    */
   enum KEY_TAB {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_RETURN
    */
   enum KEY_RETURN {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_ENTER
    */
   enum KEY_ENTER {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_SHIFT
    */
   enum KEY_SHIFT {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_CONTROL
    */
   enum KEY_CONTROL {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_ALT
    */
   enum KEY_ALT {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_PAUSE
    */
   enum KEY_PAUSE {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_CAPS_LOCK
    */
   enum KEY_CAPS_LOCK {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_ESCAPE
    */
   enum KEY_ESCAPE {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_SPACE
    */
   enum KEY_SPACE {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_PAGE_UP
    */
   enum KEY_PAGE_UP {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_PAGE_DOWN
    */
   enum KEY_PAGE_DOWN {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_END
    */
   enum KEY_END {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_HOME
    */
   enum KEY_HOME {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_LEFT
    */
   enum KEY_LEFT {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_UP
    */
   enum KEY_UP {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_RIGHT
    */
   enum KEY_RIGHT {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_DOWN
    */
   enum KEY_DOWN {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_PRINT_SCREEN
    */
   enum KEY_PRINT_SCREEN {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_INSERT
    */
   enum KEY_INSERT {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_DELETE
    */
   enum KEY_DELETE {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_0
    */
   enum KEY_0 {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_1
    */
   enum KEY_1 {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_2
    */
   enum KEY_2 {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_3
    */
   enum KEY_3 {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_4
    */
   enum KEY_4 {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_5
    */
   enum KEY_5 {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_6
    */
   enum KEY_6 {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_7
    */
   enum KEY_7 {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_8
    */
   enum KEY_8 {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_9
    */
   enum KEY_9 {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_SEMICOLON
    */
   enum KEY_SEMICOLON {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_EQUAL
    */
   enum KEY_EQUAL {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_A
    */
   enum KEY_A {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_B
    */
   enum KEY_B {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_C
    */
   enum KEY_C {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_D
    */
   enum KEY_D {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_E
    */
   enum KEY_E {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_F
    */
   enum KEY_F {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_G
    */
   enum KEY_G {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_H
    */
   enum KEY_H {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_I
    */
   enum KEY_I {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_J
    */
   enum KEY_J {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_K
    */
   enum KEY_K {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_L
    */
   enum KEY_L {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_M
    */
   enum KEY_M {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_N
    */
   enum KEY_N {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_O
    */
   enum KEY_O {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_P
    */
   enum KEY_P {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_Q
    */
   enum KEY_Q {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_R
    */
   enum KEY_R {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_S
    */
   enum KEY_S {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_T
    */
   enum KEY_T {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_U
    */
   enum KEY_U {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_V
    */
   enum KEY_V {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_W
    */
   enum KEY_W {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_X
    */
   enum KEY_X {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_Y
    */
   enum KEY_Y {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_Z
    */
   enum KEY_Z {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_WINDOWS
    */
   enum KEY_WINDOWS {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_CONTEXT_MENU
    */
   enum KEY_CONTEXT_MENU {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_NUMPAD_0
    */
   enum KEY_NUMPAD_0 {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_NUMPAD_1
    */
   enum KEY_NUMPAD_1 {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_NUMPAD_2
    */
   enum KEY_NUMPAD_2 {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_NUMPAD_3
    */
   enum KEY_NUMPAD_3 {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_NUMPAD_4
    */
   enum KEY_NUMPAD_4 {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_NUMPAD_5
    */
   enum KEY_NUMPAD_5 {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_NUMPAD_6
    */
   enum KEY_NUMPAD_6 {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_NUMPAD_7
    */
   enum KEY_NUMPAD_7 {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_NUMPAD_8
    */
   enum KEY_NUMPAD_8 {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_NUMPAD_9
    */
   enum KEY_NUMPAD_9 {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_MULTIPLY
    */
   enum KEY_MULTIPLY {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_ADD
    */
   enum KEY_ADD {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_SEPARATOR
    */
   enum KEY_SEPARATOR {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_SUBTRACT
    */
   enum KEY_SUBTRACT {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_DECIMAL
    */
   enum KEY_DECIMAL {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_DIVIDE
    */
   enum KEY_DIVIDE {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_F1
    */
   enum KEY_F1 {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_F2
    */
   enum KEY_F2 {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_F3
    */
   enum KEY_F3 {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_F4
    */
   enum KEY_F4 {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_F5
    */
   enum KEY_F5 {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_F6
    */
   enum KEY_F6 {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_F7
    */
   enum KEY_F7 {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_F8
    */
   enum KEY_F8 {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_F9
    */
   enum KEY_F9 {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_F10
    */
   enum KEY_F10 {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_F11
    */
   enum KEY_F11 {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_F12
    */
   enum KEY_F12 {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_COMMA
    */
   enum KEY_COMMA {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_PERIOD
    */
   enum KEY_PERIOD {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_SLASH
    */
   enum KEY_SLASH {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_OPEN_BRACKET
    */
   enum KEY_OPEN_BRACKET {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_BACK_SLASH
    */
   enum KEY_BACK_SLASH {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_CLOSE_BRACKET
    */
   enum KEY_CLOSE_BRACKET {
   }

   /**
    * @enum pc.KEY
    * @name pc.KEY_META
    */
   enum KEY_META {
   }

   /**
    * @enum pc.MOUSEBUTTON
    * @name pc.MOUSEBUTTON_NONE
    * @description No mouse buttons pressed
    */
   enum MOUSEBUTTON_NONE {
   }

   /**
    * @enum pc.MOUSEBUTTON
    * @name pc.MOUSEBUTTON_LEFT
    * @description The left mouse button
    */
   enum MOUSEBUTTON_LEFT {
   }

   /**
    * @enum pc.MOUSEBUTTON
    * @name pc.MOUSEBUTTON_MIDDLE
    * @description The middle mouse button
    */
   enum MOUSEBUTTON_MIDDLE {
   }

   /**
    * @enum pc.MOUSEBUTTON
    * @name pc.MOUSEBUTTON_RIGHT
    * @description The right mouse button
    */
   enum MOUSEBUTTON_RIGHT {
   }

   /**
    * @name pc.KeyboardEvent
    * @class The KeyboardEvent is passed into all event callbacks from the {@link pc.Keyboard}. It corresponds to a key press or release.
    * @description Create a new KeyboardEvent
    * @param {pc.Keyboard} keyboard The keyboard object which is firing the event.
    * @param {pc.KeyboardEvent} event The original browser event that was fired.
    * @property {Number} key The keyCode of the key that has changed. See the pc.KEY_* constants.
    * @property {Element} element The element that fired the keyboard event.
    * @property {KeyboardEvent} event The original browser event which was fired.
    * @example
    * var onKeyDown = function (e) {
    *     if (e.key === pc.KEY_SPACE) {
    *         // space key pressed
    *     }
    *     e.event.preventDefault(); // Use original browser event to prevent browser action.
    * };
    * app.keyboard.on("keydown", onKeyDown, this);
    */
   class KeyboardEvent {
       /**
        * @name pc.KeyboardEvent
        * @class The KeyboardEvent is passed into all event callbacks from the {@link pc.Keyboard}. It corresponds to a key press or release.
        * @description Create a new KeyboardEvent
        * @param {pc.Keyboard} keyboard The keyboard object which is firing the event.
        * @param {pc.KeyboardEvent} event The original browser event that was fired.
        * @property {Number} key The keyCode of the key that has changed. See the pc.KEY_* constants.
        * @property {Element} element The element that fired the keyboard event.
        * @property {KeyboardEvent} event The original browser event which was fired.
        * @example
        * var onKeyDown = function (e) {
        *     if (e.key === pc.KEY_SPACE) {
        *         // space key pressed
        *     }
        *     e.event.preventDefault(); // Use original browser event to prevent browser action.
        * };
        * app.keyboard.on("keydown", onKeyDown, this);
        */
       constructor(keyboard: pc.Keyboard, event: pc.KeyboardEvent);

   }

   /**
    * @private
    * @function
    * @name pc.toKeyCode
    * @description Convert a string or keycode to a keycode
    * @param {String | Number} s
    */
   function toKeyCode(s: (String|Number)): void;

   /**
    * @name pc.Keyboard
    * @class A Keyboard device bound to an Element. Allows you to detect the state of the key presses.
    * Note, Keyboard object must be attached to an Element before it can detect any key presses.
    * @description Create a new Keyboard object
    * @param {Element} [element] Element to attach Keyboard to. Note that elements like &lt;div&gt; can't
    * accept focus by default. To use keyboard events on an element like this it must have a value of 'tabindex' e.g. tabindex="0". For more details: <a href="http://www.w3.org/WAI/GL/WCAG20/WD-WCAG20-TECHS/SCR29.html">http://www.w3.org/WAI/GL/WCAG20/WD-WCAG20-TECHS/SCR29.html</a>
    * @param {Object} [options]
    * @param {Boolean} [options.preventDefault] Call preventDefault() in key event handlers. This stops the default action of the event occuring. e.g. Ctrl+T will not open a new browser tab
    * @param {Boolean} [options.stopPropagation] Call stopPropagation() in key event handlers. This stops the event bubbling up the DOM so no parent handlers will be notified of the event
    * @example
    * var keyboard = new pc.Keyboard(window); // attach keyboard listeners to the window
    */
   class Keyboard {
       /**
        * @name pc.Keyboard
        * @class A Keyboard device bound to an Element. Allows you to detect the state of the key presses.
        * Note, Keyboard object must be attached to an Element before it can detect any key presses.
        * @description Create a new Keyboard object
        * @param {Element} [element] Element to attach Keyboard to. Note that elements like &lt;div&gt; can't
        * accept focus by default. To use keyboard events on an element like this it must have a value of 'tabindex' e.g. tabindex="0". For more details: <a href="http://www.w3.org/WAI/GL/WCAG20/WD-WCAG20-TECHS/SCR29.html">http://www.w3.org/WAI/GL/WCAG20/WD-WCAG20-TECHS/SCR29.html</a>
        * @param {Object} [options]
        * @param {Boolean} [options.preventDefault] Call preventDefault() in key event handlers. This stops the default action of the event occuring. e.g. Ctrl+T will not open a new browser tab
        * @param {Boolean} [options.stopPropagation] Call stopPropagation() in key event handlers. This stops the event bubbling up the DOM so no parent handlers will be notified of the event
        * @example
        * var keyboard = new pc.Keyboard(window); // attach keyboard listeners to the window
        */
       constructor(element?: Element, options?: { preventDefault: Boolean, stopPropagation: Boolean });

       /**
        * @function
        * @name pc.Keyboard#attach
        * @description Attach the keyboard event handlers to an Element
        * @param {Element} element The element to listen for keyboard events on.
        */
       attach(element: Element): void;

       /**
        * @function
        * @name pc.Keyboard#detach
        * @description Detach the keyboard event handlers from the element it is attached to.
        */
       detach(): void;

       /**
        * @private
        * @function
        * @name pc.Keyboard#toKeyIdentifier
        * @description Convert a key code into a key identifier
        * @param {Number} keyCode
        */
       private toKeyIdentifier(keyCode: Number): void;

       /**
        * @private
        * @function
        * @name pc.Keyboard#update
        * @description Called once per frame to update internal state.
        */
       private update(): void;

       /**
        * @function
        * @name pc.Keyboard#isPressed
        * @description Return true if the key is currently down.
        * @param {Number} key The keyCode of the key to test. See the pc.KEY_* constants.
        * @return {Boolean} True if the key was pressed, false if not.
        */
       isPressed(key: Number): Boolean;

       /**
        * @function
        * @name pc.Keyboard#wasPressed
        * @description Returns true if the key was pressed since the last update.
        * @param {Number} key The keyCode of the key to test. See the pc.KEY_* constants.
        * @return {Boolean} true if the key was pressed.
        */
       wasPressed(key: Number): Boolean;

       /**
        * @function
        * @name pc.Keyboard#wasReleased
        * @description Returns true if the key was released since the last update.
        * @param {Number} key The keyCode of the key to test. See the pc.KEY_* constants.
        * @return {Boolean} true if the key was pressed.
        */
       wasReleased(key: Number): Boolean;

   }

   /**
    * @name pc.MouseEvent
    * @class MouseEvent object that is passed to events 'mousemove', 'mouseup', 'mousedown' and 'mousewheel'.
    * @description Create an new MouseEvent
    * @param {pc.Mouse} mouse The Mouse device that is firing this event
    * @param {MouseEvent} event The original browser event that fired
    * @property {Number} x The x co-ordinate of the mouse pointer relative to the element pc.Mouse is attached to
    * @property {Number} y The y co-ordinate of the mouse pointer relative to the element pc.Mouse is attached to
    * @property {Number} dx The change in x co-ordinate since the last mouse event
    * @property {Number} dy The change in y co-ordinate since the last mouse event
    * @property {pc.MOUSEBUTTON} button The button
    * @property {Number} wheel A value representing the amount the mouse wheel has moved, only valid for {@link mousemove} events
    * @property {Element} element The element that the mouse was fired from
    * @property {Boolean} ctrlKey True if the ctrl key was pressed when this event was fired
    * @property {Boolean} shiftKey True if the shift key was pressed when this event was fired
    * @property {Boolean} altKey True if the alt key was pressed when this event was fired
    * @property {Boolean} metaKey True if the meta key was pressed when this event was fired
    * @property {MouseEvent} event The original browser event
    * @since 0.88.0
    */
   class MouseEvent {
       /**
        * @name pc.MouseEvent
        * @class MouseEvent object that is passed to events 'mousemove', 'mouseup', 'mousedown' and 'mousewheel'.
        * @description Create an new MouseEvent
        * @param {pc.Mouse} mouse The Mouse device that is firing this event
        * @param {MouseEvent} event The original browser event that fired
        * @property {Number} x The x co-ordinate of the mouse pointer relative to the element pc.Mouse is attached to
        * @property {Number} y The y co-ordinate of the mouse pointer relative to the element pc.Mouse is attached to
        * @property {Number} dx The change in x co-ordinate since the last mouse event
        * @property {Number} dy The change in y co-ordinate since the last mouse event
        * @property {pc.MOUSEBUTTON} button The button
        * @property {Number} wheel A value representing the amount the mouse wheel has moved, only valid for {@link mousemove} events
        * @property {Element} element The element that the mouse was fired from
        * @property {Boolean} ctrlKey True if the ctrl key was pressed when this event was fired
        * @property {Boolean} shiftKey True if the shift key was pressed when this event was fired
        * @property {Boolean} altKey True if the alt key was pressed when this event was fired
        * @property {Boolean} metaKey True if the meta key was pressed when this event was fired
        * @property {MouseEvent} event The original browser event
        * @since 0.88.0
        */
       constructor(mouse: pc.Mouse, event: MouseEvent);

   }

   /**
    * @name pc.Mouse
    * @class A Mouse Device, bound to a DOM Element.
    * @description Create a new Mouse device
    * @param {Element} [element] The Element that the mouse events are attached to
    */
   class Mouse {
       /**
        * @name pc.Mouse
        * @class A Mouse Device, bound to a DOM Element.
        * @description Create a new Mouse device
        * @param {Element} [element] The Element that the mouse events are attached to
        */
       constructor(element?: Element);

       /**
        * @function
        * @name pc.Mouse.isPointerLocked
        * @description Check if the mouse pointer has been locked, using {@link pc.Mouse#enabledPointerLock}
        * @returns {Boolean} True if locked
        */
       static isPointerLocked(): Boolean;

       /**
        * @function
        * @name pc.Mouse#attach
        * @description Attach mouse events to an Element.
        * @param {Element} element
        */
       attach(element: Element): void;

       /**
        * @function
        * @name pc.Mouse#detach
        * @description Remove mouse events from the element that it is attached to
        */
       detach(): void;

       /**
        * @function
        * @name pc.Mouse#disableContextMenu
        * @description Disable the context menu usually activated with right-click
        */
       disableContextMenu(): void;

       /**
        * @function
        * @name pc.Mouse#enableContextMenu
        * @description Enable the context menu usually activated with right-click. This option is active by default.
        */
       enableContextMenu(): void;

       /**
        * @function
        * @name pc.Mouse#enablePointerLock
        * @description Request that the browser hides the mouse cursor and locks the mouse to the element.
        * Allowing raw access to mouse movement input without risking the mouse exiting the element.
        * Notes: <br />
        * <ul>
        * <li>In some browsers this will only work when the browser is running in fullscreen mode. See {@link pc.Application#enableFullscreen}
        * <li>Enabling pointer lock can only be initiated by a user action e.g. in the event handler for a mouse or keyboard input.
        * </ul>
        * @param {Function} [success] Function called if the request for mouse lock is successful.
        * @param {Function} [error] Function called if the request for mouse lock is unsuccessful.
        */
       enablePointerLock(success?: (() => any), error?: (() => any)): void;

       /**
        * @function
        * @name pc.Mouse#disablePointerLock
        * @description Return control of the mouse cursor to the user
        * @param {Function} [success] Function called when the mouse lock is disabled
        */
       disablePointerLock(success?: (() => any)): void;

       /**
        * @function
        * @name pc.Mouse#update
        * @description Update method, should be called once per frame
        * @param {Object} dt
        */
       update(dt: Object): void;

       /**
        * @function
        * @name pc.Mouse#isPressed
        * @description Returns true if the mouse button is currently pressed
        * @param {pc.MOUSEBUTTON} button
        * @returns {Boolean} True if the mouse button is current pressed
        */
       isPressed(button: pc.MOUSEBUTTON): Boolean;

       /**
        * @function
        * @name pc.Mouse#wasPressed
        * @description Returns true if the mouse button was pressed this frame (since the last call to update).
        * @param {pc.MOUSEBUTTON} button
        * @returns {Boolean} True if the mouse button was pressed since the last update
        */
       wasPressed(button: pc.MOUSEBUTTON): Boolean;

       /**
        * @function
        * @name pc.Mouse#wasReleased
        * @description Returns true if the mouse button was released this frame (since the last call to update).
        * @param {pc.MOUSEBUTTON} button
        * @returns {Boolean} True if the mouse button was released since the last update
        */
       wasReleased(button: pc.MOUSEBUTTON): Boolean;

   }

   /**
    * @name pc.TouchEvent
    * @class A Event corresponding to touchstart, touchend, touchmove or touchcancel. TouchEvent wraps the standard
    * browser event and provides lists of {@link pc.Touch} objects.
    * @description Create a new TouchEvent from an existing browser event
    * @param {pc.TouchDevice} device The source device of the touch events
    * @param {TouchEvent} event The original browser TouchEvent
    * @property {Element} element The target Element that the event was fired from
    * @property {pc.Touch[]} touches A list of all touches currently in contact with the device
    * @property {pc.Touch[]} changedTouches A list of touches that have changed since the last event
    */
   class TouchEvent {
       /**
        * @name pc.TouchEvent
        * @class A Event corresponding to touchstart, touchend, touchmove or touchcancel. TouchEvent wraps the standard
        * browser event and provides lists of {@link pc.Touch} objects.
        * @description Create a new TouchEvent from an existing browser event
        * @param {pc.TouchDevice} device The source device of the touch events
        * @param {TouchEvent} event The original browser TouchEvent
        * @property {Element} element The target Element that the event was fired from
        * @property {pc.Touch[]} touches A list of all touches currently in contact with the device
        * @property {pc.Touch[]} changedTouches A list of touches that have changed since the last event
        */
       constructor(device: pc.TouchDevice, event: TouchEvent);

       /**
        * @function
        * @name pc.TouchEvent#getTouchById
        * @description Get an event from one of the touch lists by the id. It is useful to access
        * touches by their id so that you can be sure you are referencing the same touch.
        * @param {Number} id The identifier of the touch.
        * @param {pc.Touch[]} list An array of touches to search.
        * @returns {pc.Touch} The {@link pc.Touch} object or null.
        */
       getTouchById(id: Number, list: pc.Touch[]): pc.Touch;

   }

   /**
    * @name pc.Touch
    * @class A instance of a single point touch on a {@link pc.TouchDevice}
    * @description Create a new Touch object from the browser Touch
    * @param {Touch} touch The browser Touch object
    * @property {Number} id The identifier of the touch
    * @property {Number} x The x co-ordinate relative to the element that the TouchDevice is attached to
    * @property {Number} y The y co-ordinate relative to the element that the TouchDevice is attached to
    * @property {Element} target The target element of the touch event
    * @property {Touch} touch The original browser Touch object
    */
   class Touch {
       /**
        * @name pc.Touch
        * @class A instance of a single point touch on a {@link pc.TouchDevice}
        * @description Create a new Touch object from the browser Touch
        * @param {Touch} touch The browser Touch object
        * @property {Number} id The identifier of the touch
        * @property {Number} x The x co-ordinate relative to the element that the TouchDevice is attached to
        * @property {Number} y The y co-ordinate relative to the element that the TouchDevice is attached to
        * @property {Element} target The target element of the touch event
        * @property {Touch} touch The original browser Touch object
        */
       constructor(touch: Touch);

   }

   /**
    * @name pc.TouchDevice
    * @class Attach a TouchDevice to an element and it will receive and fire events when the element is touched.
    * See also {@link pc.Touch} and {@link pc.TouchEvent}
    * @description Create a new touch device and attach it to an element
    * @param {Element} element The element to attach listen for events on
    */
   class TouchDevice {
       /**
        * @name pc.TouchDevice
        * @class Attach a TouchDevice to an element and it will receive and fire events when the element is touched.
        * See also {@link pc.Touch} and {@link pc.TouchEvent}
        * @description Create a new touch device and attach it to an element
        * @param {Element} element The element to attach listen for events on
        */
       constructor(element: Element);

       /**
        * @function
        * @name pc.TouchDevice#attach
        * @description Attach a device to an element in the DOM.
        * If the device is already attached to an element this method will detach it first
        * @param {Element} element The element to attach to
        */
       attach(element: Element): void;

       /**
        * @function
        * @name pc.TouchDevice#detach
        * @description Detach a device from the element it is attached to
        */
       detach(): void;

   }

   /**
    * @name pc.getTouchTargetCoords
    * @description Similiar to {@link pc.getTargetCoords} for the MouseEvents.
    * This function takes a browser Touch object and returns the co-ordinates of the
    * touch relative to the target element.
    * @param {Touch} touch The browser Touch object
    * @returns {Object} The co-ordinates of the touch relative to the touch.target element. In the format {x, y}
    */
   var getTouchTargetCoords: any;

   /**
    * @name pc.CurveSet
    * @class A curve set is a collection of curves.
    * @description Creates a new curve set.
    * @param {Array} [curveKeys] An array of arrays of keys (pairs of numbers with
    * the time first and value second).
    */
   class CurveSet {
       /**
        * @name pc.CurveSet
        * @class A curve set is a collection of curves.
        * @description Creates a new curve set.
        * @param {Array} [curveKeys] An array of arrays of keys (pairs of numbers with
        * the time first and value second).
        */
       constructor(curveKeys?: Array);

       /**
        * @function
        * @name pc.CurveSet#get
        * @description Return a specific curve in the curve set.
        * @param {Number} index The index of the curve to return
        * @returns {pc.Curve} The curve at the specified index
        */
       get(index: Number): pc.Curve;

       /**
        * @function
        * @name pc.CurveSet#value
        * @description Returns the interpolated value of all curves in the curve
        * set at the specified time.
        * @param {Number} time The time at which to calculate the value
        * @param {Array} [result] The interpolated curve values at the specified time.
        * If this parameter is not supplied, the function allocates a new array internally
        * to return the result.
        * @return {Array} The interpolated curve values at the specified time
        */
       value(time: Number, result?: Array): Array;

       /**
        * @function
        * @name pc.CurveSet#clone
        * @description Returns a clone of the specified curve set object.
        * @returns {pc.CurveSet} A clone of the specified curve set
        */
       clone(): pc.CurveSet;

       /**
        * @readonly
        * @name pc.CurveSet#length
        * @type Number
        * @description The number of curves in the curve set.
        */
       length: Number;

       /**
        * @name pc.CurveSet#type
        * @type Number
        * @description The interpolation scheme applied to all curves in the curve set. Can be:
        * <ul>
        *     <li>pc.CURVE_LINEAR</li>
        *     <li>pc.CURVE_SMOOTHSTEP</li>
        *     <li>pc.CURVE_CATMULL</li>
        *     <li>pc.CURVE_CARDINAL</li>
        * </ul>
        */
       type: Number;

   }

   /**
    * @enum pc.CURVE
    * @name pc.CURVE_LINEAR
    * @description A linear interpolation scheme.
    */
   enum CURVE_LINEAR {
   }

   /**
    * @enum pc.CURVE
    * @name pc.CURVE_SMOOTHSTEP
    * @description A smooth step interpolation scheme.
    */
   enum CURVE_SMOOTHSTEP {
   }

   /**
    * @enum pc.CURVE
    * @name pc.CURVE_CATMULL
    * @description A Catmull-Rom spline interpolation scheme.
    */
   enum CURVE_CATMULL {
   }

   /**
    * @enum pc.CURVE
    * @name pc.CURVE_CARDINAL
    * @description A cardinal spline interpolation scheme.
    */
   enum CURVE_CARDINAL {
   }

   /**
    * @name pc.Curve
    * @class A curve is a collection of keys (time/value pairs). The shape of the
    * curve is defined by its type that specifies an interpolation scheme for the keys.
    * @description Creates a new curve.
    * @param {Number[]} [data] An array of keys (pairs of numbers with the time first and
    * value second)
    * @property {Number} length The number of keys in the curve. [read only]
    */
   class Curve {
       /**
        * @name pc.Curve
        * @class A curve is a collection of keys (time/value pairs). The shape of the
        * curve is defined by its type that specifies an interpolation scheme for the keys.
        * @description Creates a new curve.
        * @param {Number[]} [data] An array of keys (pairs of numbers with the time first and
        * value second)
        * @property {Number} length The number of keys in the curve. [read only]
        */
       constructor(data?: Number[]);

       /**
        * @function
        * @name pc.Curve#add
        * @description Add a new key to the curve.
        * @param {Number} time Time to add new key
        * @param {Number} value Value of new key
        * @returns {Number[]} [time, value] pair
        */
       add(time: Number, value: Number): Number[];

       /**
        * @function
        * @name pc.Curve#get
        * @description Return a specific key.
        * @param {Number} index The index of the key to return
        * @returns {Number[]} The key at the specified index
        */
       get(index: Number): Number[];

       /**
        * @function
        * @name pc.Curve#sort
        * @description Sort keys by time.
        */
       sort(): void;

       /**
        * @function
        * @name pc.Curve#value
        * @description Returns the interpolated value of the curve at specified time.
        * @param {Number} time The time at which to calculate the value
        * @return {Number} The interpolated value
        */
       value(time: Number): Number;

       /**
        * @function
        * @name pc.Curve#clone
        * @description Returns a clone of the specified curve object.
        * @returns {pc.Curve} A clone of the specified curve
        */
       clone(): pc.Curve;

   }

   /**
    * @name pc.Mat3
    * @class A 3x3 matrix.
    * @description Creates a new Mat3 object
    */
   class Mat3 {
       /**
        * @name pc.Mat3
        * @class A 3x3 matrix.
        * @description Creates a new Mat3 object
        */
       constructor();

       /**
        * @function
        * @name pc.Mat3#clone
        * @description Creates a duplicate of the specified matrix.
        * @returns {pc.Mat3} A duplicate matrix.
        * @example
        * var src = new pc.Mat3().translate(10, 20, 30);
        * var dst = new pc.Mat3();
        * dst.copy(src);
        * console.log("The two matrices are " + (src.equal(dst) ? "equal" : "different"));
        */
       clone(): pc.Mat3;

       /**
        * @function
        * @name pc.Mat3#copy
        * @description Copies the contents of a source 3x3 matrix to a destination 3x3 matrix.
        * @param {pc.Mat3} src A 3x3 matrix to be copied.
        * @returns {pc.Mat3} Self for chaining
        * @example
        * var src = new pc.Mat3().translate(10, 20, 30);
        * var dst = new pc.Mat3();
        * dst.copy(src);
        * console.log("The two matrices are " + (src.equal(dst) ? "equal" : "different"));
        */
       copy(src: pc.Mat3): pc.Mat3;

       /**
        * @function
        * @name pc.Mat3#equals
        * @param {pc.Mat3} rhs The other matrix.
        * @description Reports whether two matrices are equal.
        * @returns {Boolean} true if the matrices are equal and false otherwise.
        * @example
        * var a = new pc.Mat3().translate(10, 20, 30);
        * var b = new pc.Mat3();
        * console.log("The two matrices are " + (a.equals(b) ? "equal" : "different"));
        */
       equals(rhs: pc.Mat3): Boolean;

       /**
        * @function
        * @name pc.Mat3#isIdentity
        * @description Reports whether the specified matrix is the identity matrix.
        * @returns {Boolean} true if the matrix is identity and false otherwise.
        * @example
        * var m = new pc.Mat3();
        * console.log("The matrix is " + (m.isIdentity() ? "identity" : "not identity"));
        */
       isIdentity(): Boolean;

       /**
        * @function
        * @name pc.Mat3#setIdentity
        * @description Sets the matrix to the identity matrix.
        * @returns {pc.Mat3} Self for chaining.
        * @example
        * m.setIdentity();
        * console.log("The two matrices are " + (src.equal(dst) ? "equal" : "different"));
        */
       setIdentity(): pc.Mat3;

       /**
        * @function
        * @name pc.Mat3#toString
        * @description Converts the matrix to string form.
        * @returns {String} The matrix in string form.
        * @example
        * var m = new pc.Mat3();
        * // Should output '[1, 0, 0, 0, 1, 0, 0, 0, 1]'
        * console.log(m.toString());
        */
       toString(): String;

       /**
        * @function
        * @name pc.Mat3#transpose
        * @description Generates the transpose of the specified 3x3 matrix.
        * @returns {pc.Mat3} Self for chaining.
        * @example
        * var m = new pc.Mat3();
        *
        * // Transpose in place
        * m.transpose();
        */
       transpose(): pc.Mat3;

       /**
        * @field
        * @static
        * @readonly
        * @type pc.Mat3
        * @name pc.Mat3.IDENTITY
        * @description A constant matrix set to the identity.
        */
       static IDENTITY: pc.Mat3;

       /**
        * @field
        * @static
        * @readonly
        * @type pc.Mat3
        * @name pc.Mat3.ZERO
        * @description A constant matrix with all elements set to 0.
        */
       static ZERO: pc.Mat3;

   }

   /**
    * @name pc.Mat4
    * @class A 4x4 matrix.
    * @description Creates a new Mat4 object
    */
   class Mat4 {
       /**
        * @name pc.Mat4
        * @class A 4x4 matrix.
        * @description Creates a new Mat4 object
        */
       constructor();

       /**
        * @function
        * @name pc.Mat4#add2
        * @description Adds the specified 4x4 matrices together and stores the result in
        * the current instance.
        * @param {pc.Mat4} lhs The 4x4 matrix used as the first operand of the addition.
        * @param {pc.Mat4} rhs The 4x4 matrix used as the second operand of the addition.
        * @returns {pc.Mat4} Self for chaining.
        * @example
        * var m = new pc.Mat4();
        *
        * m.add2(pc.Mat4.INDENTITY, pc.Mat4.ONE);
        *
        * console.log("The result of the addition is: " a.toString());
        */
       add2(lhs: pc.Mat4, rhs: pc.Mat4): pc.Mat4;

       /**
        * @function
        * @name pc.Mat4#add
        * @description Adds the specified 4x4 matrix to the current instance.
        * @param {pc.Mat4} rhs The 4x4 matrix used as the second operand of the addition.
        * @returns {pc.Mat4} Self for chaining.
        * @example
        * var m = new pc.Mat4();
        *
        * m.add(pc.Mat4.ONE);
        *
        * console.log("The result of the addition is: " a.toString());
        */
       add(rhs: pc.Mat4): pc.Mat4;

       /**
        * @function
        * @name pc.Mat4#clone
        * @description Creates a duplicate of the specified matrix.
        * @returns {pc.Mat4} A duplicate matrix.
        * @example
        * var src = new pc.Mat4().setFromEulerAngles(10, 20, 30);
        * var dst = new pc.Mat4();
        * dst.copy(src);
        * console.log("The two matrices are " + (src.equal(dst) ? "equal" : "different"));
        */
       clone(): pc.Mat4;

       /**
        * @function
        * @name pc.Mat4#copy
        * @description Copies the contents of a source 4x4 matrix to a destination 4x4 matrix.
        * @param {pc.Mat4} rhs A 4x4 matrix to be copied.
        * @returns {pc.Mat4} Self for chaining.
        * @example
        * var src = new pc.Mat4().setFromEulerAngles(10, 20, 30);
        * var dst = new pc.Mat4();
        * dst.copy(src);
        * console.log("The two matrices are " + (src.equal(dst) ? "equal" : "different"));
        */
       copy(rhs: pc.Mat4): pc.Mat4;

       /**
        * @function
        * @name pc.Mat4#equals
        * @description Reports whether two matrices are equal.
        * @param {pc.Mat4} rhs The other matrix.
        * @returns {Boolean} true if the matrices are equal and false otherwise.
        * @example
        * var a = new pc.Mat4().setFromEulerAngles(10, 20, 30);
        * var b = new pc.Mat4();
        * console.log("The two matrices are " + (a.equals(b) ? "equal" : "different"));
        */
       equals(rhs: pc.Mat4): Boolean;

       /**
        * @function
        * @name pc.Mat4#isIdentity
        * @description Reports whether the specified matrix is the identity matrix.
        * @returns {Boolean} true if the matrix is identity and false otherwise.
        * @example
        * var m = new pc.Mat4();
        * console.log("The matrix is " + (m.isIdentity() ? "identity" : "not identity"));
        */
       isIdentity(): Boolean;

       /**
        * @function
        * @name pc.Mat4#mul2
        * @description Multiplies the specified 4x4 matrices together and stores the result in
        * the current instance.
        * @param {pc.Mat4} lhs The 4x4 matrix used as the first multiplicand of the operation.
        * @param {pc.Mat4} rhs The 4x4 matrix used as the second multiplicand of the operation.
        * @returns {pc.Mat4} Self for chaining.
        * @example
        * var a = new pc.Mat4().setFromEulerAngles(10, 20, 30);
        * var b = new pc.Mat4().setFromAxisAngle(pc.Vec3.UP, 180);
        * var r = new pc.Mat4();
        *
        * // r = a * b
        * r.mul2(a, b);
        *
        * console.log("The result of the multiplication is: " r.toString());
        */
       mul2(lhs: pc.Mat4, rhs: pc.Mat4): pc.Mat4;

       /**
        * @function
        * @name pc.Mat4#mul
        * @description Multiplies the current instance by the specified 4x4 matrix.
        * @param {pc.Mat4} rhs The 4x4 matrix used as the second multiplicand of the operation.
        * @returns {pc.Mat4} Self for chaining.
        * @example
        * var a = new pc.Mat4().setFromEulerAngles(10, 20, 30);
        * var b = new pc.Mat4().setFromAxisAngle(pc.Vec3.UP, 180);
        *
        * // a = a * b
        * a.mul(b);
        *
        * console.log("The result of the multiplication is: " a.toString());
        */
       mul(rhs: pc.Mat4): pc.Mat4;

       /**
        * @function
        * @name pc.Mat4#transformPoint
        * @description Transforms a 3-dimensional point by a 4x4 matrix.
        * @param {pc.Vec3} vec The 3-dimensional point to be transformed.
        * @param {pc.Vec3} [res] An optional 3-dimensional point to receive the result of the transformation.
        * @returns {pc.Vec3} The input point v transformed by the current instance.
        * @example
        * // Create a 3-dimensional point
        * var v = new pc.Vec3(1, 2, 3);
        *
        * // Create a 4x4 rotation matrix
        * var m = new pc.Mat4().setFromEulerAngles(10, 20, 30);
        *
        * var tv = m.transformPoint(v);
        */
       transformPoint(vec: pc.Vec3, res?: pc.Vec3): pc.Vec3;

       /**
        * @function
        * @name pc.Mat4#transformVector
        * @description Transforms a 3-dimensional vector by a 4x4 matrix.
        * @param {pc.Vec3} vec The 3-dimensional vector to be transformed.
        * @param {pc.Vec3} [res] An optional 3-dimensional vector to receive the result of the transformation.
        * @returns {pc.Vec3} The input vector v transformed by the current instance.
        * @example
        * // Create a 3-dimensional vector
        * var v = new pc.Vec3(1, 2, 3);
        *
        * // Create a 4x4 rotation matrix
        * var m = new pc.Mat4().setFromEulerAngles(10, 20, 30);
        *
        * var tv = m.transformVector(v);
        */
       transformVector(vec: pc.Vec3, res?: pc.Vec3): pc.Vec3;

       /**
        * @function
        * @name pc.Mat4#setLookAt
        * @description Sets the specified matrix to a viewing matrix derived from an eye point, a target point
        * and an up vector. The matrix maps the target point to the negative z-axis and the eye point to the
        * origin, so that when you use a typical projection matrix, the center of the scene maps to the center
        * of the viewport. Similarly, the direction described by the up vector projected onto the viewing plane
        * is mapped to the positive y-axis so that it points upward in the viewport. The up vector must not be
        * parallel to the line of sight from the eye to the reference point.
        * @param {pc.Vec3} position 3-d vector holding view position.
        * @param {pc.Vec3} target 3-d vector holding reference point.
        * @param {pc.Vec3} up 3-d vector holding the up direction.
        * @returns {pc.Mat4} Self for chaining.
        * @example
        * var position = new pc.Vec3(10, 10, 10);
        * var target = new pc.Vec3(0, 0, 0);
        * var up = new pc.Vec3(0, 1, 0);
        * var m = new pc.Mat4().setLookAt(position, target, up);
        */
       setLookAt(position: pc.Vec3, target: pc.Vec3, up: pc.Vec3): pc.Mat4;

       /**
        * @private
        * @function
        * @name pc.Mat4#setFrustum
        * @description Sets the specified matrix to a persective projection matrix. The function's parameters define
        * the shape of a frustum.
        * @param {Number} left The x-coordinate for the left edge of the camera's projection plane in eye space.
        * @param {Number} right The x-coordinate for the right edge of the camera's projection plane in eye space.
        * @param {Number} bottom The y-coordinate for the bottom edge of the camera's projection plane in eye space.
        * @param {Number} top The y-coordinate for the top edge of the camera's projection plane in eye space.
        * @param {Number} znear The near clip plane in eye coordinates.
        * @param {Number} zfar The far clip plane in eye coordinates.
        * @returns {pc.Mat4} Self for chaining.
        * @example
        * // Create a 4x4 persepctive projection matrix
        * var f = pc.Mat4().setFrustum(-2, 2, -1, 1, 1, 1000);
        */
       private setFrustum(left: Number, right: Number, bottom: Number, top: Number, znear: Number, zfar: Number): pc.Mat4;

       /**
        * @function
        * @name pc.Mat4#setPerspective
        * @description Sets the specified matrix to a persective projection matrix. The function's
        * parameters define the shape of a frustum.
        * @param {Number} fovy The field of view in the frustum in the Y-axis of eye space (or X axis if fovIsHorizontal is true).
        * @param {Number} aspect The aspect ratio of the frustum's projection plane (width / height).
        * @param {Number} znear The near clip plane in eye coordinates.
        * @param {Number} zfar The far clip plane in eye coordinates.
        * @returns {pc.Mat4} Self for chaining.
        * @example
        * // Create a 4x4 persepctive projection matrix
        * var persp = pc.Mat4().setPerspective(45, 16 / 9, 1, 1000);
        */
       setPerspective(fovy: Number, aspect: Number, znear: Number, zfar: Number): pc.Mat4;

       /**
        * @function
        * @name pc.Mat4#setOrtho
        * @description Sets the specified matrix to an orthographic projection matrix. The function's parameters
        * define the shape of a cuboid-shaped frustum.
        * @param {Number} left The x-coordinate for the left edge of the camera's projection plane in eye space.
        * @param {Number} right The x-coordinate for the right edge of the camera's projection plane in eye space.
        * @param {Number} bottom The y-coordinate for the bottom edge of the camera's projection plane in eye space.
        * @param {Number} top The y-coordinate for the top edge of the camera's projection plane in eye space.
        * @param {Number} znear The near clip plane in eye coordinates.
        * @param {Number} zfar The far clip plane in eye coordinates.
        * @returns {pc.Mat4} Self for chaining.
        * @example
        * // Create a 4x4 orthographic projection matrix
        * var ortho = pc.Mat4().ortho(-2, 2, -2, 2, 1, 1000);
        */
       setOrtho(left: Number, right: Number, bottom: Number, top: Number, znear: Number, zfar: Number): pc.Mat4;

       /**
        * @function
        * @name pc.Mat4#setFromAxisAngle
        * @description Sets the specified matrix to a rotation matrix equivalent to a rotation around
        * an axis. The axis must be normalized (unit length) and the angle must be specified in degrees.
        * @param {pc.Vec3} axis The normalized axis vector around which to rotate.
        * @param {Number} angle The angle of rotation in degrees.
        * @returns {pc.Mat4} Self for chaining.
        * @example
        * // Create a 4x4 rotation matrix
        * var rm = new pc.Mat4().setFromAxisAngle(pc.Vec3.UP, 90);
        */
       setFromAxisAngle(axis: pc.Vec3, angle: Number): pc.Mat4;

       /**
        * @private
        * @function
        * @name pc.Mat4#setTranslate
        * @description Sets the specified matrix to a translation matrix.
        * @param {Number} x The x-component of the translation.
        * @param {Number} y The y-component of the translation.
        * @param {Number} z The z-component of the translation.
        * @returns {pc.Mat4} Self for chaining.
        * @example
        * // Create a 4x4 translation matrix
        * var tm = new pc.Mat4().setTranslate(10, 10, 10);
        */
       private setTranslate(x: Number, y: Number, z: Number): pc.Mat4;

       /**
        * @private
        * @function
        * @name pc.Mat4#setScale
        * @description Sets the specified matrix to a scale matrix.
        * @param {Number} x The x-component of the scale.
        * @param {Number} y The y-component of the scale.
        * @param {Number} z The z-component of the scale.
        * @returns {pc.Mat4} Self for chaining.
        * @example
        * // Create a 4x4 scale matrix
        * var sm = new pc.Mat4().setScale(10, 10, 10);
        */
       private setScale(x: Number, y: Number, z: Number): pc.Mat4;

       /**
        * @function
        * @name pc.Mat4#invert
        * @description Sets the specified matrix to its inverse.
        * @returns {pc.Mat4} Self for chaining.
        * @example
        * // Create a 4x4 rotation matrix of 180 degrees around the y-axis
        * var rot = new pc.Mat4().setFromAxisAngle(pc.Vec3.UP, 180);
        *
        * // Invert in place
        * rot.invert();
        */
       invert(): pc.Mat4;

       /**
        * @function
        * @name pc.Mat4#set
        * @description Sets matrix data from an array.
        * @param {Array} Source array. Must have 16 values.
        */
       set(Source: Array): void;

       /**
        * @function
        * @name pc.Mat4#setIdentity
        * @description Sets the specified matrix to the identity matrix.
        * @returns {pc.Mat4} Self for chaining.
        * @example
        * m.setIdentity();
        * console.log("The two matrices are " + (src.equal(dst) ? "equal" : "different"));
        */
       setIdentity(): pc.Mat4;

       /**
        * @function
        * @name pc.Mat4#setTRS
        * @description Sets the specified matrix to the concatenation of a translation, a
        * quaternion rotation and a scale.
        * @param {pc.Vec3} t A 3-d vector translation.
        * @param {pc.Quat} r A quaternion rotation.
        * @param {pc.Vec3} s A 3-d vector scale.
        * @returns {pc.Mat4} Self for chaining.
        * @example
        * var t = new pc.Vec3(10, 20, 30);
        * var r = new pc.Quat();
        * var s = new pc.Vec3(2, 2, 2);
        *
        * var m = new pc.Mat4();
        * m.compose(t, r, s);
        */
       setTRS(t: pc.Vec3, r: pc.Quat, s: pc.Vec3): pc.Mat4;

       /**
        * @function
        * @name pc.Mat4#transpose
        * @description Sets the specified matrix to its transpose.
        * @returns {pc.Mat4} Self for chaining.
        * @example
        * var m = new pc.Mat4();
        *
        * // Transpose in place
        * m.transpose();
        */
       transpose(): pc.Mat4;

       /**
        * @function
        * @name pc.Mat4#getTranslation
        * @description Extracts the transational component from the specified 4x4 matrix.
        * @param {pc.Vec3} [t] The vector to receive the translation of the matrix.
        * @returns {pc.Vec3} The translation of the specified 4x4 matrix.
        * @example
        * // Create a 4x4 matrix
        * var m = new pc.Mat4();
        *
        * // Query the z-axis component
        * var t = new pc.Vec3();
        * m.getTranslation(t);
        */
       getTranslation(t?: pc.Vec3): pc.Vec3;

       /**
        * @function
        * @name pc.Mat4#getX
        * @description Extracts the x-axis from the specified 4x4 matrix.
        * @param {pc.Vec3} [x] The vector to receive the x axis of the matrix.
        * @returns {pc.Vec3} The x-axis of the specified 4x4 matrix.
        * @example
        * // Create a 4x4 matrix
        * var m = new pc.Mat4();
        *
        * // Query the z-axis component
        * var x = new pc.Vec3();
        * m.getX(x);
        */
       getX(x?: pc.Vec3): pc.Vec3;

       /**
        * @function
        * @name pc.Mat4#getY
        * @description Extracts the y-axis from the specified 4x4 matrix.
        * @param {pc.Vec3} [y] The vector to receive the y axis of the matrix.
        * @returns {pc.Vec3} The y-axis of the specified 4x4 matrix.
        * @example
        * // Create a 4x4 matrix
        * var m = new pc.Mat4();
        *
        * // Query the z-axis component
        * var y = new pc.Vec3();
        * m.getY(y);
        */
       getY(y?: pc.Vec3): pc.Vec3;

       /**
        * @function
        * @name pc.Mat4#getZ
        * @description Extracts the z-axis from the specified 4x4 matrix.
        * @param {pc.Vec3} [z] The vector to receive the z axis of the matrix.
        * @returns {pc.Vec3} The z-axis of the specified 4x4 matrix.
        * @example
        * // Create a 4x4 matrix
        * var m = new pc.Mat4();
        *
        * // Query the z-axis component
        * var z = new pc.Vec3();
        * m.getZ(z);
        */
       getZ(z?: pc.Vec3): pc.Vec3;

       /**
        * @function
        * @name pc.Mat4#getScale
        * @description Extracts the scale component from the specified 4x4 matrix.
        * @param {pc.Vec3} [scale] Vector to receive the scale.
        * @returns {pc.Vec3} The scale in X, Y and Z of the specified 4x4 matrix.
        * @example
        * // Create a 4x4 scale matrix
        * var m = new pc.Mat4().scale(2, 3, 4);
        *
        * // Query the scale component
        * var scale = m.getScale();
        */
       getScale(scale?: pc.Vec3): pc.Vec3;

       /**
        * @function
        * @name pc.Mat4#setFromEulerAngles
        * @description Sets the specified matrix to a rotation matrix defined by
        * Euler angles. The Euler angles are specified in XYZ order and in degrees.
        * @param {Number} ex Angle to rotate around X axis in degrees.
        * @param {Number} ey Angle to rotate around Y axis in degrees.
        * @param {Number} ez Angle to rotate around Z axis in degrees.
        * @returns {pc.Mat4} Self for chaining.
        * @example
        * var m = new pc.Mat4();
        * m.setFromEulerAngles(45, 90, 180);
        */
       setFromEulerAngles(ex: Number, ey: Number, ez: Number): pc.Mat4;

       /**
        * @function
        * @name pc.Mat4#getEulerAngles
        * @description Extracts the Euler angles equivalent to the rotational portion
        * of the specified matrix. The returned Euler angles are in XYZ order an in degrees.
        * @param {pc.Vec3} [eulers] A 3-d vector to receive the Euler angles.
        * @returns {pc.Vec3} A 3-d vector containing the Euler angles.
        * @example
        * // Create a 4x4 rotation matrix of 45 degrees around the y-axis
        * var m = new pc.Mat4().setFromAxisAngle(pc.Vec3.UP, 45);
        *
        * var eulers = m.getEulerAngles();
        */
       getEulerAngles(eulers?: pc.Vec3): pc.Vec3;

       /**
        * @function
        * @name pc.Mat4#toString
        * @description Converts the specified matrix to string form.
        * @returns {String} The matrix in string form.
        * @example
        * var m = new pc.Mat4();
        * // Should output '[1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]'
        * console.log(m.toString());
        */
       toString(): String;

       /**
        * @field
        * @static
        * @readonly
        * @type pc.Mat4
        * @name pc.Mat4.IDENTITY
        * @description A constant matrix set to the identity.
        */
       static IDENTITY: pc.Mat4;

       /**
        * @field
        * @static
        * @readonly
        * @type pc.Mat4
        * @name pc.Mat4.ZERO
        * @description A constant matrix with all elements set to 0.
        */
       static ZERO: pc.Mat4;

   }

   /**
    * @name pc.math
    * @namespace
    * @description Math API
    */
   module math {
       /**
        * @name pc.math.DEG_TO_RAD
        * @description Conversion factor between degrees and radians
        * @type Number
        * @example
        * // Convert 180 degrees to pi radians
        * var rad = 180 * pc.math.DEG_TO_RAD;
        */
       var DEG_TO_RAD: Number;

       /**
        * @name pc.math.RAD_TO_DEG
        * @description Conversion factor between degrees and radians
        * @type Number
        * @example
        * // Convert pi radians to 180 degrees
        * var deg = Math.PI * pc.math.RAD_TO_DEG;
        */
       var RAD_TO_DEG: Number;

       /**
        * @name pc.math.INV_LOG2
        * @description Inverse log 2
        * @type Number
        */
       var INV_LOG2: Number;

       /**
        * @function
        * @name pc.math.clamp
        * @description Clamp a number between min and max inclusive.
        * @param {Number} value Number to clamp
        * @param {Number} min Min value
        * @param {Number} max Max value
        * @returns {Number} The clamped value
        */
       function clamp(value: Number, min: Number, max: Number): Number;

       /**
        * @function
        * @name pc.math.intToBytes24
        * @description Convert an 24 bit integer into an array of 3 bytes.
        * @param {Number} i Number holding an integer value
        * @returns {Number[]} An array of 3 bytes.
        * @example
        * // Set bytes to [0x11, 0x22, 0x33]
        * var bytes = pc.math.intToBytes24(0x112233);
        */
       function intToBytes24(i: Number): Number[];

       /**
        * @function
        * @name pc.math.intToBytes32
        * @description Convert an 32 bit integer into an array of 4 bytes.
        * @returns {Number[]} An array of 4 bytes
        * @param {Number} i Number holding an integer value
        * @example
        * // Set bytes to [0x11, 0x22, 0x33, 0x44]
        * var bytes = pc.math.intToBytes32(0x11223344);
        */
       function intToBytes32(i: Number): Number[];

       /**
        * @function
        * @name pc.math.bytesToInt24
        * @description Convert 3 8 bit Numbers into a single unsigned 24 bit Number.
        * @example
        * // Set result1 to 0x112233 from an array of 3 values
        * var result1 = pc.math.bytesToInt24([0x11, 0x22, 0x33]);
        *
        * // Set result2 to 0x112233 from 3 discrete values
        * var result2 = pc.math.bytesToInt24(0x11, 0x22, 0x33);
        * @param {Number} r A single byte (0-255)
        * @param {Number} g A single byte (0-255)
        * @param {Number} b A single byte (0-255)
        * @returns {Number} A single unsigned 24 bit Number.
        */
       function bytesToInt24(r: Number, g: Number, b: Number): Number;

       /**
        * @function
        * @name pc.math.bytesToInt32
        * @description Convert 4 1-byte Numbers into a single unsigned 32bit Number.
        * @returns {Number} A single unsigned 32bit Number.
        * @example
        * // Set result1 to 0x11223344 from an array of 4 values
        * var result1 = pc.math.bytesToInt32([0x11, 0x22, 0x33, 0x44]);
        *
        * // Set result2 to 0x11223344 from 4 discrete values
        * var result2 = pc.math.bytesToInt32(0x11, 0x22, 0x33, 0x44);
        * @param {Number} r A single byte (0-255)
        * @param {Number} g A single byte (0-255)
        * @param {Number} b A single byte (0-255)
        * @param {Number} a A single byte (0-255)
        */
       function bytesToInt32(r: Number, g: Number, b: Number, a: Number): Number;

       /**
        * @function
        * @name pc.math.lerp
        * @returns {Number} The linear interpolation of two numbers.
        * @description Calculates the linear interpolation of two numbers.
        * @param {Number} a Number to linearly interpolate from.
        * @param {Number} b Number to linearly interpolate to.
        * @param {Number} alpha The value controlling the result of interpolation. When alpha is 0,
        * a is returned. When alpha is 1, b is returned. Between 0 and 1, a linear interpolation between
        * a and b is returned. alpha is clamped between 0 and 1.
        */
       function lerp(a: Number, b: Number, alpha: Number): Number;

       /**
        * @function
        * @name pc.math.lerpAngle
        * @description Calculates the linear interpolation of two angles ensuring that interpolation
        * is correctly performed across the 360 to 0 degree boundary. Angles are supplied in degrees.
        * @returns {Number} The linear interpolation of two angles
        * @param {Number} a Angle (in degrees) to linearly interpolate from.
        * @param {Number} b Angle (in degrees) to linearly interpolate to.
        * @param {Number} alpha The value controlling the result of interpolation. When alpha is 0,
        * a is returned. When alpha is 1, b is returned. Between 0 and 1, a linear interpolation between
        * a and b is returned. alpha is clamped between 0 and 1.
        */
       function lerpAngle(a: Number, b: Number, alpha: Number): Number;

       /**
        * @function
        * @name pc.math.powerOfTwo
        * @description Returns true if argument is a power-of-two and false otherwise.
        * @param {Number} x Number to check for power-of-two property.
        * @returns {Boolean} true if power-of-two and false otherwise.
        */
       function powerOfTwo(x: Number): Boolean;

       /**
        * @function
        * @name pc.math.nextPowerOfTwo
        * @description Returns the next power of 2 for the specified value.
        * @param {Number} val The value for which to calculate the next power of 2.
        * @return {Number} The next power of 2.
        */
       function nextPowerOfTwo(val: Number): Number;

       /**
        * @function
        * @name pc.math.random
        * @description Return a pseudo-random number between min and max.
        * The number generated is in the range [min, max), that is inclusive of the minimum but exclusive of the maximum.
        * @param {Number} min Lower bound for range.
        * @param {Number} max Upper bound for range.
        * @returns {Number} Pseudo-random number between the supplied range.
        */
       function random(min: Number, max: Number): Number;

       /**
        * @function
        * @name pc.math.smoothstep
        * @description The function interpolates smoothly between two input values based on
        * a third one that should be between the first two. The returned value is clamped
        * between 0 and 1.
        * <br/>The slope (i.e. derivative) of the smoothstep function starts at 0 and ends at 0.
        * This makes it easy to create a sequence of transitions using smoothstep to interpolate
        * each segment rather than using a more sophisticated or expensive interpolation technique.
        * <br/>See http://en.wikipedia.org/wiki/Smoothstep for more details.
        * @param {Number} min The lower bound of the interpolation range.
        * @param {Number} max The upper bound of the interpolation range.
        * @param {Number} x The value to interpolate.
        * @returns {Number} The smoothly interpolated value clamped between zero and one.
        */
       function smoothstep(min: Number, max: Number, x: Number): Number;

       /**
        * @function
        * @name pc.math.smootherstep
        * @description An improved version of the pc.math.smoothstep function which has zero
        * 1st and 2nd order derivatives at t=0 and t=1.
        * <br/>See http://en.wikipedia.org/wiki/Smoothstep for more details.
        * @param {Number} min The lower bound of the interpolation range.
        * @param {Number} max The upper bound of the interpolation range.
        * @param {Number} x The value to interpolate.
        * @returns {Number} The smoothly interpolated value clamped between zero and one.
        */
       function smootherstep(min: Number, max: Number, x: Number): Number;

   }

   /**
    * @name pc.Quat
    * @class A quaternion.
    * @description Create a new Quat object
    * @param {Number} [x] The quaternion's x component. Default value 0.
    * @param {Number} [y] The quaternion's y component. Default value 0.
    * @param {Number} [z] The quaternion's z component. Default value 0.
    * @param {Number} [w] The quaternion's w component. Default value 1.
    */
   class Quat {
       /**
        * @name pc.Quat
        * @class A quaternion.
        * @description Create a new Quat object
        * @param {Number} [x] The quaternion's x component. Default value 0.
        * @param {Number} [y] The quaternion's y component. Default value 0.
        * @param {Number} [z] The quaternion's z component. Default value 0.
        * @param {Number} [w] The quaternion's w component. Default value 1.
        */
       constructor(x?: Number, y?: Number, z?: Number, w?: Number);

       /**
        * @field
        * @type Number
        * @name pc.Quat#x
        * @description The x component of the quaternion.
        * @example
        * var quat = new pc.Quat();
        *
        * // Get x
        * var x = quat.x;
        *
        * // Set x
        * quat.x = 0;
        */
       x: Number;

       /**
        * @field
        * @type Number
        * @name pc.Quat#y
        * @description The y component of the quaternion.
        * @example
        * var quat = new pc.Quat();
        *
        * // Get y
        * var y = quat.y;
        *
        * // Set y
        * quat.y = 0;
        */
       y: Number;

       /**
        * @field
        * @type Number
        * @name pc.Quat#z
        * @description The z component of the quaternion.
        * @example
        * var quat = new pc.Quat();
        *
        * // Get z
        * var z = quat.z;
        *
        * // Set z
        * quat.z = 0;
        */
       z: Number;

       /**
        * @field
        * @type Number
        * @name pc.Quat#w
        * @description The w component of the quaternion.
        * @example
        * var quat = new pc.Quat();
        *
        * // Get w
        * var w = quat.w;
        *
        * // Set w
        * quat.w = 0;
        */
       w: Number;

       /**
        * @function
        * @name pc.Quat#clone
        * @description Returns an identical copy of the specified quaternion.
        * @returns {pc.Quat} A quaternion containing the result of the cloning.
        * @example
        * var q = new pc.Quat(-0.11, -0.15, -0.46, 0.87);
        * var qclone = q.clone();
        *
        * console.log("The result of the cloning is: " + q.toString());
        */
       clone(): pc.Quat;

       /**
        * @function
        * @name pc.Quat#copy
        * @description Copies the contents of a source quaternion to a destination quaternion.
        * @param {pc.Quat} rhs The quaternion to be copied.
        * @returns {pc.Quat} Self for chaining.
        * @example
        * var src = new pc.Quat();
        * var dst = new pc.Quat();
        * dst.copy(src, src);
        * console.log("The two quaternions are " + (src.equals(dst) ? "equal" : "different"));
        */
       copy(rhs: pc.Quat): pc.Quat;

       /**
        * @function
        * @name pc.Quat#equals
        * @description Reports whether two quaternions are equal.
        * @returns {Boolean} true if the quaternions are equal and false otherwise.
        * @example
        * var a = new pc.Quat();
        * var b = new pc.Quat();
        * console.log("The two quaternions are " + (a.equals(b) ? "equal" : "different"));
        */
       equals(): Boolean;

       /**
        * @function
        * @name pc.Quat#getEulerAngles
        * @description Converts the supplied quaternion to Euler angles.
        * @param {pc.Vec3} [eulers] The 3-dimensional vector to receive the Euler angles.
        * @returns {pc.Vec3} The 3-dimensional vector holding the Euler angles that
        * correspond to the supplied quaternion.
        */
       getEulerAngles(eulers?: pc.Vec3): pc.Vec3;

       /**
        * @function
        * @name pc.Quat#invert
        * @description Generates the inverse of the specified quaternion.
        * @returns {pc.Quat} Self for chaining.
        * @example
        * // Create a quaternion rotated 180 degrees around the y-axis
        * var rot = new pc.Quat().setFromEulerAngles(0, 180, 0);
        *
        * // Invert in place
        * rot.invert();
        */
       invert(): pc.Quat;

       /**
        * @function
        * @name pc.Quat#length
        * @description Returns the magnitude of the specified quaternion.
        * @returns {Number} The magnitude of the specified quaternion.
        * @example
        * var q = new pc.Quat(0, 0, 0, 5);
        * var len = q.length();
        * // Should output 5
        * console.log("The length of the quaternion is: " + len);
        */
       length(): Number;

       /**
        * @function
        * @name pc.Quat#lengthSq
        * @description Returns the magnitude squared of the specified quaternion.
        * @returns {Number} The magnitude of the specified quaternion.
        * @example
        * var q = new pc.Quat(3, 4, 0);
        * var lenSq = q.lengthSq();
        * // Should output 25
        * console.log("The length squared of the quaternion is: " + lenSq);
        */
       lengthSq(): Number;

       /**
        * @function
        * @name pc.Quat#mul
        * @description Returns the result of multiplying the specified quaternions together.
        * @param {pc.Quat} rhs The quaternion used as the second multiplicand of the operation.
        * @returns {pc.Quat} Self for chaining.
        * @example
        * var a = new pc.Quat().setFromEulerAngles(0, 30, 0);
        * var b = new pc.Quat().setFromEulerAngles(0, 60, 0);
        *
        * // a becomes a 90 degree rotation around the Y axis
        * // In other words, a = a * b
        * a.mul(b);
        *
        * console.log("The result of the multiplication is: " a.toString());
        */
       mul(rhs: pc.Quat): pc.Quat;

       /**
        * @function
        * @name pc.Quat#mul2
        * @description Returns the result of multiplying the specified quaternions together.
        * @param {pc.Quat} lhs The quaternion used as the first multiplicand of the operation.
        * @param {pc.Quat} rhs The quaternion used as the second multiplicand of the operation.
        * @returns {pc.Quat} Self for chaining.
        * @example
        * var a = new pc.Quat().setFromEulerAngles(0, 30, 0);
        * var b = new pc.Quat().setFromEulerAngles(0, 60, 0);
        * var r = new pc.Quat();
        *
        * // r is set to a 90 degree rotation around the Y axis
        * // In other words, r = a * b
        * r.mul2(a, b);
        *
        * console.log("The result of the multiplication is: " r.toString());
        */
       mul2(lhs: pc.Quat, rhs: pc.Quat): pc.Quat;

       /**
        * @function
        * @name pc.Quat#normalize
        * @description Returns the specified quaternion converted in place to a unit quaternion.
        * @returns {pc.Quat} The result of the normalization.
        * @example
        * var v = new pc.Quat(0, 0, 0, 5);
        *
        * v.normalize();
        *
        * // Should output 0, 0, 0, 1
        * console.log("The result of the vector normalization is: " + v.toString());
        */
       normalize(): pc.Quat;

       /**
        * @function
        * @name pc.Quat#set
        * @description Sets the specified quaternion to the supplied numerical values.
        * @param {Number} x The x component of the quaternion.
        * @param {Number} y The y component of the quaternion.
        * @param {Number} z The z component of the quaternion.
        * @param {Number} w The w component of the quaternion.
        * @example
        * var q = new pc.Quat();
        * q.set(1, 0, 0, 0);
        *
        * // Should output 1, 0, 0, 0
        * console.log("The result of the vector set is: " + q.toString());
        */
       set(x: Number, y: Number, z: Number, w: Number): void;

       /**
        * @function
        * @name pc.Quat#setFromAxisAngle
        * @description Sets a quaternion from an angular rotation around an axis.
        * @param {pc.Vec3} axis World space axis around which to rotate.
        * @param {Number} angle Angle to rotate around the given axis in degrees.
        * @returns {pc.Quat} Self for chaining.
        * @example
        * var q = new pc.Quat();
        * q.setFromAxisAngle(pc.Vec3.UP, 90);
        */
       setFromAxisAngle(axis: pc.Vec3, angle: Number): pc.Quat;

       /**
        * @function
        * @name pc.Quat#setFromEulerAngles
        * @description Sets a quaternion from Euler angles specified in XYZ order.
        * @param {Number} ex Angle to rotate around X axis in degrees.
        * @param {Number} ey Angle to rotate around Y axis in degrees.
        * @param {Number} ez Angle to rotate around Z axis in degrees.
        * @returns {pc.Quat} Self for chaining.
        * @example
        * var q = new pc.Quat();
        * q.setFromEulerAngles(45, 90, 180);
        */
       setFromEulerAngles(ex: Number, ey: Number, ez: Number): pc.Quat;

       /**
        * @function
        * @name pc.Quat#setFromMat4
        * @description Converts the specified 4x4 matrix to a quaternion. Note that since
        * a quaternion is purely a representation for orientation, only the translational part
        * of the matrix is lost.
        * @param {pc.Mat4} m The 4x4 matrix to convert.
        * @returns {pc.Quat} Self for chaining.
        * @example
        * // Create a 4x4 rotation matrix of 180 degrees around the y-axis
        * var rot = new pc.Mat4().setFromAxisAngle(pc.Vec3.UP, 180);
        *
        * // Convert to a quaternion
        * var q = new pc.Quat().setFromMat4(rot);
        */
       setFromMat4(m: pc.Mat4): pc.Quat;

       /**
        * @function
        * @name pc.Quat#slerp
        * @description Performs a spherical interpolation between two quaternions. The result of
        * the interpolation is written to the quaternion calling the function.
        * @param {pc.Quat} lhs The quaternion to interpolate from.
        * @param {pc.Quat} rhs The quaternion to interpolate to.
        * @param {Number} alpha The value controlling the interpolation in relation to the two input
        * quaternions. The value is in the range 0 to 1, 0 generating q1, 1 generating q2 and anything
        * in between generating a spherical interpolation between the two.
        * @returns {pc.Quat} Self for chaining.
        * @example
        * var q1 = new pc.Quat(-0.11,-0.15,-0.46,0.87);
        * var q2 = new pc.Quat(-0.21,-0.21,-0.67,0.68);
        *
        * var result;
        * result = new pc.Quat().slerp(q1, q2, 0);   // Return q1
        * result = new pc.Quat().slerp(q1, q2, 0.5); // Return the midpoint interpolant
        * result = new pc.Quat().slerp(q1, q2, 1);   // Return q2
        */
       slerp(lhs: pc.Quat, rhs: pc.Quat, alpha: Number): pc.Quat;

       /**
        * @function
        * @name pc.Quat#transformVector
        * @description Transforms a 3-dimensional vector by the specified quaternion.
        * @param {pc.Vec3} vec The 3-dimensional vector to be transformed.
        * @param {pc.Vec3} [res] An optional 3-dimensional vector to receive the result of the transformation.
        * @returns {pc.Vec3} The input vector v transformed by the current instance.
        * @example
        * // Create a 3-dimensional vector
        * var v = new pc.Vec3(1, 2, 3);
        *
        * // Create a 4x4 rotation matrix
        * var q = new pc.Quat().setFromEulerAngles(10, 20, 30);
        *
        * var tv = q.transformVector(v);
        */
       transformVector(vec: pc.Vec3, res?: pc.Vec3): pc.Vec3;

       /**
        * @function
        * @name pc.Quat#toString
        * @description Converts the quaternion to string form.
        * @returns {String} The quaternion in string form.
        * @example
        * var v = new pc.Quat(0, 0, 0, 1);
        * // Should output '[0, 0, 0, 1]'
        * console.log(v.toString());
        */
       toString(): String;

       /**
        * @field
        * @static
        * @readonly
        * @type pc.Quat
        * @name pc.Quat.IDENTITY
        * @description A constant quaternion set to [0, 0, 0, 1] (the identity).
        */
       static IDENTITY: pc.Quat;

       /**
        * @field
        * @static
        * @readonly
        * @type pc.Quat
        * @name pc.Quat.ZERO
        * @description A constant quaternion set to [0, 0, 0, 0].
        */
       static ZERO: pc.Quat;

   }

   /**
    * @name pc.Vec2
    * @class A 2-dimensional vector.
    * @description Creates a new Vec2 object
    */
   class Vec2 {
       /**
        * @name pc.Vec2
        * @class A 2-dimensional vector.
        * @description Creates a new Vec2 object
        */
       constructor();

       /**
        * @function
        * @name pc.Vec2#add
        * @description Adds a 2-dimensional vector to another in place.
        * @param {pc.Vec2} rhs The vector to add to the specified vector.
        * @returns {pc.Vec2} Self for chaining.
        * @example
        * var a = new pc.Vec2(10, 10);
        * var b = new pc.Vec2(20, 20);
        *
        * a.add(b);
        *
        * // Should output [30, 30]
        * console.log("The result of the addition is: " + a.toString());
        */
       add(rhs: pc.Vec2): pc.Vec2;

       /**
        * @function
        * @name pc.Vec2#add2
        * @description Adds two 2-dimensional vectors together and returns the result.
        * @param {pc.Vec2} lhs The first vector operand for the addition.
        * @param {pc.Vec2} rhs The second vector operand for the addition.
        * @returns {pc.Vec2} Self for chaining.
        * @example
        * var a = new pc.Vec2(10, 10);
        * var b = new pc.Vec2(20, 20);
        * var r = new pc.Vec2();
        *
        * r.add2(a, b);
        * // Should output [30, 30]
        *
        * console.log("The result of the addition is: " + r.toString());
        */
       add2(lhs: pc.Vec2, rhs: pc.Vec2): pc.Vec2;

       /**
        * @function
        * @name pc.Vec2#clone
        * @description Returns an identical copy of the specified 2-dimensional vector.
        * @returns {pc.Vec2} A 2-dimensional vector containing the result of the cloning.
        * @example
        * var v = new pc.Vec2(10, 20);
        * var vclone = v.clone();
        * console.log("The result of the cloning is: " + vclone.toString());
        */
       clone(): pc.Vec2;

       /**
        * @function
        * @name pc.Vec2#copy
        * @description Copied the contents of a source 2-dimensional vector to a destination 2-dimensional vector.
        * @param {pc.Vec2} rhs A vector to copy to the specified vector.
        * @returns {pc.Vec2} Self for chaining.
        * @example
        * var src = new pc.Vec2(10, 20);
        * var dst = new pc.Vec2();
        *
        * dst.copy(src);
        *
        * console.log("The two vectors are " + (dst.equals(src) ? "equal" : "different"));
        */
       copy(rhs: pc.Vec2): pc.Vec2;

       /**
        * @function
        * @name pc.Vec2#dot
        * @description Returns the result of a dot product operation performed on the two specified 2-dimensional vectors.
        * @param {pc.Vec2} rhs The second 2-dimensional vector operand of the dot product.
        * @returns {Number} The result of the dot product operation.
        * @example
        * var v1 = new pc.Vec2(5, 10);
        * var v2 = new pc.Vec2(10, 20);
        * var v1dotv2 = v1.dot(v2);
        * console.log("The result of the dot product is: " + v1dotv2);
        */
       dot(rhs: pc.Vec2): Number;

       /**
        * @function
        * @name pc.Vec2#equals
        * @description Reports whether two vectors are equal.
        * @param {pc.Vec2} rhs The vector to compare to the specified vector.
        * @returns {Boolean} true if the vectors are equal and false otherwise.
        * @example
        * var a = new pc.Vec2(1, 2);
        * var b = new pc.Vec2(4, 5);
        * console.log("The two vectors are " + (a.equals(b) ? "equal" : "different"));
        */
       equals(rhs: pc.Vec2): Boolean;

       /**
        * @function
        * @name pc.Vec2#length
        * @description Returns the magnitude of the specified 2-dimensional vector.
        * @returns {Number} The magnitude of the specified 2-dimensional vector.
        * @example
        * var vec = new pc.Vec2(3, 4);
        * var len = vec.length();
        * // Should output 5
        * console.log("The length of the vector is: " + len);
        */
       length(): Number;

       /**
        * @function
        * @name pc.Vec2#lengthSq
        * @description Returns the magnitude squared of the specified 2-dimensional vector.
        * @returns {Number} The magnitude of the specified 2-dimensional vector.
        * @example
        * var vec = new pc.Vec2(3, 4);
        * var len = vec.lengthSq();
        * // Should output 25
        * console.log("The length squared of the vector is: " + len);
        */
       lengthSq(): Number;

       /**
        * @function
        * @name pc.Vec2#lerp
        * @description Returns the result of a linear interpolation between two specified 2-dimensional vectors.
        * @param {pc.Vec2} lhs The 2-dimensional to interpolate from.
        * @param {pc.Vec2} rhs The 2-dimensional to interpolate to.
        * @param {Number} alpha The value controlling the point of interpolation. Between 0 and 1, the linear interpolant
        * will occur on a straight line between lhs and rhs. Outside of this range, the linear interpolant will occur on
        * a ray extrapolated from this line.
        * @returns {pc.Vec2} Self for chaining.
        * @example
        * var a = new pc.Vec2(0, 0);
        * var b = new pc.Vec2(10, 10);
        * var r = new pc.Vec2();
        *
        * r.lerp(a, b, 0);   // r is equal to a
        * r.lerp(a, b, 0.5); // r is 5, 5
        * r.lerp(a, b, 1);   // r is equal to b
        */
       lerp(lhs: pc.Vec2, rhs: pc.Vec2, alpha: Number): pc.Vec2;

       /**
        * @function
        * @name pc.Vec2#mul
        * @description Returns the result of multiplying the specified 2-dimensional vectors together.
        * @param {pc.Vec2} rhs The 2-dimensional vector used as the second multiplicand of the operation.
        * @returns {pc.Vec2} Self for chaining.
        * @example
        * var a = new pc.Vec2(2, 3);
        * var b = new pc.Vec2(4, 5);
        *
        * a.mul(b);
        *
        * // Should output 8, 15
        * console.log("The result of the multiplication is: " + a.toString());
        */
       mul(rhs: pc.Vec2): pc.Vec2;

       /**
        * @function
        * @name pc.Vec2#mul2
        * @description Returns the result of multiplying the specified 2-dimensional vectors together.
        * @param {pc.Vec2} lhs The 2-dimensional vector used as the first multiplicand of the operation.
        * @param {pc.Vec2} rhs The 2-dimensional vector used as the second multiplicand of the operation.
        * @returns {pc.Vec2} Self for chaining.
        * @example
        * var a = new pc.Vec2(2, 3);
        * var b = new pc.Vec2(4, 5);
        * var r = new pc.Vec2();
        *
        * r.mul2(a, b);
        *
        * // Should output 8, 15
        * console.log("The result of the multiplication is: " + r.toString());
        */
       mul2(lhs: pc.Vec2, rhs: pc.Vec2): pc.Vec2;

       /**
        * @function
        * @name pc.Vec2#normalize
        * @description Returns the specified 2-dimensional vector copied and converted to a unit vector.
        * If the vector has a length of zero, the vector's elements will be set to zero.
        * @returns {pc.Vec2} Self for chaining.
        * @example
        * var v = new pc.Vec2(25, 0);
        *
        * v.normalize();
        *
        * // Should output 1, 0
        * console.log("The result of the vector normalization is: " + v.toString());
        */
       normalize(): pc.Vec2;

       /**
        * @function
        * @name pc.Vec2#scale
        * @description Scales each component of the specified 2-dimensional vector by the supplied
        * scalar value.
        * @param {Number} scalar The value by which each vector component is multiplied.
        * @returns {pc.Vec2} Self for chaining.
        * @example
        * var v = new pc.Vec2(2, 4);
        *
        * // Multiply by 2
        * v.scale(2);
        *
        * // Negate
        * v.scale(-1);
        *
        * // Divide by 2
        * v.scale(0.5);
        */
       scale(scalar: Number): pc.Vec2;

       /**
        * @function
        * @name pc.Vec2#set
        * @description Sets the specified 2-dimensional vector to the supplied numerical values.
        * @param {Number} x The value to set on the first component of the vector.
        * @param {Number} y The value to set on the second component of the vector.
        * @example
        * var v = new pc.Vec2();
        * v.set(5, 10);
        *
        * // Should output 5, 10
        * console.log("The result of the vector set is: " + v.toString());
        */
       set(x: Number, y: Number): void;

       /**
        * @function
        * @name pc.Vec2#sub
        * @description Subtracts a 2-dimensional vector from another in place.
        * @param {pc.Vec2} rhs The vector to add to the specified vector.
        * @returns {pc.Vec2} Self for chaining.
        * @example
        * var a = new pc.Vec2(10, 10);
        * var b = new pc.Vec2(20, 20);
        *
        * a.sub(b);
        *
        * // Should output [-10, -10]
        * console.log("The result of the addition is: " + a.toString());
        */
       sub(rhs: pc.Vec2): pc.Vec2;

       /**
        * @function
        * @name pc.Vec2#sub2
        * @description Subtracts two 2-dimensional vectors from one another and returns the result.
        * @param {pc.Vec2} lhs The first vector operand for the addition.
        * @param {pc.Vec2} rhs The second vector operand for the addition.
        * @returns {pc.Vec2} Self for chaining.
        * @example
        * var a = new pc.Vec2(10, 10);
        * var b = new pc.Vec2(20, 20);
        * var r = new pc.Vec2();
        *
        * r.sub2(a, b);
        *
        * // Should output [-10, -10]
        * console.log("The result of the addition is: " + r.toString());
        */
       sub2(lhs: pc.Vec2, rhs: pc.Vec2): pc.Vec2;

       /**
        * @function
        * @name pc.Vec2#toString
        * @description Converts the vector to string form.
        * @returns {String} The vector in string form.
        * @example
        * var v = new pc.Vec2(20, 10);
        * // Should output '[20, 10]'
        * console.log(v.toString());
        */
       toString(): String;

       /**
        * @field
        * @type Number
        * @name pc.Vec2#x
        * @description The first element of the vector.
        * @example
        * var vec = new pc.Vec2(10, 20);
        *
        * // Get x
        * var x = vec.x;
        *
        * // Set x
        * vec.x = 0;
        */
       x: Number;

       /**
        * @field
        * @type Number
        * @name pc.Vec2#y
        * @description The second element of the vector.
        * @example
        * var vec = new pc.Vec2(10, 20);
        *
        * // Get y
        * var y = vec.y;
        *
        * // Set y
        * vec.y = 0;
        */
       y: Number;

       /**
        * @field
        * @static
        * @readonly
        * @type pc.Vec2
        * @name pc.Vec2.ONE
        * @description A constant vector set to [1, 1].
        */
       static ONE: pc.Vec2;

       /**
        * @field
        * @static
        * @readonly
        * @type pc.Vec2
        * @name pc.Vec2.RIGHT
        * @description A constant vector set to [1, 0].
        */
       static RIGHT: pc.Vec2;

       /**
        * @field
        * @static
        * @readonly
        * @type pc.Vec2
        * @name pc.Vec2.UP
        * @description A constant vector set to [0, 1].
        */
       static UP: pc.Vec2;

       /**
        * @field
        * @static
        * @readonly
        * @type pc.Vec2
        * @name pc.Vec2.ZERO
        * @description A constant vector set to [0, 0].
        */
       static ZERO: pc.Vec2;

   }

   /**
    * @name pc.Vec3
    * @class A 3-dimensional vector.
    * @description Creates a new Vec3 object
    * @param {Number} [x] The x value
    * @param {Number} [y] The y value
    * @param {Number} [z] The z value
    * @example
    * var v = new pc.Vec3(1,2,3);
    */
   class Vec3 {
       /**
        * @name pc.Vec3
        * @class A 3-dimensional vector.
        * @description Creates a new Vec3 object
        * @param {Number} [x] The x value
        * @param {Number} [y] The y value
        * @param {Number} [z] The z value
        * @example
        * var v = new pc.Vec3(1,2,3);
        */
       constructor(x?: Number, y?: Number, z?: Number);

       /**
        * @function
        * @name pc.Vec3#add
        * @description Adds a 3-dimensional vector to another in place.
        * @param {pc.Vec3} rhs The vector to add to the specified vector.
        * @returns {pc.Vec3} Self for chaining.
        * @example
        * var a = new pc.Vec3(10, 10, 10);
        * var b = new pc.Vec3(20, 20, 20);
        *
        * a.add(b);
        *
        * // Should output [30, 30, 30]
        * console.log("The result of the addition is: " + a.toString());
        */
       add(rhs: pc.Vec3): pc.Vec3;

       /**
        * @function
        * @name pc.Vec3#add2
        * @description Adds two 3-dimensional vectors together and returns the result.
        * @param {pc.Vec3} lhs The first vector operand for the addition.
        * @param {pc.Vec3} rhs The second vector operand for the addition.
        * @returns {pc.Vec3} Self for chaining.
        * @example
        * var a = new pc.Vec3(10, 10, 10);
        * var b = new pc.Vec3(20, 20, 20);
        * var r = new pc.Vec3();
        *
        * r.add2(a, b);
        * // Should output [30, 30, 30]
        *
        * console.log("The result of the addition is: " + r.toString());
        */
       add2(lhs: pc.Vec3, rhs: pc.Vec3): pc.Vec3;

       /**
        * @function
        * @name pc.Vec3#clone
        * @description Returns an identical copy of the specified 3-dimensional vector.
        * @returns {pc.Vec3} A 3-dimensional vector containing the result of the cloning.
        * @example
        * var v = new pc.Vec3(10, 20, 30);
        * var vclone = v.clone();
        * console.log("The result of the cloning is: " + vclone.toString());
        */
       clone(): pc.Vec3;

       /**
        * @function
        * @name pc.Vec3#copy
        * @description Copied the contents of a source 3-dimensional vector to a destination 3-dimensional vector.
        * @param {pc.Vec3} rhs A vector to copy to the specified vector.
        * @returns {pc.Vec3} Self for chaining.
        * @example
        * var src = new pc.Vec3(10, 20, 30);
        * var dst = new pc.Vec3();
        *
        * dst.copy(src);
        *
        * console.log("The two vectors are " + (dst.equals(src) ? "equal" : "different"));
        */
       copy(rhs: pc.Vec3): pc.Vec3;

       /**
        * @function
        * @name pc.Vec3#cross
        * @description Returns the result of a cross product operation performed on the two specified 3-dimensional vectors.
        * @param {pc.Vec3} lhs The first 3-dimensional vector operand of the cross product.
        * @param {pc.Vec3} rhs The second 3-dimensional vector operand of the cross product.
        * @returns {pc.Vec3} Self for chaining.
        * @example
        * var back = new pc.Vec3().cross(pc.Vec3.RIGHT, pc.Vec3.UP);
        *
        * // Should print the Z axis (i.e. [0, 0, 1])
        * console.log("The result of the cross product is: " + back.toString());
        */
       cross(lhs: pc.Vec3, rhs: pc.Vec3): pc.Vec3;

       /**
        * @function
        * @name pc.Vec3#dot
        * @description Returns the result of a dot product operation performed on the two specified 3-dimensional vectors.
        * @param {pc.Vec3} rhs The second 3-dimensional vector operand of the dot product.
        * @returns {Number} The result of the dot product operation.
        * @example
        * var v1 = new pc.Vec3(5, 10, 20);
        * var v2 = new pc.Vec3(10, 20, 40);
        * var v1dotv2 = v1.dot(v2);
        * console.log("The result of the dot product is: " + v1dotv2);
        */
       dot(rhs: pc.Vec3): Number;

       /**
        * @function
        * @name pc.Vec3#equals
        * @description Reports whether two vectors are equal.
        * @param {pc.Vec3} rhs The vector to compare to the specified vector.
        * @returns {Boolean} true if the vectors are equal and false otherwise.
        * @example
        * var a = new pc.Vec3(1, 2, 3);
        * var b = new pc.Vec3(4, 5, 6);
        * console.log("The two vectors are " + (a.equals(b) ? "equal" : "different"));
        */
       equals(rhs: pc.Vec3): Boolean;

       /**
        * @function
        * @name pc.Vec3#length
        * @description Returns the magnitude of the specified 3-dimensional vector.
        * @returns {Number} The magnitude of the specified 3-dimensional vector.
        * @example
        * var vec = new pc.Vec3(3, 4, 0);
        * var len = vec.length();
        * // Should output 5
        * console.log("The length of the vector is: " + len);
        */
       length(): Number;

       /**
        * @function
        * @name pc.Vec3#lengthSq
        * @description Returns the magnitude squared of the specified 3-dimensional vector.
        * @returns {Number} The magnitude of the specified 3-dimensional vector.
        * @example
        * var vec = new pc.Vec3(3, 4, 0);
        * var len = vec.lengthSq();
        * // Should output 25
        * console.log("The length squared of the vector is: " + len);
        */
       lengthSq(): Number;

       /**
        * @function
        * @name pc.Vec3#lerp
        * @description Returns the result of a linear interpolation between two specified 3-dimensional vectors.
        * @param {pc.Vec3} lhs The 3-dimensional to interpolate from.
        * @param {pc.Vec3} rhs The 3-dimensional to interpolate to.
        * @param {Number} alpha The value controlling the point of interpolation. Between 0 and 1, the linear interpolant
        * will occur on a straight line between lhs and rhs. Outside of this range, the linear interpolant will occur on
        * a ray extrapolated from this line.
        * @returns {pc.Vec3} Self for chaining.
        * @example
        * var a = new pc.Vec3(0, 0, 0);
        * var b = new pc.Vec3(10, 10, 10);
        * var r = new pc.Vec3();
        *
        * r.lerp(a, b, 0);   // r is equal to a
        * r.lerp(a, b, 0.5); // r is 5, 5, 5
        * r.lerp(a, b, 1);   // r is equal to b
        */
       lerp(lhs: pc.Vec3, rhs: pc.Vec3, alpha: Number): pc.Vec3;

       /**
        * @function
        * @name pc.Vec3#mul
        * @description Returns the result of multiplying the specified 3-dimensional vectors together.
        * @param {pc.Vec3} rhs The 3-dimensional vector used as the second multiplicand of the operation.
        * @returns {pc.Vec3} Self for chaining.
        * @example
        * var a = new pc.Vec3(2, 3, 4);
        * var b = new pc.Vec3(4, 5, 6);
        *
        * a.mul(b);
        *
        * // Should output 8, 15, 24
        * console.log("The result of the multiplication is: " + a.toString());
        */
       mul(rhs: pc.Vec3): pc.Vec3;

       /**
        * @function
        * @name pc.Vec3#mul2
        * @description Returns the result of multiplying the specified 3-dimensional vectors together.
        * @param {pc.Vec3} lhs The 3-dimensional vector used as the first multiplicand of the operation.
        * @param {pc.Vec3} rhs The 3-dimensional vector used as the second multiplicand of the operation.
        * @returns {pc.Vec3} Self for chaining.
        * @example
        * var a = new pc.Vec3(2, 3, 4);
        * var b = new pc.Vec3(4, 5, 6);
        * var r = new pc.Vec3();
        *
        * r.mul2(a, b);
        *
        * // Should output 8, 15, 24
        * console.log("The result of the multiplication is: " + r.toString());
        */
       mul2(lhs: pc.Vec3, rhs: pc.Vec3): pc.Vec3;

       /**
        * @function
        * @name pc.Vec3#normalize
        * @description Returns the specified 3-dimensional vector copied and converted to a unit vector.
        * If the vector has a length of zero, the vector's elements will be set to zero.
        * @returns {pc.Vec3} The result of the normalization.
        * @example
        * var v = new pc.Vec3(25, 0, 0);
        *
        * v.normalize();
        *
        * // Should output 1, 0, 0, 0
        * console.log("The result of the vector normalization is: " + v.toString());
        */
       normalize(): pc.Vec3;

       /**
        * @function
        * @name  pc.Vec3#project
        * @description Projects this 3-dimensional vector onto the specified vector.
        * @param {pc.Vec3} rhs The vector onto which the original vector will be projected on.
        * @returns {pc.Vec3} Self for chaining.
        * @example
        * var v = new pc.Vec3(5, 5, 5);
        * var normal = new pc.Vec3(1, 0, 0);
        *
        * v.project(normal);
        *
        * // Should output 5, 0, 0
        * console.log("The result of the vector projection is: " + v.toString());
        */
       project(rhs: pc.Vec3): pc.Vec3;

       /**
        * @function
        * @name pc.Vec3#scale
        * @description Scales each dimension of the specified 3-dimensional vector by the supplied
        * scalar value.
        * @param {Number} scalar The value by which each vector component is multiplied.
        * @returns {pc.Vec3} Self for chaining.
        * @example
        * var v = new pc.Vec3(2, 4, 8);
        *
        * // Multiply by 2
        * v.scale(2);
        *
        * // Negate
        * v.scale(-1);
        *
        * // Divide by 2
        * v.scale(0.5);
        */
       scale(scalar: Number): pc.Vec3;

       /**
        * @function
        * @name pc.Vec3#set
        * @description Sets the specified 3-dimensional vector to the supplied numerical values.
        * @param {Number} x The value to set on the first component of the vector.
        * @param {Number} y The value to set on the second component of the vector.
        * @param {Number} z The value to set on the third component of the vector.
        * @example
        * var v = new pc.Vec3();
        * v.set(5, 10, 20);
        *
        * // Should output 5, 10, 20
        * console.log("The result of the vector set is: " + v.toString());
        */
       set(x: Number, y: Number, z: Number): void;

       /**
        * @function
        * @name pc.Vec3#sub
        * @description Subtracts a 3-dimensional vector from another in place.
        * @param {pc.Vec3} rhs The vector to add to the specified vector.
        * @returns {pc.Vec3} Self for chaining.
        * @example
        * var a = new pc.Vec3(10, 10, 10);
        * var b = new pc.Vec3(20, 20, 20);
        *
        * a.sub(b);
        *
        * // Should output [-10, -10, -10]
        * console.log("The result of the addition is: " + a.toString());
        */
       sub(rhs: pc.Vec3): pc.Vec3;

       /**
        * @function
        * @name pc.Vec3#sub2
        * @description Subtracts two 3-dimensional vectors from one another and returns the result.
        * @param {pc.Vec3} lhs The first vector operand for the addition.
        * @param {pc.Vec3} rhs The second vector operand for the addition.
        * @returns {pc.Vec3} Self for chaining.
        * @example
        * var a = new pc.Vec3(10, 10, 10);
        * var b = new pc.Vec3(20, 20, 20);
        * var r = new pc.Vec3();
        *
        * r.sub2(a, b);
        *
        * // Should output [-10, -10, -10]
        * console.log("The result of the addition is: " + r.toString());
        */
       sub2(lhs: pc.Vec3, rhs: pc.Vec3): pc.Vec3;

       /**
        * @function
        * @name pc.Vec3#toString
        * @description Converts the vector to string form.
        * @returns {String} The vector in string form.
        * @example
        * var v = new pc.Vec3(20, 10, 5);
        * // Should output '[20, 10, 5]'
        * console.log(v.toString());
        */
       toString(): String;

       /**
        * @name pc.Vec3#x
        * @type Number
        * @description The first component of the vector.
        * @example
        * var vec = new pc.Vec3(10, 20, 30);
        *
        * // Get x
        * var x = vec.x;
        *
        * // Set x
        * vec.x = 0;
        */
       x: Number;

       /**
        * @name pc.Vec3#y
        * @type Number
        * @description The second component of the vector.
        * @example
        * var vec = new pc.Vec3(10, 20, 30);
        *
        * // Get y
        * var y = vec.y;
        *
        * // Set y
        * vec.y = 0;
        */
       y: Number;

       /**
        * @name pc.Vec3#z
        * @type Number
        * @description The third component of the vector.
        * @example
        * var vec = new pc.Vec3(10, 20, 30);
        *
        * // Get z
        * var z = vec.z;
        *
        * // Set z
        * vec.z = 0;
        */
       z: Number;

       /**
        * @static
        * @readonly
        * @type pc.Vec3
        * @name pc.Vec3.BACK
        * @description A constant vector set to [0, 0, 1].
        */
       static BACK: pc.Vec3;

       /**
        * @static
        * @readonly
        * @type pc.Vec3
        * @name pc.Vec3.DOWN
        * @description A constant vector set to [0, -1, 0].
        */
       static DOWN: pc.Vec3;

       /**
        * @static
        * @readonly
        * @type pc.Vec3
        * @name pc.Vec3.FORWARD
        * @description A constant vector set to [0, 0, -1].
        */
       static FORWARD: pc.Vec3;

       /**
        * @field
        * @static
        * @readonly
        * @type pc.Vec3
        * @name pc.Vec3.LEFT
        * @description A constant vector set to [-1, 0, 0].
        */
       static LEFT: pc.Vec3;

       /**
        * @field
        * @static
        * @readonly
        * @type pc.Vec3
        * @name pc.Vec3.ONE
        * @description A constant vector set to [1, 1, 1].
        */
       static ONE: pc.Vec3;

       /**
        * @field
        * @static
        * @readonly
        * @type pc.Vec3
        * @name pc.Vec3.RIGHT
        * @description A constant vector set to [1, 0, 0].
        */
       static RIGHT: pc.Vec3;

       /**
        * @field
        * @static
        * @readonly
        * @type pc.Vec3
        * @name pc.Vec3.UP
        * @description A constant vector set to [0, 1, 0].
        */
       static UP: pc.Vec3;

       /**
        * @field
        * @static
        * @readonly
        * @type pc.Vec3
        * @name pc.Vec3.ZERO
        * @description A constant vector set to [0, 0, 0].
        */
       static ZERO: pc.Vec3;

   }

   /**
    * @name pc.Vec4
    * @class A 4-dimensional vector.
    * @description Creates a new Vec4 object
    */
   class Vec4 {
       /**
        * @name pc.Vec4
        * @class A 4-dimensional vector.
        * @description Creates a new Vec4 object
        */
       constructor();

       /**
        * @function
        * @name pc.Vec4#add
        * @description Adds a 4-dimensional vector to another in place.
        * @param {pc.Vec4} rhs The vector to add to the specified vector.
        * @returns {pc.Vec4} Self for chaining.
        * @example
        * var a = new pc.Vec4(10, 10, 10, 10);
        * var b = new pc.Vec4(20, 20, 20, 20);
        *
        * a.add(b);
        *
        * // Should output [30, 30, 30]
        * console.log("The result of the addition is: " + a.toString());
        */
       add(rhs: pc.Vec4): pc.Vec4;

       /**
        * @function
        * @name pc.Vec4#add2
        * @description Adds two 4-dimensional vectors together and returns the result.
        * @param {pc.Vec4} lhs The first vector operand for the addition.
        * @param {pc.Vec4} rhs The second vector operand for the addition.
        * @returns {pc.Vec4} Self for chaining.
        * @example
        * var a = new pc.Vec4(10, 10, 10, 10);
        * var b = new pc.Vec4(20, 20, 20, 20);
        * var r = new pc.Vec4();
        *
        * r.add2(a, b);
        * // Should output [30, 30, 30]
        *
        * console.log("The result of the addition is: " + r.toString());
        */
       add2(lhs: pc.Vec4, rhs: pc.Vec4): pc.Vec4;

       /**
        * @function
        * @name pc.Vec4#clone
        * @description Returns an identical copy of the specified 4-dimensional vector.
        * @returns {pc.Vec4} A 4-dimensional vector containing the result of the cloning.
        * @example
        * var v = new pc.Vec4(10, 20, 30, 40);
        * var vclone = v.clone();
        * console.log("The result of the cloning is: " + vclone.toString());
        */
       clone(): pc.Vec4;

       /**
        * @function
        * @name pc.Vec4#copy
        * @description Copied the contents of a source 4-dimensional vector to a destination 4-dimensional vector.
        * @param {pc.Vec4} rhs A vector to copy to the specified vector.
        * @returns {pc.Vec4} Self for chaining.
        * @example
        * var src = new pc.Vec4(10, 20, 30, 40);
        * var dst = new pc.Vec4();
        *
        * dst.copy(src);
        *
        * console.log("The two vectors are " + (dst.equals(src) ? "equal" : "different"));
        */
       copy(rhs: pc.Vec4): pc.Vec4;

       /**
        * @function
        * @name pc.Vec4#dot
        * @description Returns the result of a dot product operation performed on the two specified 4-dimensional vectors.
        * @param {pc.Vec4} rhs The second 4-dimensional vector operand of the dot product.
        * @returns {Number} The result of the dot product operation.
        * @example
        * var v1 = new pc.Vec4(5, 10, 20, 40);
        * var v2 = new pc.Vec4(10, 20, 40, 80);
        * var v1dotv2 = v1.dot(v2);
        * console.log("The result of the dot product is: " + v1dotv2);
        */
       dot(rhs: pc.Vec4): Number;

       /**
        * @function
        * @name pc.Vec4#equals
        * @description Reports whether two vectors are equal.
        * @param {pc.Vec4} rhs The vector to compare to the specified vector.
        * @returns {Boolean} true if the vectors are equal and false otherwise.
        * @example
        * var a = new pc.Vec4(1, 2, 3, 4);
        * var b = new pc.Vec4(5, 6, 7, 8);
        * console.log("The two vectors are " + (a.equals(b) ? "equal" : "different"));
        */
       equals(rhs: pc.Vec4): Boolean;

       /**
        * @function
        * @name pc.Vec4#length
        * @description Returns the magnitude of the specified 4-dimensional vector.
        * @returns {Number} The magnitude of the specified 4-dimensional vector.
        * @example
        * var vec = new pc.Vec4(3, 4, 0, 0);
        * var len = vec.length();
        * // Should output 5
        * console.log("The length of the vector is: " + len);
        */
       length(): Number;

       /**
        * @function
        * @name pc.Vec4#lengthSq
        * @description Returns the magnitude squared of the specified 4-dimensional vector.
        * @returns {Number} The magnitude of the specified 4-dimensional vector.
        * @example
        * var vec = new pc.Vec4(3, 4, 0);
        * var len = vec.lengthSq();
        * // Should output 25
        * console.log("The length squared of the vector is: " + len);
        */
       lengthSq(): Number;

       /**
        * @function
        * @name pc.Vec4#lerp
        * @description Returns the result of a linear interpolation between two specified 4-dimensional vectors.
        * @param {pc.Vec4} lhs The 4-dimensional to interpolate from.
        * @param {pc.Vec4} rhs The 4-dimensional to interpolate to.
        * @param {Number} alpha The value controlling the point of interpolation. Between 0 and 1, the linear interpolant
        * will occur on a straight line between lhs and rhs. Outside of this range, the linear interpolant will occur on
        * a ray extrapolated from this line.
        * @returns {pc.Vec4} Self for chaining.
        * @example
        * var a = new pc.Vec4(0, 0, 0, 0);
        * var b = new pc.Vec4(10, 10, 10, 10);
        * var r = new pc.Vec4();
        *
        * r.lerp(a, b, 0);   // r is equal to a
        * r.lerp(a, b, 0.5); // r is 5, 5, 5, 5
        * r.lerp(a, b, 1);   // r is equal to b
        */
       lerp(lhs: pc.Vec4, rhs: pc.Vec4, alpha: Number): pc.Vec4;

       /**
        * @function
        * @name pc.Vec4#mul
        * @description Returns the result of multiplying the specified 4-dimensional vectors together.
        * @param {pc.Vec4} rhs The 4-dimensional vector used as the second multiplicand of the operation.
        * @returns {pc.Vec4} Self for chaining.
        * @example
        * var a = new pc.Vec4(2, 3, 4, 5);
        * var b = new pc.Vec4(4, 5, 6, 7);
        *
        * a.mul(b);
        *
        * // Should output 8, 15, 24, 35
        * console.log("The result of the multiplication is: " + a.toString());
        */
       mul(rhs: pc.Vec4): pc.Vec4;

       /**
        * @function
        * @name pc.Vec4#mul2
        * @description Returns the result of multiplying the specified 4-dimensional vectors together.
        * @param {pc.Vec4} lhs The 4-dimensional vector used as the first multiplicand of the operation.
        * @param {pc.Vec4} rhs The 4-dimensional vector used as the second multiplicand of the operation.
        * @returns {pc.Vec4} Self for chaining.
        * @example
        * var a = new pc.Vec4(2, 3, 4, 5);
        * var b = new pc.Vec4(4, 5, 6, 7);
        * var r = new pc.Vec4();
        *
        * r.mul2(a, b);
        *
        * // Should output 8, 15, 24, 35
        * console.log("The result of the multiplication is: " + r.toString());
        */
       mul2(lhs: pc.Vec4, rhs: pc.Vec4): pc.Vec4;

       /**
        * @function
        * @name pc.Vec4#normalize
        * @description Returns the specified 4-dimensional vector copied and converted to a unit vector.
        * If the vector has a length of zero, the vector's elements will be set to zero.
        * @returns {pc.Vec4} The result of the normalization.
        * @example
        * var v = new pc.Vec4(25, 0, 0, 0);
        *
        * v.normalize();
        *
        * // Should output 1, 0, 0, 0
        * console.log("The result of the vector normalization is: " + v.toString());
        */
       normalize(): pc.Vec4;

       /**
        * @function
        * @name pc.Vec4#scale
        * @description Scales each dimension of the specified 4-dimensional vector by the supplied
        * scalar value.
        * @param {Number} scalar The value by which each vector component is multiplied.
        * @returns {pc.Vec4} Self for chaining.
        * @example
        * var v = new pc.Vec4(2, 4, 8, 16);
        *
        * // Multiply by 2
        * v.scale(2);
        *
        * // Negate
        * v.scale(-1);
        *
        * // Divide by 2
        * v.scale(0.5);
        */
       scale(scalar: Number): pc.Vec4;

       /**
        * @function
        * @name pc.Vec4#set
        * @description Sets the specified 4-dimensional vector to the supplied numerical values.
        * @param {Number} x The value to set on the first component of the vector.
        * @param {Number} y The value to set on the second component of the vector.
        * @param {Number} z The value to set on the third component of the vector.
        * @param {Number} w The value to set on the fourth component of the vector.
        * @example
        * var v = new pc.Vec4();
        * v.set(5, 10, 20, 40);
        *
        * // Should output 5, 10, 20, 40
        * console.log("The result of the vector set is: " + v.toString());
        */
       set(x: Number, y: Number, z: Number, w: Number): void;

       /**
        * @function
        * @name pc.Vec4#sub
        * @description Subtracts a 4-dimensional vector from another in place.
        * @param {pc.Vec4} rhs The vector to add to the specified vector.
        * @returns {pc.Vec4} Self for chaining.
        * @example
        * var a = new pc.Vec4(10, 10, 10, 10);
        * var b = new pc.Vec4(20, 20, 20, 20);
        *
        * a.sub(b);
        *
        * // Should output [-10, -10, -10, -10]
        * console.log("The result of the subtraction is: " + a.toString());
        */
       sub(rhs: pc.Vec4): pc.Vec4;

       /**
        * @function
        * @name pc.Vec4#sub2
        * @description Subtracts two 4-dimensional vectors from one another and returns the result.
        * @param {pc.Vec4} lhs The first vector operand for the subtraction.
        * @param {pc.Vec4} rhs The second vector operand for the subtraction.
        * @returns {pc.Vec4} Self for chaining.
        * @example
        * var a = new pc.Vec4(10, 10, 10, 10);
        * var b = new pc.Vec4(20, 20, 20, 20);
        * var r = new pc.Vec4();
        *
        * r.sub2(a, b);
        *
        * // Should output [-10, -10, -10, -10]
        * console.log("The result of the subtraction is: " + r.toString());
        */
       sub2(lhs: pc.Vec4, rhs: pc.Vec4): pc.Vec4;

       /**
        * @function
        * @name pc.Vec4#toString
        * @description Converts the vector to string form.
        * @returns {String} The vector in string form.
        * @example
        * var v = new pc.Vec4(20, 10, 5, 0);
        * // Should output '[20, 10, 5, 0]'
        * console.log(v.toString());
        */
       toString(): String;

       /**
        * @field
        * @type Number
        * @name pc.Vec4#x
        * @description The first component of the vector.
        * @example
        * var vec = new pc.Vec4(10, 20, 30, 40);
        *
        * // Get x
        * var x = vec.x;
        *
        * // Set x
        * vec.x = 0;
        */
       x: Number;

       /**
        * @field
        * @type Number
        * @name pc.Vec4#y
        * @description The second component of the vector.
        * @example
        * var vec = new pc.Vec4(10, 20, 30, 40);
        *
        * // Get y
        * var y = vec.y;
        *
        * // Set y
        * vec.y = 0;
        */
       y: Number;

       /**
        * @field
        * @type Number
        * @name pc.Vec4#z
        * @description The third component of the vector.
        * @example
        * var vec = new pc.Vec4(10, 20, 30, 40);
        *
        * // Get z
        * var z = vec.z;
        *
        * // Set z
        * vec.z = 0;
        */
       z: Number;

       /**
        * @field
        * @type Number
        * @name pc.Vec4#w
        * @description The fourth component of the vector.
        * @example
        * var vec = new pc.Vec4(10, 20, 30, 40);
        *
        * // Get w
        * var w = vec.w;
        *
        * // Set w
        * vec.w = 0;
        */
       w: Number;

       /**
        * @field
        * @static
        * @readonly
        * @type pc.Vec4
        * @name pc.Vec4.ONE
        * @description A constant vector set to [1, 1, 1, 1].
        */
       static ONE: pc.Vec4;

       /**
        * @field
        * @static
        * @readonly
        * @type pc.Vec4
        * @name pc.Vec4.ZERO
        * @description A constant vector set to [0, 0, 0, 0].
        */
       static ZERO: pc.Vec4;

   }

   /**
    * @name pc.Http
    * @class Used to send and receive HTTP requests.
    * @description Create a new Http instance. Note: By default a PlayCanvas application creates an instance of this object at `pc.http`.
    */
   class Http {
       /**
        * @name pc.Http
        * @class Used to send and receive HTTP requests.
        * @description Create a new Http instance. Note: By default a PlayCanvas application creates an instance of this object at `pc.http`.
        */
       constructor();

       /**
        * @function
        * @name pc.Http#get
        * @description Perform an HTTP GET request to the given url.
        * @param {String} url
        * @param {Object} [options] Additional options
        * @param {Object} [options.headers] HTTP headers to add to the request
        * @param {Boolean} [options.async] Make the request asynchronously (default: true)
        * @param {Object} [options.cache] If false, then add a timestamp to the request to prevent caching
        * @param {Boolean} [options.withCredentials] Send cookies with this request (default: true)
        * @param {String} [options.responseType] Override the response type
        * @param {Document | Object} [options.postdata] Data to send in the body of the request.
        * Some content types are handled automatically, If postdata is an XML Document it is handled, if the Content-Type header is set to 'application/json' then
        * the postdata is JSON stringified, otherwise by default the data is sent as form-urlencoded
        * @param {Object} [options.cache] If false, then add a timestamp to the request to prevent caching
        * @param {Function} callback The callback used when the response has returned. Passed (err, data) where data is the response (format depends on response type, text, Object, ArrayBuffer, XML) and err is the error code.
        * @example
        * pc.http.get("http://example.com/", function (err, response) {
        *     console.log(response);
        * });
        */
       get(url: String, options?: { headers: Object, async: Boolean, cache: Object, withCredentials: Boolean, responseType: String, postdata: (Document|Object) }, callback: (() => any)): void;

       /**
        * @function
        * @name pc.Http#post
        * @description Perform an HTTP POST request to the given url
        * @param {String} url The URL to make the request to
        * @param {Object} [options] Additional options
        * @param {Object} [options.headers] HTTP headers to add to the request
        * @param {Boolean} [options.async] Make the request asynchronously (default: true)
        * @param {Object} [options.cache] If false, then add a timestamp to the request to prevent caching
        * @param {Boolean} [options.withCredentials] Send cookies with this request (default: true)
        * @param {String} [options.responseType] Override the response type
        * @param {Object} [options.cache] If false, then add a timestamp to the request to prevent caching
        * @param {Object} data Data to send in the body of the request.
        * Some content types are handled automatically, If postdata is an XML Document it is handled, if the Content-Type header is set to 'application/json' then
        * the postdata is JSON stringified, otherwise by default the data is sent as form-urlencoded
        * @param {Function} callback The callback used when the response has returned. Passed (err, data) where data is the response (format depends on response type, text, Object, ArrayBuffer, XML) and err is the error code.
        */
       post(url: String, options?: { headers: Object, async: Boolean, cache: Object, withCredentials: Boolean, responseType: String }, data: Object, callback: (() => any)): void;

       /**
        * @function
        * @name pc.Http#put
        * @description Perform an HTTP PUT request to the given url
        * @param {String} url The URL to make the request to
        * @param {Object} [options] Additional options
        * @param {Object} [options.headers] HTTP headers to add to the request
        * @param {Boolean} [options.async] Make the request asynchronously (default: true)
        * @param {Object} [options.cache] If false, then add a timestamp to the request to prevent caching
        * @param {Boolean} [options.withCredentials] Send cookies with this request (default: true)
        * @param {String} [options.responseType] Override the response type
        * @param {Object} [options.cache] If false, then add a timestamp to the request to prevent caching
        * @param {Document | Object} data Data to send in the body of the request.
        * Some content types are handled automatically, If postdata is an XML Document it is handled, if the Content-Type header is set to 'application/json' then
        * the postdata is JSON stringified, otherwise by default the data is sent as form-urlencoded
        * @param {Function} callback The callback used when the response has returned. Passed (err, data) where data is the response (format depends on response type, text, Object, ArrayBuffer, XML) and err is the error code.
        */
       put(url: String, options?: { headers: Object, async: Boolean, cache: Object, withCredentials: Boolean, responseType: String }, data: (Document|Object), callback: (() => any)): void;

       /**
        * @function
        * @name pc.Http#del
        * @description Perform an HTTP DELETE request to the given url
        * @param {Object} url The URL to make the request to
        * @param {Object} [options] Additional options
        * @param {Object} [options.headers] HTTP headers to add to the request
        * @param {Boolean} [options.async] Make the request asynchronously (default: true)
        * @param {Object} [options.cache] If false, then add a timestamp to the request to prevent caching
        * @param {Boolean} [options.withCredentials] Send cookies with this request (default: true)
        * @param {String} [options.responseType] Override the response type
        * @param {Document | Object} [options.postdata] Data to send in the body of the request.
        * Some content types are handled automatically, If postdata is an XML Document it is handled, if the Content-Type header is set to 'application/json' then
        * the postdata is JSON stringified, otherwise by default the data is sent as form-urlencoded
        * @param {Object} [options.cache] If false, then add a timestamp to the request to prevent caching
        * @param {Function} callback The callback used when the response has returned. Passed (err, data) where data is the response (format depends on response type, text, Object, ArrayBuffer, XML) and err is the error code.
        */
       del(url: Object, options?: { headers: Object, async: Boolean, cache: Object, withCredentials: Boolean, responseType: String, postdata: (Document|Object) }, callback: (() => any)): void;

       /**
        * @function
        * @name pc.Http#request
        * @description Make a general purpose HTTP request.
        * @param {String} method The HTTP method "GET", "POST", "PUT", "DELETE"
        * @param {String} url The url to make the request to
        * @param {Object} [options] Additional options
        * @param {Object} [options.headers] HTTP headers to add to the request
        * @param {Boolean} [options.async] Make the request asynchronously (default: true)
        * @param {Object} [options.cache] If false, then add a timestamp to the request to prevent caching
        * @param {Boolean} [options.withCredentials] Send cookies with this request (default: true)
        * @param {String} [options.responseType] Override the response type
        * @param {Document|Object} [options.postdata] Data to send in the body of the request.
        * Some content types are handled automatically, If postdata is an XML Document it is handled, if the Content-Type header is set to 'application/json' then
        * the postdata is JSON stringified, otherwise by default the data is sent as form-urlencoded
        * @param {Object} [options.cache] If false, then add a timestamp to the request to prevent caching
        * @param {Function} callback The callback used when the response has retured. Passed (err, data) where data is the response (format depends on response type, text, Object, ArrayBuffer, XML) and err is the error code.
        */
       request(method: String, url: String, options?: { headers: Object, async: Boolean, cache: Object, withCredentials: Boolean, responseType: String, postdata: (Document|Object) }, callback: (() => any)): void;

   }

   /**
    * @function
    * @name pc.createStyle
    * @description Creates a &lt;style&gt; DOM element from a string that contains CSS
    * @param {String} cssString A string that contains valid CSS
    * @example
    * var css = 'body {height: 100;}';
    * var style = pc.createStyle(css);
    * document.head.appendChild(style);
    * @return {Element} The style DOM element
    */
   function createStyle(cssString: String): Element;

   /**
    * @name pc.ResourceLoader
    * @class Load resource data, potentially from remote sources. Caches resource on load to prevent multiple requests
    * Add ResourceHandlers to handle different types of resources
    */
   class ResourceLoader {
       /**
        * @name pc.ResourceLoader
        * @class Load resource data, potentially from remote sources. Caches resource on load to prevent multiple requests
        * Add ResourceHandlers to handle different types of resources
        */
       constructor();

       /**
        * @function
        * @name pc.ResourceLoader#addHandler
        * @description Add a handler for a resource type. Handler should support: load(url, callback) and open(url, data).
        * Handlers can optionally support patch(asset, assets) to handle dependencies on other assets
        * @param {String} type The name of the type that the handler will load
        * @param {pc.ResourceHandler} handler An instance of a resource handler supporting load() and open().
        * @example
        * var loader = new ResourceLoader();
        * loader.addHandler("json", new pc.JsonHandler());
        */
       addHandler(type: String, handler: pc.ResourceHandler): void;

       /**
        * @function
        * @name pc.ResourceLoader#load
        * @description Make a request for a resource from a remote URL. Parse the returned data using the handler for the specified type
        * When loaded and parsed use the callback to return an instance of the resource. Handles multiple requests for
        * @param {String} url The URL of the resource to load
        * @param {String} type The type of resource expected
        * @param {Function} callback The callback used when the resource is loaded or an error occurs. Passed (err, resource) where err is null if there are no errors
        * @example
        * app.loader.load("../path/to/texture.png", "texture", function (err, texture) {
        *     // use texture here
        * });
        */
       load(url: String, type: String, callback: (() => any)): void;

       /**
        * @function
        * @name pc.ResourceLoader#open
        * @description Convert raw resource data into a resource instance. e.g. take 3D model format JSON and return a pc.Model.
        */
       open(): void;

       /**
        * @function
        * @name pc.ResourceLoader#patch
        * @description Perform any operations on a resource, that requires a dependency on it's asset data or any other asset data
        */
       patch(): void;

       /**
        * @function
        * @name pc.ResourceLoader#getFromCache
        * @description Check cache for resource from a URL. If present return the cached value
        */
       getFromCache(): void;

       /**
        * @function
        * @name  pc.ResourceLoader#destroy
        * @description Destroys resource loader
        */
       destroy(): void;

   }

   /**
    * @name pc.ModelHandler
    * @class Resource Handler for creating pc.Model resources
    * @description {@link pc.ResourceHandler} use to load 3D model resources
    * @param {pc.GraphicsDevice} device The graphics device that will be rendering
    */
   class ModelHandler {
       /**
        * @name pc.ModelHandler
        * @class Resource Handler for creating pc.Model resources
        * @description {@link pc.ResourceHandler} use to load 3D model resources
        * @param {pc.GraphicsDevice} device The graphics device that will be rendering
        */
       constructor(device: pc.GraphicsDevice);

       /**
        * @function
        * @name pc.ModelHandler#load
        * @description Fetch model data from a remote url
        */
       load(): void;

       /**
        * @function
        * @name pc.ModelHandler#open
        * @description Process data in deserialized format into a pc.Model object
        * @param {Object} data The data from model file deserialized into a Javascript Object
        */
       open(data: Object): void;

   }

   /**
    * @name pc.ScriptHandler
    * @class ResourceHandler for loading JavaScript files dynamically
    * Two types of JavaScript files can be loaded, PlayCanvas scripts which contain calls to {@link pc.createScript},
    * or regular JavaScripts files, such as third-party libraries.
    * @param {pc.Application} app The running {pc.Application}
    */
   class ScriptHandler {
       /**
        * @name pc.ScriptHandler
        * @class ResourceHandler for loading JavaScript files dynamically
        * Two types of JavaScript files can be loaded, PlayCanvas scripts which contain calls to {@link pc.createScript},
        * or regular JavaScripts files, such as third-party libraries.
        * @param {pc.Application} app The running {pc.Application}
        */
       constructor(app: pc.Application);

   }

   /**
    * @name pc.BasicMaterial
    * @class A Basic material is is for rendering unlit geometry, either using a constant color or a
    * color map modulated with a color.
    * @property {pc.Color} color The flat color of the material (RGBA, where each component is 0 to 1).
    * @property {pc.Texture} colorMap The color map of the material. If specified, the color map is
    * modulated by the color property.
    * @example
    * // Create a new Basic material
    * var material = new pc.BasicMaterial();
    *
    * // Set the material to have a texture map that is multiplied by a red color
    * material.color.set(1, 0, 0);
    * material.colorMap = diffuseMap;
    *
    * // Notify the material that it has been modified
    * material.update();
    *
    * @extends pc.Material
    * @author Will Eastcott
    */
   class BasicMaterial extends pc.Material {
       /**
        * @name pc.BasicMaterial
        * @class A Basic material is is for rendering unlit geometry, either using a constant color or a
        * color map modulated with a color.
        * @property {pc.Color} color The flat color of the material (RGBA, where each component is 0 to 1).
        * @property {pc.Texture} colorMap The color map of the material. If specified, the color map is
        * modulated by the color property.
        * @example
        * // Create a new Basic material
        * var material = new pc.BasicMaterial();
        *
        * // Set the material to have a texture map that is multiplied by a red color
        * material.color.set(1, 0, 0);
        * material.colorMap = diffuseMap;
        *
        * // Notify the material that it has been modified
        * material.update();
        *
        * @extends pc.Material
        * @author Will Eastcott
        */
       constructor();

       /**
        * @function
        * @name pc.BasicMaterial#clone
        * @description Duplicates a Basic material. All properties are duplicated except textures
        * where only the references are copied.
        * @returns {pc.BasicMaterial} A cloned Basic material.
        */
       clone(): pc.BasicMaterial;

   }

   /**
    * @private
    * @name pc.Camera
    * @class A camera.
    */
   class Camera {
       /**
        * @private
        * @name pc.Camera
        * @class A camera.
        */
       constructor();

       /**
        * @private
        * @function
        * @name pc.Camera#clone
        * @description Duplicates a camera node but does not 'deep copy' the hierarchy.
        * @returns {pc.Camera} A cloned Camera.
        */
       private clone(): pc.Camera;

       /**
        * @private
        * @function
        * @name pc.Camera#worldToScreen
        * @description Convert a point from 3D world space to 2D canvas pixel space.
        * @param {pc.Vec3} worldCoord The world space coordinate to transform.
        * @param {Number} cw The width of PlayCanvas' canvas element.
        * @param {Number} ch The height of PlayCanvas' canvas element.
        * @param {pc.Vec3} [screenCoord] 3D vector to recieve screen coordinate result.
        * @returns {pc.Vec3} The screen space coordinate.
        */
       private worldToScreen(worldCoord: pc.Vec3, cw: Number, ch: Number, screenCoord?: pc.Vec3): pc.Vec3;

       /**
        * @private
        * @function
        * @name pc.Camera#screenToWorld
        * @description Convert a point from 2D canvas pixel space to 3D world space.
        * @param {Number} x x coordinate on PlayCanvas' canvas element.
        * @param {Number} y y coordinate on PlayCanvas' canvas element.
        * @param {Number} z The distance from the camera in world space to create the new point.
        * @param {Number} cw The width of PlayCanvas' canvas element.
        * @param {Number} ch The height of PlayCanvas' canvas element.
        * @param {pc.Vec3} [worldCoord] 3D vector to recieve world coordinate result.
        * @returns {pc.Vec3} The world space coordinate.
        */
       private screenToWorld(x: Number, y: Number, z: Number, cw: Number, ch: Number, worldCoord?: pc.Vec3): pc.Vec3;

       /**
        * @private
        * @function
        * @name pc.Camera#getClearOptions
        * @description Retrieves the options used to determine how the camera's render target will be cleared.
        * @return {Object} The options determining the behaviour of render target clears.
        */
       private getClearOptions(): Object;

       /**
        * @private
        * @function
        * @name pc.Camera#getProjectionMatrix
        * @description Retrieves the projection matrix for the specified camera.
        * @returns {pc.Mat4} The camera's projection matrix.
        */
       private getProjectionMatrix(): pc.Mat4;

       /**
        * @private
        * @function
        * @name pc.Camera#setClearOptions
        * @description Sets the options used to determine how the camera's render target will be cleared.
        * @param {Object} clearOptions The options determining the behaviour of subsequent render target clears.
        * @param {Number[]} clearOptions.color The options determining the behaviour of subsequent render target clears.
        * @param {Number} clearOptions.depth The options determining the behaviour of subsequent render target clears.
        * @param {pc.CLEARFLAG} clearOptions.flags The options determining the behaviour of subsequent render target clears.
        */
       private setClearOptions(clearOptions: { color: Number[], depth: Number, flags: pc.CLEARFLAG }): void;

       /**
        * @private
        * @type Number
        * @name pc.Camera#aspectRatio
        * @description Camera's aspect ratio.
        */
       private aspectRatio: Number;

       /**
        * @private
        * @type Number
        * @name pc.Camera#projection
        * @description Camera's projection type, to specify whether projection is orthographic (parallel projection) or perspective. Can be:
        * <ul>
        *     <li>{@link pc.PROJECTION_PERSPECTIVE}</li>
        *     <li>{@link pc.PROJECTION_ORTHOGRAPHIC}</li>
        * </ul>
        */
       private projection: Number;

       /**
        * @private
        * @type Number
        * @name pc.Camera#nearClip
        * @description Camera's distance to near clipping plane
        */
       private nearClip: Number;

       /**
        * @private
        * @type Number
        * @name pc.Camera#farClip
        * @description Camera's distance to far clipping plane
        */
       private farClip: Number;

       /**
        * @private
        * @type Number
        * @name pc.Camera#fov
        * @description Camera's field of view in degrees. This angle is in degrees
        * and is measured vertically or horizontally between the sides of camera planes.
        * hirozontalFov property defines the fov axis - vertical or horizontal.
        */
       private fov: Number;

       /**
        * @private
        * @type Boolean
        * @name pc.Camera#horizontalFov
        * @description Camera's horizontal or vertical field of view.
        */
       private horizontalFov: Boolean;

       /**
        * @private
        * @type Number
        * @name pc.Camera#orthoHeight
        * @description Camera's half height of the orthographics view.
        */
       private orthoHeight: Number;

       /**
        * @private
        * @type Array
        * @name pc.Camera#clearColor
        * @description Camera's clear color.
        */
       private clearColor: Array;

       /**
        * @private
        * @type Number
        * @name pc.Camera#clearDepth
        * @description Camera's clear depth value.
        */
       private clearDepth: Number;

       /**
        * @private
        * @type Number
        * @name pc.Camera#clearStencil
        * @description Camera's clear stencil value.
        */
       private clearStencil: Number;

       /**
        * @private
        * @type Number
        * @name pc.Camera#clearFlags
        * @description Camera's clear flags bits value.
        */
       private clearFlags: Number;

   }

   /**
    * @private
    * @name pc.DepthMaterial
    * @class A Depth material is is for rendering linear depth values to a render target.
    * @author Will Eastcott
    */
   class DepthMaterial {
       /**
        * @private
        * @name pc.DepthMaterial
        * @class A Depth material is is for rendering linear depth values to a render target.
        * @author Will Eastcott
        */
       constructor();

       /**
        * @private
        * @function
        * @name pc.DepthMaterial#clone
        * @description Duplicates a Depth material.
        * @returns {pc.DepthMaterial} A cloned Depth material.
        */
       private clone(): pc.DepthMaterial;

   }

   /**
    * @private
    * @name pc.ForwardRenderer
    * @class The forward renderer render scene objects.
    * @description Creates a new forward renderer object.
    * @param {pc.GraphicsDevice} graphicsDevice The graphics device used by the renderer.
    */
   class ForwardRenderer {
       /**
        * @private
        * @name pc.ForwardRenderer
        * @class The forward renderer render scene objects.
        * @description Creates a new forward renderer object.
        * @param {pc.GraphicsDevice} graphicsDevice The graphics device used by the renderer.
        */
       constructor(graphicsDevice: pc.GraphicsDevice);

       /**
        * @private
        * @function
        * @name pc.ForwardRenderer#render
        * @description Renders the scene using the specified camera.
        * @param {pc.Scene} scene The scene to render.
        * @param {pc.Camera} camera The camera with which to render the scene.
        */
       private render(scene: pc.Scene, camera: pc.Camera): void;

   }

   /**
    * @name pc.GraphNode
    * @class A hierarchical scene node.
    * @property {String} name The non-unique name of a graph node.
    * @property {pc.Tags} tags Interface for tagging graph nodes. Tag based searches can be performed using the {@link pc.GraphNode#findByTag} function.
    */
   class GraphNode {
       /**
        * @name pc.GraphNode
        * @class A hierarchical scene node.
        * @property {String} name The non-unique name of a graph node.
        * @property {pc.Tags} tags Interface for tagging graph nodes. Tag based searches can be performed using the {@link pc.GraphNode#findByTag} function.
        */
       constructor();

       /**
        * @readonly
        * @name pc.GraphNode#right
        * @description The normalized local space X-axis vector of the graph node in world space.
        * @type pc.Vec3
        */
       right: pc.Vec3;

       /**
        * @readonly
        * @name pc.GraphNode#up
        * @description The normalized local space Y-axis vector of the graph node in world space.
        * @type pc.Vec3
        */
       up: pc.Vec3;

       /**
        * @readonly
        * @name pc.GraphNode#forward
        * @description The normalized local space negative Z-axis vector of the graph node in world space.
        * @type pc.Vec3
        */
       forward: pc.Vec3;

       /**
        * @name pc.GraphNode#enabled
        * @type Boolean
        * @description Enable or disable a GraphNode. If one of the GraphNode's parents is disabled
        * there will be no other side effects. If all the parents are enabled then
        * the new value will activate / deactivate all the enabled children of the GraphNode.
        */
       enabled: Boolean;

       /**
        * @readonly
        * @name pc.GraphNode#parent
        * @type pc.GraphNode
        * @description A read-only property to get a parent graph node
        */
       parent: pc.GraphNode;

       /**
        * @readonly
        * @name pc.GraphNode#root
        * @type pc.GraphNode
        * @description A read-only property to get highest graph node from current node
        */
       root: pc.GraphNode;

       /**
        * @readonly
        * @name pc.GraphNode#children
        * @type pc.GraphNode[]
        * @description A read-only property to get the children of this graph node.
        */
       children: pc.GraphNode[];

       /**
        * @function
        * @name pc.GraphNode#find
        * @description Search the graph for nodes using a supplied method that implements test for seach.
        * @param {Function} fn Method which is executed for each descendant node, to test if node satisfies search logic. Returning true from that method will include node into results.
        * @returns {pc.GraphNode[]} An array of GraphNodes
        * @example
        * // finds all nodes that have model component and have `door` in their lower cased name
        * var doors = house.find(function(node) {
        *     return node.model && node.name.toLowerCase().indexOf('door') !== -1;
        * });
        */
       find(fn: (() => any)): pc.GraphNode[];

       /**
        * @function
        * @name pc.GraphNode#findOne
        * @description Depth first search the graph for nodes using suplied method to find first matching node.
        * @param {Function} fn Method which is executed for each descendant node, to test if node satisfies search logic. Returning true from that method will stop search and return that node.
        * @returns {pc.GraphNode} A single graph node.
        * @example
        * // find node that is called `head` and have model component
        * var head = player.find(function(node) {
        *     return node.model && node.name === 'head';
        * });
        */
       findOne(fn: (() => any)): pc.GraphNode;

       /**
        * @function
        * @name pc.GraphNode#findByTag
        * @description Return all graph nodes that satisfy the search query.
        * Query can be simply a string, or comma separated strings,
        * to have inclusive results of assets that match at least one query.
        * A query that consists of an array of tags can be used to match graph nodes that have each tag of array
        * @param {String} query Name of a tag or array of tags
        * @returns {pc.GraphNode[]} A list of all graph nodes that match the query
        * @example
        * var animals = node.findByTag("animal");
        * // returns all graph nodes that tagged by `animal`
        * @example
        * var birdsAndMammals = node.findByTag("bird", "mammal");
        * // returns all graph nodes that tagged by `bird` OR `mammal`
        * @example
        * var meatEatingMammals = node.findByTag([ "carnivore", "mammal" ]);
        * // returns all assets that tagged by `carnivore` AND `mammal`
        * @example
        * var meatEatingMammalsAndReptiles = node.findByTag([ "carnivore", "mammal" ], [ "carnivore", "reptile" ]);
        * // returns all assets that tagged by (`carnivore` AND `mammal`) OR (`carnivore` AND `reptile`)
        */
       findByTag(query: String): pc.GraphNode[];

       /**
        * @function
        * @name pc.GraphNode#findByName
        * @description Get the first node found in the graph with the name. The search
        * is depth first.
        * @param {String} name The name of the graph.
        * @returns {pc.GraphNode} The first node to be found matching the supplied name.
        */
       findByName(name: String): pc.GraphNode;

       /**
        * @function
        * @name pc.GraphNode#findByPath
        * @description Get the first node found in the graph by its full path in the graph.
        * The full path has this form 'parent/child/sub-child'. The search is depth first.
        * @param {String} path The full path of the pc.GraphNode.
        * @returns {pc.GraphNode} The first node to be found matching the supplied path.
        * @example
        * var path = this.entity.findByPath('child/another_child');
        */
       findByPath(path: String): pc.GraphNode;

       /**
        * @function
        * @name  pc.GraphNode#getPath
        * @description Gets the path of the entity relative to the root of the hierarchy
        * @return {String} The path
        * @example
        * var path = this.entity.getPath();
        */
       getPath(): String;

       /**
        * @private
        * @deprecated
        * @function
        * @name pc.GraphNode#getRoot
        * @description Get the highest ancestor node from this graph node.
        * @return {pc.GraphNode} The root node of the hierarchy to which this node belongs.
        * @example
        * var root = this.entity.getRoot();
        */
       private getRoot(): pc.GraphNode;

       /**
        * @private
        * @deprecated
        * @function
        * @name pc.GraphNode#getParent
        * @description Get the parent GraphNode
        * @returns {pc.GraphNode} The parent node
        * @example
        * var parent = this.entity.getParent();
        */
       private getParent(): pc.GraphNode;

       /**
        * @function
        * @name pc.GraphNode#isDescendantOf
        * @description Check if node is descendant of another node.
        * @returns {Boolean} if node is descendant of another node
        * @example
        * if (roof.isDescendantOf(house)) {
        *     // roof is descendant of house entity
        * }
        */
       isDescendantOf(): Boolean;

       /**
        * @function
        * @name pc.GraphNode#isAncestorOf
        * @description Check if node is ancestor for another node.
        * @returns {Boolean} if node is ancestor for another node
        * @example
        * if (body.isAncestorOf(foot)) {
        *     // foot is within body's hierarchy
        * }
        */
       isAncestorOf(): Boolean;

       /**
        * @private
        * @deprecated
        * @function
        * @name pc.GraphNode#getChildren
        * @description Get the children of this graph node.
        * @returns {pc.GraphNode[]} The child array of this node.
        * @example
        * var children = this.entity.getChildren();
        * for (i = 0; i < children.length; i++) {
        * // children[i]
        * }
        */
       private getChildren(): pc.GraphNode[];

       /**
        * @function
        * @name pc.GraphNode#getEulerAngles
        * @description Get the world space rotation for the specified GraphNode in Euler angle
        * form. The order of the returned Euler angles is XYZ. The value returned by this function
        * should be considered read-only. In order to set the world-space rotation of the graph
        * node, use {@link pc.GraphNode#setEulerAngles}.
        * @returns {pc.Vec3} The world space rotation of the graph node in Euler angle form.
        * @example
        * var angles = this.entity.getEulerAngles(); // [0,0,0]
        * angles[1] = 180; // rotate the entity around Y by 180 degrees
        * this.entity.setEulerAngles(angles);
        */
       getEulerAngles(): pc.Vec3;

       /**
        * @function
        * @name pc.GraphNode#getLocalEulerAngles
        * @description Get the rotation in local space for the specified GraphNode. The rotation
        * is returned as eurler angles in a 3-dimensional vector where the order is XYZ. The
        * returned vector should be considered read-only. To update the local rotation, use
        * {@link pc.GraphNode#setLocalEulerAngles}.
        * @returns {pc.Vec3} The local space rotation of the graph node as euler angles in XYZ order.
        * @example
        * var angles = this.entity.getLocalEulerAngles();
        * angles[1] = 180;
        * this.entity.setLocalEulerAngles(angles);
        */
       getLocalEulerAngles(): pc.Vec3;

       /**
        * @function
        * @name pc.GraphNode#getLocalPosition
        * @description Get the position in local space for the specified GraphNode. The position
        * is returned as a 3-dimensional vector. The returned vector should be considered read-only.
        * To update the local position, use {@link pc.GraphNode#setLocalPosition}.
        * @returns {pc.Vec3} The local space position of the graph node.
        * @example
        * var position = this.entity.getLocalPosition();
        * position[0] += 1; // move the entity 1 unit along x.
        * this.entity.setLocalPosition(position);
        */
       getLocalPosition(): pc.Vec3;

       /**
        * @function
        * @name pc.GraphNode#getLocalRotation
        * @description Get the rotation in local space for the specified GraphNode. The rotation
        * is returned as a quaternion. The returned quaternion should be considered read-only.
        * To update the local rotation, use {@link pc.GraphNode#setLocalRotation}.
        * @returns {pc.Quat} The local space rotation of the graph node as a quaternion.
        * @example
        * var rotation = this.entity.getLocalRotation();
        */
       getLocalRotation(): pc.Quat;

       /**
        * @function
        * @name pc.GraphNode#getLocalScale
        * @description Get the scale in local space for the specified GraphNode. The scale
        * is returned as a 3-dimensional vector. The returned vector should be considered read-only.
        * To update the local scale, use {@link pc.GraphNode#setLocalScale}.
        * @returns {pc.Vec3} The local space scale of the graph node.
        * @example
        * var scale = this.entity.getLocalScale();
        * scale.x = 100;
        * this.entity.setLocalScale(scale);
        */
       getLocalScale(): pc.Vec3;

       /**
        * @function
        * @name pc.GraphNode#getLocalTransform
        * @description Get the local transform matrix for this graph node. This matrix
        * is the transform relative to the node's parent's world transformation matrix.
        * @returns {pc.Mat4} The node's local transformation matrix.
        * @example
        * var transform = this.entity.getLocalTransform();
        */
       getLocalTransform(): pc.Mat4;

       /**
        * @private
        * @deprecated
        * @function
        * @name pc.GraphNode#getName
        * @description Get the human-readable name for this graph node. Note the name
        * is not guaranteed to be unique. For Entities, this is the name that is set in the PlayCanvas Editor.
        * @returns {String} The name of the node.
        * @example
        * if (this.entity.getName() === "My Entity") {
        *     console.log("My Entity Found");
        * }
        */
       private getName(): String;

       /**
        * @function
        * @name pc.GraphNode#getPosition
        * @description Get the world space position for the specified GraphNode. The
        * value returned by this function should be considered read-only. In order to set
        * the world-space position of the graph node, use {@link pc.GraphNode#setPosition}.
        * @returns {pc.Vec3} The world space position of the graph node.
        * @example
        * var position = this.entity.getPosition();
        * position.x = 10;
        * this.entity.setPosition(position);
        */
       getPosition(): pc.Vec3;

       /**
        * @function
        * @name pc.GraphNode#getRotation
        * @description Get the world space rotation for the specified GraphNode in quaternion
        * form. The value returned by this function should be considered read-only. In order
        * to set the world-space rotation of the graph node, use {@link pc.GraphNode#setRotation}.
        * @returns {pc.Quat} The world space rotation of the graph node as a quaternion.
        * @example
        * var rotation = this.entity.getRotation();
        */
       getRotation(): pc.Quat;

       /**
        * @function
        * @name pc.GraphNode#getWorldTransform
        * @description Get the world transformation matrix for this graph node.
        * @returns {pc.Mat4} The node's world transformation matrix.
        * @example
        * var transform = this.entity.getWorldTransform();
        */
       getWorldTransform(): pc.Mat4;

       /**
        * @function
        * @name pc.GraphNode#reparent
        * @description Remove graph node from current parent and add as child to new parent
        * @param {pc.GraphNode} parent New parent to attach graph node to
        * @param {Number} index (optional) The child index where the child node should be placed.
        */
       reparent(parent: pc.GraphNode, index: Number): void;

       /**
        * @function
        * @name pc.GraphNode#setLocalEulerAngles^2
        * @description Sets the local space rotation of the specified graph node using euler angles.
        * Eulers are interpreted in XYZ order. Eulers must be specified in degrees.
        * @param {pc.Vec3} e vector containing euler angles in XYZ order.
        * @example
        * var angles = new pc.Vec3(0, 90, 0);
        * this.entity.setLocalEulerAngles(angles); // Set rotation of 90 degress around y-axis.
        */
       setLocalEulerAngles^2(e: pc.Vec3): void;

       /**
        * @function
        * @name pc.GraphNode#setLocalEulerAngles
        * @description Sets the local space rotation of the specified graph node using euler angles.
        * Eulers are interpreted in XYZ order. Eulers must be specified in degrees.
        * @param {Number} x rotation around x-axis in degrees.
        * @param {Number} y rotation around y-axis in degrees.
        * @param {Number} z rotation around z-axis in degrees.
        * @example
        * this.entity.setLocalEulerAngles(0, 90, 0); // Set rotation of 90 degress around y-axis.
        */
       setLocalEulerAngles(x: Number, y: Number, z: Number): void;

       /**
        * @function
        * @name pc.GraphNode#setLocalPosition^2
        * @description Sets the local space position of the specified graph node.
        * @param {pc.Vec3} pos position vector of graph node in local space.
        * @example
        * var pos = new pc.Vec3(0, 10, 0);
        * this.entity.setLocalPosition(pos)
        */
       setLocalPosition^2(pos: pc.Vec3): void;

       /**
        * @function
        * @name pc.GraphNode#setLocalPosition
        * @description Sets the local space position of the specified graph node.
        * @param {Number} x x-coordinate of local-space position.
        * @param {Number} y y-coordinate of local-space position.
        * @param {Number} z z-coordinate of local-space position.
        * @example
        * this.entity.setLocalPosition(0, 10, 0);
        */
       setLocalPosition(x: Number, y: Number, z: Number): void;

       /**
        * @function
        * @name pc.GraphNode#setLocalRotation^2
        * @description Sets the local space rotation of the specified graph node.
        * @param {Number} x X component of local space quaternion rotation.
        * @param {Number} y Y component of local space quaternion rotation.
        * @param {Number} z Z component of local space quaternion rotation.
        * @param {Number} w W component of local space quaternion rotation.
        * @example
        * // Set to the identity quaternion
        * this.entity.setLocalRotation(0, 0, 0, 1);
        */
       setLocalRotation^2(x: Number, y: Number, z: Number, w: Number): void;

       /**
        * @function
        * @name pc.GraphNode#setLocalRotation
        * @description Sets the local space rotation of the specified graph node.
        * @param {pc.Quat} q quaternion representing rotation of graph node in local space.
        * var q = pc.Quat();
        * this.entity.setLocalRotation(q);
        */
       setLocalRotation(q: pc.Quat): void;

       /**
        * @function
        * @name pc.GraphNode#setLocalScale^2
        * @description Sets the local space scale factor of the specified graph node.
        * @param {pc.Vec3} scale xyz-scale of graph node in local space.
        * @example
        * var scale = new pc.Vec3(10, 10, 10);
        * this.entity.setLocalScale(scale);
        */
       setLocalScale^2(scale: pc.Vec3): void;

       /**
        * @function
        * @name pc.GraphNode#setLocalScale
        * @description Sets the local space scale factor of the specified graph node.
        * @param {Number} x x-coordinate of local-space scale.
        * @param {Number} y y-coordinate of local-space scale.
        * @param {Number} z z-coordinate of local-space scale.
        * @example
        * this.entity.setLocalScale(10, 10, 10);
        */
       setLocalScale(x: Number, y: Number, z: Number): void;

       /**
        * @private
        * @deprecated
        * @function
        * @name pc.GraphNode#setName
        * @description Sets the non-unique name for this graph node.
        * @param {String} name The name for the node.
        * @example
        * this.entity.setName("My Entity");
        */
       private setName(name: String): void;

       /**
        * @function
        * @name pc.GraphNode#setPosition^2
        * @description Sets the world space position of the specified graph node.
        * @param {pc.Vec3} position world space position (xyz) of graph node.
        * @example
        * var position = new pc.Vec3(0, 10, 0);
        * this.entity.setPosition(position);
        */
       setPosition^2(position: pc.Vec3): void;

       /**
        * @function
        * @name pc.GraphNode#setPosition
        * @description Sets the world space position of the specified graph node.
        * @param {Number} x x-coordinate of world-space position.
        * @param {Number} y y-coordinate of world-space position.
        * @param {Number} z z-coordinate of world-space position.
        * @example
        * this.entity.setPosition(0, 10, 0);
        */
       setPosition(x: Number, y: Number, z: Number): void;

       /**
        * @function
        * @name pc.GraphNode#setRotation^2
        * @description Sets the world space rotation of the specified graph node using
        * the 4 components of a quaternion.
        * @param {Number} x X component of world space quaternion rotation.
        * @param {Number} y Y component of world space quaternion rotation.
        * @param {Number} z Z component of world space quaternion rotation.
        * @param {Number} w W component of world space quaternion rotation.
        * @example
        * this.entity.setRotation(0, 0, 0, 1);
        */
       setRotation^2(x: Number, y: Number, z: Number, w: Number): void;

       /**
        * @function
        * @name pc.GraphNode#setRotation
        * @description Sets the world space rotation of the specified graph node using
        * a quaternion.
        * @param {pc.Quat} rot World space rotation (xyz) of graph node.
        * @example
        * var q = new pc.Quat();
        * this.entity.setRotation(q);
        */
       setRotation(rot: pc.Quat): void;

       /**
        * @function
        * @name pc.GraphNode#setEulerAngles^2
        * @description Sets the world space orientation of the specified graph node
        * using Euler angles. Angles are specified in degress in XYZ order.
        * @param {pc.Vec3} angles Euler angles in degrees (XYZ order).
        * @example
        * var angles = new pc.Vec3(0, 90, 0);
        * this.entity.setEulerAngles(angles);
        */
       setEulerAngles^2(angles: pc.Vec3): void;

       /**
        * @function
        * @name pc.GraphNode#setEulerAngles
        * @description Sets the world space orientation of the specified graph node
        * using Euler angles. Angles are specified in degress in XYZ order.
        * @param {Number} ex Rotation around world space X axis in degrees.
        * @param {Number} ey Rotation around world space Y axis in degrees.
        * @param {Number} ez Rotation around world space Z axis in degrees.
        * @example
        * this.entity.setEulerAngles(0, 90, 0);
        */
       setEulerAngles(ex: Number, ey: Number, ez: Number): void;

       /**
        * @function
        * @name pc.GraphNode#addChild
        * @description Add a new child to the child list and update the parent value of the child node
        * @param {pc.GraphNode} node The new child to add
        * @example
        * var e = new pc.Entity(app);
        * this.entity.addChild(e);
        */
       addChild(node: pc.GraphNode): void;

       /**
        * @function
        * @name pc.GraphNode#insertChild
        * @description Insert a new child to the child list at the specified index and update the parent value of the child node
        * @param {pc.GraphNode} node The new child to insert
        * @param {Number} index The index in the child list of the parent where the new node will be inserted
        * @example
        * var e = new pc.Entity(app);
        * this.entity.insertChild(e, 1);
        */
       insertChild(node: pc.GraphNode, index: Number): void;

       /**
        * @function
        * @name pc.GraphNode#removeChild
        * @description Remove the node from the child list and update the parent value of the child.
        * @param {pc.GraphNode} node The node to remove
        * @example
        * var child = this.entity.children[0];
        * this.entity.removeChild(child);
        */
       removeChild(node: pc.GraphNode): void;

       /**
        * @private
        * @deprecated
        * @function
        * @name pc.GraphNode#addLabel
        * @description Add a string label to this graph node, labels can be used to group
        * and filter nodes. For example, the 'enemies' label could be applied to a group of NPCs
        * who are enemies.
        * @param {String} label The label to apply to this graph node.
        */
       private addLabel(label: String): void;

       /**
        * @private
        * @deprecated
        * @function
        * @name pc.GraphNode#getLabels
        * @description Get an array of all labels applied to this graph node.
        * @returns {String[]} An array of all labels.
        */
       private getLabels(): String[];

       /**
        * @private
        * @deprecated
        * @function
        * @name pc.GraphNode#hasLabel
        * @description Test if a label has been applied to this graph node.
        * @param {String} label The label to test for.
        * @returns {Boolean} True if the label has been added to this GraphNode.
        *
        */
       private hasLabel(label: String): Boolean;

       /**
        * @private
        * @deprecated
        * @function
        * @name pc.GraphNode#removeLabel
        * @description Remove label from this graph node.
        * @param {String} label The label to remove from this node.
        */
       private removeLabel(label: String): void;

       /**
        * @private
        * @deprecated
        * @function
        * @name pc.GraphNode#findByLabel
        * @description Find all graph nodes from the root and all descendants with the label.
        * @param {String} label The label to search for.
        * @param {pc.GraphNode[]} [results] An array to store the results in.
        * @returns {pc.GraphNode[]} The array passed in or a new array of results.
        */
       private findByLabel(label: String, results?: pc.GraphNode[]): pc.GraphNode[];

       /**
        * @function
        * @name pc.GraphNode#syncHierarchy
        * @description Updates the world transformation matrices at this node and all of its descendants.
        */
       syncHierarchy(): void;

       /**
        * @function
        * @name pc.GraphNode#lookAt^2
        * @description Reorients the graph node so that the negative z axis points towards the target.
        * @param {Number} tx X-component of the world space coordinate to 'look at'.
        * @param {Number} ty Y-component of the world space coordinate to 'look at'.
        * @param {Number} tz Z-component of the world space coordinate to 'look at'.
        * @param {Number} [ux] X-component of the up vector for the look at transform. If left unspecified,
        * this is set to the world space y axis.
        * @param {Number} [uy] Y-component of the up vector for the look at transform. If left unspecified,
        * this is set to the world space y axis.
        * @param {Number} [uz] Z-component of the up vector for the look at transform. If left unspecified,
        * this is set to the world space y axis.
        * @example
        * // Look at the world space origin, use default 'up' of [0,1,0]
        * this.entity.lookAt(0, 0, 0);
        * // Look at 10, 10, 10 with an inverted up value
        * this.entity.lookAt(10, 10, 10, 0, -1, 0);
        */
       lookAt^2(tx: Number, ty: Number, tz: Number, ux?: Number, uy?: Number, uz?: Number): void;

       /**
        * @function
        * @name pc.GraphNode#lookAt
        * @description Reorients the graph node so that the negative z axis points towards the target.
        * @param {pc.Vec3} target The world space coordinate to 'look at'.
        * @param {pc.Vec3} [up] The up vector for the look at transform. If left unspecified,
        * this is set to the world space y axis.
        * @example
        * var position = ... // get position from somewhere
        * // Look at a position, use default 'up' of [0,1,0]
        * this.entity.lookAt(position);
        * // Use a custom up value
        * this.entity.lookAt(position, this.entity.up);
        * // Specify position as elements
        * this.entity.lookAt(0, 0, 0);
        */
       lookAt(target: pc.Vec3, up?: pc.Vec3): void;

       /**
        * @function
        * @name pc.GraphNode#translate^2
        * @description Translates the graph node in world space by the specified translation vector.
        * @param {pc.Vec3} translation The world space translation vector to apply.
        * @example
        * var t = new pc.Vec3(10, 0, 0);
        * this.entity.translate(t);
        */
       translate^2(translation: pc.Vec3): void;

       /**
        * @function
        * @name pc.GraphNode#translate
        * @description Translates the graph node in world space by the specified translation vector.
        * @param {Number} x x-component of the translation vector.
        * @param {Number} y y-component of the translation vector.
        * @param {Number} z z-component of the translation vector.
        * @example
        * this.entity.translate(10, 0, 0);
        */
       translate(x: Number, y: Number, z: Number): void;

       /**
        * @function
        * @name pc.GraphNode#translateLocal^2
        * @description Translates the graph node in local space by the specified translation vector.
        * @param {pc.Vec3} translation The local space translation vector to apply.
        * @example
        * var t = new pc.Vec3(10, 0, 0);
        * this.entity.translateLocal(t);
        */
       translateLocal^2(translation: pc.Vec3): void;

       /**
        * @function
        * @name pc.GraphNode#translateLocal
        * @description Translates the graph node in local space by the specified translation vector.
        * @param {Number} x x-component of the translation vector.
        * @param {Number} y y-component of the translation vector.
        * @param {Number} z z-component of the translation vector.
        * @example
        * this.entity.translateLocal(10, 0, 0);
        */
       translateLocal(x: Number, y: Number, z: Number): void;

       /**
        * @function
        * @name pc.GraphNode#rotate^2
        * @description Rotates the graph node in world space by the specified Euler angles.
        * Eulers are specified in degrees in XYZ order.
        * @param {pc.Vec3} rot World space rotation (xyz) of graph node.
        * @example
        * var r = new pc.Vec3(0, 90, 0);
        * this.entity.rotate(r);
        */
       rotate^2(rot: pc.Vec3): void;

       /**
        * @function
        * @name pc.GraphNode#rotate
        * @description Rotates the graph node in world space by the specified Euler angles.
        * Eulers are specified in degrees in XYZ order.
        * @param {Number} ex Rotation around world space X axis in degrees.
        * @param {Number} ey Rotation around world space Y axis in degrees.
        * @param {Number} ez Rotation around world space Z axis in degrees.
        * @example
        * this.entity.rotate(0, 90, 0);
        */
       rotate(ex: Number, ey: Number, ez: Number): void;

       /**
        * @function
        * @name pc.GraphNode#rotateLocal^2
        * @description Rotates the graph node in local space by the specified Euler angles.
        * Eulers are specified in degrees in XYZ order.
        * @param {pc.Vec3} rot Local space rotation (xyz) of graph node.
        * @example
        * var r = new pc.Vec3(0, 90, 0);
        * this.entity.rotateLocal(r);
        */
       rotateLocal^2(rot: pc.Vec3): void;

       /**
        * @function
        * @name pc.GraphNode#rotateLocal
        * @description Rotates the graph node in local space by the specified Euler angles.
        * Eulers are specified in degrees in XYZ order.
        * @param {Number} ex Rotation around local space X axis in degrees.
        * @param {Number} ey Rotation around local space Y axis in degrees.
        * @param {Number} ez Rotation around local space Z axis in degrees.
        * @example
        * this.entity.rotateLocal(0, 90, 0);
        */
       rotateLocal(ex: Number, ey: Number, ez: Number): void;

   }

   /**
    * @private
    * @name pc.Light
    * @class A light.
    */
   class Light {
       /**
        * @private
        * @name pc.Light
        * @class A light.
        */
       constructor();

       /**
        * @private
        * @function
        * @name pc.Light#clone
        * @description Duplicates a light node but does not 'deep copy' the hierarchy.
        * @returns {pc.Light} A cloned Light.
        */
       private clone(): pc.Light;

   }

   /**
    * @name pc.Lightmapper
    * @class The lightmapper is used to bake scene lights into textures.
    */
   class Lightmapper {
       /**
        * @name pc.Lightmapper
        * @class The lightmapper is used to bake scene lights into textures.
        */
       constructor();

       /**
        * @function
        * @name pc.Lightmapper#bake
        * @description Generates and applies the lightmaps.
        * @param {pc.Entity} nodes An array of models to render lightmaps for. If not supplied, full scene will be baked.
        * @param {Number} mode Baking mode. Possible values:
        * <ul>
        *     <li>pc.BAKE_COLOR: single color lightmap
        *     <li>pc.BAKE_COLORDIR: single color lightmap + dominant light direction (used for bump/specular)
        * </ul>
        * Only lights with bakeDir=true will be used for generating the dominant light direction.
        */
       bake(nodes: pc.Entity, mode: Number): void;

   }

   /**
    * @name pc.Material
    * @class A material determines how a particular mesh instance is rendered. It specifies the shader and render state that is
    * set before the mesh instance is submitted to the graphics device.
    * @description Create a new Material instance
    * @property {Number} alphaTest The alpha test reference value to control which fragements are written to the currently
    * active render target based on alpha value. All fragments with an alpha value of less than the alphaTest reference value
    * will be discarded. alphaTest defaults to 0 (all fragments pass).
    * @property {Boolean} alphaWrite If true, the alpha component of fragments generated by the shader of this material is written to
    * the color buffer of the currently active render target. If false, the alpha component will not be written. Defaults to true.
    * @property {Number} blendType Controls how primitives are blended when being written to the currently active render target.
    * Can be one of the following values:
    * <ul>
    * <li>{@link pc.BLEND_SUBTRACTIVE}: Subtract the color of the source fragment from the destination fragment and write the result to the frame buffer.</li>
    * <li>{@link pc.BLEND_ADDITIVE}: Add the color of the source fragment to the destination fragment and write the result to the frame buffer.</li>
    * <li>{@link pc.BLEND_NORMAL}: Enable simple translucency for materials such as glass. This is equivalent to enabling a source blend mode of pc.BLENDMODE_SRC_ALPHA and a destination blend mode of pc.BLENDMODE_ONE_MINUS_SRC_ALPHA.</li>
    * <li>{@link pc.BLEND_NONE}: Disable blending.</li>
    * <li>{@link pc.BLEND_PREMULTIPLIED}: Similar to pc.BLEND_NORMAL expect the source fragment is assumed to have already been multiplied by the source alpha value.</li>
    * <li>{@link pc.BLEND_MULTIPLICATIVE}: Multiply the color of the source fragment by the color of the destination fragment and write the result to the frame buffer.</li>
    * <li>{@link pc.BLEND_ADDITIVEALPHA}: Same as pc.BLEND_ADDITIVE except the source RGB is multiplied by the source alpha.</li>
    * </ul>
    * Defaults to pc.BLEND_NONE.
    * @property {Boolean} blueWrite If true, the blue component of fragments generated by the shader of this material is written to
    * the color buffer of the currently active render target. If false, the blue component will not be written. Defaults to true.
    * @property {Number} cull Controls how triangles are culled based on their face direction with respect to the viewpoint.
    * Can be one of the following values:
    * <ul>
    * <li>{@link pc.CULLFACE_NONE}: Do not cull triangles based on face direction.</li>
    * <li>{@link pc.CULLFACE_BACK}: Cull the back faces of triangles (do not render triangles facing away from the view point).</li>
    * <li>{@link pc.CULLFACE_FRONT}: Cull the front faces of triangles (do not render triangles facing towards the view point).</li>
    * <li>{@link pc.CULLFACE_FRONTANDBACK}: Cull both front and back faces (triangles will not be rendered).</li>
    * </ul>
    * Defaults to pc.CULLFACE_BACK.
    * @property {Boolean} depthTest If true, fragments generated by the shader of this material are only written to the
    * current render target if they pass the depth test. If false, fragments generated by the shader of this material are
    * written to the current render target regardless of what is in the depth buffer. Defaults to true.
    * @property {Boolean} depthWrite If true, fragments generated by the shader of this material write a depth value to
    * the depth buffer of the currently active render target. If false, no depth value is written. Defaults to true.
    * @property {Boolean} greenWrite If true, the green component of fragments generated by the shader of this material is written to
    * the color buffer of the currently active render target. If false, the green component will not be written. Defaults to true.
    * @property {String} name The name of the material.
    * @property {Boolean} redWrite If true, the red component of fragments generated by the shader of this material is written to
    * the color buffer of the currently active render target. If false, the red component will not be written. Defaults to true.
    * @property {pc.Shader} shader The shader used by this material to render mesh instances.
    * @property {pc.StencilParameters} stencilFront Stencil parameters for front faces (default is null).
    * @property {pc.StencilParameters} stencilBack Stencil parameters for back faces (default is null).
    * @author Will Eastcott and Arthur Rahteenko
    */
   class Material {
       /**
        * @name pc.Material
        * @class A material determines how a particular mesh instance is rendered. It specifies the shader and render state that is
        * set before the mesh instance is submitted to the graphics device.
        * @description Create a new Material instance
        * @property {Number} alphaTest The alpha test reference value to control which fragements are written to the currently
        * active render target based on alpha value. All fragments with an alpha value of less than the alphaTest reference value
        * will be discarded. alphaTest defaults to 0 (all fragments pass).
        * @property {Boolean} alphaWrite If true, the alpha component of fragments generated by the shader of this material is written to
        * the color buffer of the currently active render target. If false, the alpha component will not be written. Defaults to true.
        * @property {Number} blendType Controls how primitives are blended when being written to the currently active render target.
        * Can be one of the following values:
        * <ul>
        * <li>{@link pc.BLEND_SUBTRACTIVE}: Subtract the color of the source fragment from the destination fragment and write the result to the frame buffer.</li>
        * <li>{@link pc.BLEND_ADDITIVE}: Add the color of the source fragment to the destination fragment and write the result to the frame buffer.</li>
        * <li>{@link pc.BLEND_NORMAL}: Enable simple translucency for materials such as glass. This is equivalent to enabling a source blend mode of pc.BLENDMODE_SRC_ALPHA and a destination blend mode of pc.BLENDMODE_ONE_MINUS_SRC_ALPHA.</li>
        * <li>{@link pc.BLEND_NONE}: Disable blending.</li>
        * <li>{@link pc.BLEND_PREMULTIPLIED}: Similar to pc.BLEND_NORMAL expect the source fragment is assumed to have already been multiplied by the source alpha value.</li>
        * <li>{@link pc.BLEND_MULTIPLICATIVE}: Multiply the color of the source fragment by the color of the destination fragment and write the result to the frame buffer.</li>
        * <li>{@link pc.BLEND_ADDITIVEALPHA}: Same as pc.BLEND_ADDITIVE except the source RGB is multiplied by the source alpha.</li>
        * </ul>
        * Defaults to pc.BLEND_NONE.
        * @property {Boolean} blueWrite If true, the blue component of fragments generated by the shader of this material is written to
        * the color buffer of the currently active render target. If false, the blue component will not be written. Defaults to true.
        * @property {Number} cull Controls how triangles are culled based on their face direction with respect to the viewpoint.
        * Can be one of the following values:
        * <ul>
        * <li>{@link pc.CULLFACE_NONE}: Do not cull triangles based on face direction.</li>
        * <li>{@link pc.CULLFACE_BACK}: Cull the back faces of triangles (do not render triangles facing away from the view point).</li>
        * <li>{@link pc.CULLFACE_FRONT}: Cull the front faces of triangles (do not render triangles facing towards the view point).</li>
        * <li>{@link pc.CULLFACE_FRONTANDBACK}: Cull both front and back faces (triangles will not be rendered).</li>
        * </ul>
        * Defaults to pc.CULLFACE_BACK.
        * @property {Boolean} depthTest If true, fragments generated by the shader of this material are only written to the
        * current render target if they pass the depth test. If false, fragments generated by the shader of this material are
        * written to the current render target regardless of what is in the depth buffer. Defaults to true.
        * @property {Boolean} depthWrite If true, fragments generated by the shader of this material write a depth value to
        * the depth buffer of the currently active render target. If false, no depth value is written. Defaults to true.
        * @property {Boolean} greenWrite If true, the green component of fragments generated by the shader of this material is written to
        * the color buffer of the currently active render target. If false, the green component will not be written. Defaults to true.
        * @property {String} name The name of the material.
        * @property {Boolean} redWrite If true, the red component of fragments generated by the shader of this material is written to
        * the color buffer of the currently active render target. If false, the red component will not be written. Defaults to true.
        * @property {pc.Shader} shader The shader used by this material to render mesh instances.
        * @property {pc.StencilParameters} stencilFront Stencil parameters for front faces (default is null).
        * @property {pc.StencilParameters} stencilBack Stencil parameters for back faces (default is null).
        * @author Will Eastcott and Arthur Rahteenko
        */
       constructor();

       /**
        * @function
        * @name pc.Material#getParameter
        * @description Retrieves the specified shader parameter from a material.
        * @param {String} name The name of the parameter to query.
        * @returns {Object} The named parameter.
        * @author Will Eastcott
        */
       getParameter(name: String): Object;

       /**
        * @function
        * @name pc.Material#setParameter
        * @description Sets a shader parameter on a material.
        * @param {String} name The name of the parameter to set.
        * @param {Number|Array|pc.Texture} data The value for the specified parameter.
        * @author Will Eastcott
        */
       setParameter(name: String, data: (Number|Array|pc.Texture)): void;

       /**
        * @function
        * @name pc.Material#deleteParameter
        * @description Deletes a shader parameter on a material.
        * @param {String} name The name of the parameter to delete.
        * @author Will Eastcott
        */
       deleteParameter(name: String): void;

       /**
        * @function
        * @name pc.Material#setParameters
        * @description Pushes all material parameters into scope.
        * @author Will Eastcott
        */
       setParameters(): void;

       /**
        * @function
        * @name pc.Material#update
        * @description Applies any changes made to the material's properties.
        */
       update(): void;

       /**
        * @function
        * @description Initializes the material with the properties in the specified data.
        * @name pc.Material#init
        * @param {Object} data The initial data for the material.
        */
       init(data: Object): void;

       /**
        * @private
        * @function
        * @name pc.Material#getName
        * @description Returns the string name of the specified material. This name is not
        * necessarily unique. Material names set by an artist within the modelling application
        * should be preserved in the PlayCanvas runtime.
        * @return {String} The name of the material.
        * @author Will Eastcott
        */
       private getName(): String;

       /**
        * @private
        * @function
        * @name pc.Material#setName
        * @description Sets the string name of the specified material. This name does not
        * have to be unique.
        * @param {String} name The name of the material.
        * @author Will Eastcott
        */
       private setName(name: String): void;

       /**
        * @private
        * @function
        * @name pc.Material#getShader
        * @description Retrieves the shader assigned to the specified material.
        * @returns {pc.Shader} The shader assigned to the material.
        * @author Will Eastcott
        */
       private getShader(): pc.Shader;

       /**
        * @private
        * @function
        * @name pc.Material#setShader
        * @description Assigns a shader to the specified material.
        * @param {pc.Shader} shader The shader to assign to the material.
        * @author Will Eastcott
        */
       private setShader(shader: pc.Shader): void;

       /**
        * @private
        * @function
        * @name pc.Material#destroy
        * @description Removes this material from the scene and possibly frees up memory from its shaders (if there are no other materials using it).
        */
       private destroy(): void;

   }

   /**
    * @name pc.StencilParameters
    * @class Holds stencil test settings
    * @description Create a new StencilParameters instance
    * @property {Number} func Sets stencil test function. See pc.GraphicsDevice#setStencilFunc
    * @property {Number} ref Sets stencil test reference value. See pc.GraphicsDevice#setStencilFunc
    * @property {Number} mask Sets stencil test reading mask. See pc.GraphicsDevice#setStencilFunc
    * @property {Number} fail Sets operation to perform if stencil test is failed. See pc.GraphicsDevice#setStencilOperation
    * @property {Number} zfail Sets operation to perform if depth test is failed. See pc.GraphicsDevice#setStencilOperation
    * @property {Number} zpass Sets operation to perform if both stencil and depth test are passed. See pc.GraphicsDevice#setStencilOperation
    */
   class StencilParameters {
       /**
        * @name pc.StencilParameters
        * @class Holds stencil test settings
        * @description Create a new StencilParameters instance
        * @property {Number} func Sets stencil test function. See pc.GraphicsDevice#setStencilFunc
        * @property {Number} ref Sets stencil test reference value. See pc.GraphicsDevice#setStencilFunc
        * @property {Number} mask Sets stencil test reading mask. See pc.GraphicsDevice#setStencilFunc
        * @property {Number} fail Sets operation to perform if stencil test is failed. See pc.GraphicsDevice#setStencilOperation
        * @property {Number} zfail Sets operation to perform if depth test is failed. See pc.GraphicsDevice#setStencilOperation
        * @property {Number} zpass Sets operation to perform if both stencil and depth test are passed. See pc.GraphicsDevice#setStencilOperation
        */
       constructor();

   }

   /**
    * @name pc.Mesh
    * @class A graphical primitive. The mesh is defined by a {@link pc.VertexBuffer} and an optional
    * {@link pc.IndexBuffer}. It also contains a primitive definition which controls the type of the
    * primitive and the portion of the vertex or index buffer to use.
    * @description Create a new mesh.
    * @property {pc.VertexBuffer} vertexBuffer The vertex buffer holding the vertex data of the mesh.
    * @property {pc.IndexBuffer[]} indexBuffer An array of index buffers. For unindexed meshes, this array can
    * be empty. The first index buffer in the array is used by {@link pc.MeshInstance}s with a renderStyle
    * property set to pc.RENDERSTYLE_SOLID. The second index buffer in the array is used if renderStyle is
    * set to pc.RENDERSTYLE_WIREFRAME.
    * @property {Object[]} primitive Array of primitive objects defining how vertex (and index) data in the
    * mesh should be interpreted by the graphics device. For details on the primitive object, see
    * {@link pc.GraphicsDevice#draw}. The primitive is ordered based on render style like the indexBuffer property.
    * @property {pc.BoundingBox} aabb The axis-aligned bounding box for the object space vertices of this mesh.
    */
   class Mesh {
       /**
        * @name pc.Mesh
        * @class A graphical primitive. The mesh is defined by a {@link pc.VertexBuffer} and an optional
        * {@link pc.IndexBuffer}. It also contains a primitive definition which controls the type of the
        * primitive and the portion of the vertex or index buffer to use.
        * @description Create a new mesh.
        * @property {pc.VertexBuffer} vertexBuffer The vertex buffer holding the vertex data of the mesh.
        * @property {pc.IndexBuffer[]} indexBuffer An array of index buffers. For unindexed meshes, this array can
        * be empty. The first index buffer in the array is used by {@link pc.MeshInstance}s with a renderStyle
        * property set to pc.RENDERSTYLE_SOLID. The second index buffer in the array is used if renderStyle is
        * set to pc.RENDERSTYLE_WIREFRAME.
        * @property {Object[]} primitive Array of primitive objects defining how vertex (and index) data in the
        * mesh should be interpreted by the graphics device. For details on the primitive object, see
        * {@link pc.GraphicsDevice#draw}. The primitive is ordered based on render style like the indexBuffer property.
        * @property {pc.BoundingBox} aabb The axis-aligned bounding box for the object space vertices of this mesh.
        */
       constructor();

   }

   /**
    * @name pc.MeshInstance
    * @class An instance of a {@link pc.Mesh}. A single mesh can be referenced by many
    * mesh instances that can have different transforms and materials.
    * @description Create a new mesh instance.
    * @param {pc.GraphNode} node The graph node defining the transform for this instance.
    * @param {pc.Mesh} mesh The graphics mesh being instanced.
    * @param {pc.Material} material The material used to render this instance.
    * @example
    * // Create a mesh instance pointing to a 1x1x1 'cube' mesh
    * var mesh = pc.createBox(graphicsDevice);
    * var material = new pc.StandardMaterial();
    * var node = new pc.GraphNode();
    * var meshInstance = new pc.MeshInstance(node, mesh, material);
    * @property {pc.BoundingBox} aabb The world space axis-aligned bounding box for this
    * mesh instance.
    * @property {Boolean} castShadow Controls whether the mesh instance casts shadows.
    * Defaults to false.
    * @property {Boolean} visible Enable rendering for this mesh instance. Use visible property to enable/disable rendering without overhead of removing from scene.
    * But note that the mesh instance is still in the hierarchy and still in the draw call list.
    * @property {Number} layer The layer used by this mesh instance. Layers define drawing order. Can be:
    * <ul>
    *     <li>pc.LAYER_WORLD or 15</li>
    *     <li>pc.LAYER_FX or 2</li>
    *     <li>pc.LAYER_GIZMO or 1</li>
    *     <li>pc.LAYER_HUD or 0</li>
    *     <li>Any number between 3 and 14 can be used as a custom layer.</li>
    * </ul>
    * Defaults to pc.LAYER_WORLD.
    * @property {pc.Material} material The material used by this mesh instance.
    * @property {Number} renderStyle The render style of the mesh instance. Can be:
    * <ul>
    *     <li>pc.RENDERSTYLE_SOLID</li>
    *     <li>pc.RENDERSTYLE_WIREFRAME</li>
    *     <li>pc.RENDERSTYLE_POINTS</li>
    * </ul>
    * Defaults to pc.RENDERSTYLE_SOLID.
    * @property {Boolean} cull Controls whether the mesh instance can be culled with frustum culling
    */
   class MeshInstance {
       /**
        * @name pc.MeshInstance
        * @class An instance of a {@link pc.Mesh}. A single mesh can be referenced by many
        * mesh instances that can have different transforms and materials.
        * @description Create a new mesh instance.
        * @param {pc.GraphNode} node The graph node defining the transform for this instance.
        * @param {pc.Mesh} mesh The graphics mesh being instanced.
        * @param {pc.Material} material The material used to render this instance.
        * @example
        * // Create a mesh instance pointing to a 1x1x1 'cube' mesh
        * var mesh = pc.createBox(graphicsDevice);
        * var material = new pc.StandardMaterial();
        * var node = new pc.GraphNode();
        * var meshInstance = new pc.MeshInstance(node, mesh, material);
        * @property {pc.BoundingBox} aabb The world space axis-aligned bounding box for this
        * mesh instance.
        * @property {Boolean} castShadow Controls whether the mesh instance casts shadows.
        * Defaults to false.
        * @property {Boolean} visible Enable rendering for this mesh instance. Use visible property to enable/disable rendering without overhead of removing from scene.
        * But note that the mesh instance is still in the hierarchy and still in the draw call list.
        * @property {Number} layer The layer used by this mesh instance. Layers define drawing order. Can be:
        * <ul>
        *     <li>pc.LAYER_WORLD or 15</li>
        *     <li>pc.LAYER_FX or 2</li>
        *     <li>pc.LAYER_GIZMO or 1</li>
        *     <li>pc.LAYER_HUD or 0</li>
        *     <li>Any number between 3 and 14 can be used as a custom layer.</li>
        * </ul>
        * Defaults to pc.LAYER_WORLD.
        * @property {pc.Material} material The material used by this mesh instance.
        * @property {Number} renderStyle The render style of the mesh instance. Can be:
        * <ul>
        *     <li>pc.RENDERSTYLE_SOLID</li>
        *     <li>pc.RENDERSTYLE_WIREFRAME</li>
        *     <li>pc.RENDERSTYLE_POINTS</li>
        * </ul>
        * Defaults to pc.RENDERSTYLE_SOLID.
        * @property {Boolean} cull Controls whether the mesh instance can be culled with frustum culling
        */
       constructor(node: pc.GraphNode, mesh: pc.Mesh, material: pc.Material);

       /**
        * @name pc.MeshInstance#mask
        * @type Number
        * @description Mask controlling which {@link pc.LightComponent}s light this mesh instance.
        * To ignore all dynamic lights, set mask to 0. Defaults to 1.
        */
       mask: Number;

   }

   /**
    * @name pc.Model
    * @class A model is a graphical object that can be added to or removed from a scene.
    * It contains a hierarchy and any number of mesh instances.
    * @description Creates a new model.
    * @example
    * // Create a new model
    * var model = new pc.Model();
    * @property {pc.GraphNode} graph The root node of the model's graph node hierarchy.
    * @property {pc.MeshInstance[]} meshInstances An array of meshInstances contained in this model.
    */
   class Model {
       /**
        * @name pc.Model
        * @class A model is a graphical object that can be added to or removed from a scene.
        * It contains a hierarchy and any number of mesh instances.
        * @description Creates a new model.
        * @example
        * // Create a new model
        * var model = new pc.Model();
        * @property {pc.GraphNode} graph The root node of the model's graph node hierarchy.
        * @property {pc.MeshInstance[]} meshInstances An array of meshInstances contained in this model.
        */
       constructor();

       /**
        * @function
        * @name pc.Model#clone
        * @description Clones a model. The returned model has a newly created hierarchy
        * and mesh instances, but meshes are shared between the clone and the specified
        * model.
        * @returns {pc.Model} A clone of the specified model.
        * @example
        * var clonedModel = model.clone();
        * @author Will Eastcott
        */
       clone(): pc.Model;

       /**
        * @function
        * @name pc.Model#destroy
        * @description destroys skinning texture and possibly deletes vertex/index buffers of a model.
        * Mesh is reference-counted, so buffers are only deleted if all models with referencing mesh instances were deleted.
        * That means all in-scene models + the "base" one (asset.resource) which is created when the model is parsed.
        * It is recommended to use asset.unload() instead, which will also remove the model from the scene.
        */
       destroy(): void;

       /**
        * @function
        * @name pc.Model#generateWireframe
        * @description Generates the necessary internal data for a model to be
        * renderable as wireframe. Once this function has been called, any mesh
        * instance in the model can have its renderStyle property set to
        * pc.RENDERSTYLE_WIREFRAME
        * @example
        * model.generateWireframe();
        * for (var i = 0; i < model.meshInstances.length; i++) {
        *     model.meshInstances[i].renderStyle = pc.RENDERSTYLE_WIREFRAME;
        * }
        * @author Will Eastcott
        */
       generateWireframe(): void;

   }

   /**
    * @name pc.Picker
    * @class Picker object used to select mesh instances from screen coordinates.
    * @description Create a new instance of a Picker object
    * @param {pc.GraphicsDevice} device Graphics device used to manage internal graphics resources.
    * @param {Number} width The width of the pick buffer in pixels.
    * @param {Number} height The height of the pick buffer in pixels.
    * @property {Number} width Width of the pick buffer in pixels (read-only).
    * @property {Number} height Height of the pick buffer in pixels (read-only).
    * @property {pc.RenderTarget} renderTarget The render target used by the picker internally (read-only).
    */
   class Picker {
       /**
        * @name pc.Picker
        * @class Picker object used to select mesh instances from screen coordinates.
        * @description Create a new instance of a Picker object
        * @param {pc.GraphicsDevice} device Graphics device used to manage internal graphics resources.
        * @param {Number} width The width of the pick buffer in pixels.
        * @param {Number} height The height of the pick buffer in pixels.
        * @property {Number} width Width of the pick buffer in pixels (read-only).
        * @property {Number} height Height of the pick buffer in pixels (read-only).
        * @property {pc.RenderTarget} renderTarget The render target used by the picker internally (read-only).
        */
       constructor(device: pc.GraphicsDevice, width: Number, height: Number);

       /**
        * @function
        * @name pc.Picker#getSelection
        * @description Return the list of mesh instances selected by the specified rectangle in the
        * previously prepared pick buffer.
        * @param {Object} rect The selection rectangle.
        * @param {Number} rect.x The left edge of the rectangle
        * @param {Number} rect.y The bottom edge of the rectangle
        * @param {Number} [rect.width] The width of the rectangle
        * @param {Number} [rect.height] The height of the rectangle
        * @returns {pc.MeshInstance[]} An array of mesh instances that are in the selection
        * @example
        * // Get the selection at the point (10,20)
        * var selection = picker.getSelection({
        *     x: 10,
        *     y: 20
        * });
        *
        * // Get all models in rectangle with corners at (10,20) and (20,40)
        * var selection = picker.getSelection({
        *     x: 10,
        *     y: 20,
        *     width: 10,
        *     height: 20
        * });
        */
       getSelection(rect: { x: Number, y: Number, width: Number, height: Number }): pc.MeshInstance[];

       /**
        * @function
        * @name pc.Picker#prepare
        * @description Primes the pick buffer with a rendering of the specified models from the point of view
        * of the supplied camera. Once the pick buffer has been prepared, pc.Picker#getSelection can be
        * called multiple times on the same picker object. Therefore, if the models or camera do not change
        * in any way, pc.Picker#prepare does not need to be called again.
        * @param {pc.Camera} camera The camera used to render the scene, note this is the CameraNode, not an Entity
        * @param {pc.Scene} scene The scene containing the pickable mesh instances.
        */
       prepare(camera: pc.Camera, scene: pc.Scene): void;

       /**
        * @function
        * @name pc.Picker#resize
        * @description Sets the resolution of the pick buffer. The pick buffer resolution does not need
        * to match the resolution of the corresponding frame buffer use for general rendering of the
        * 3D scene. However, the lower the resolution of the pick buffer, the less accurate the selection
        * results returned by pc.Picker#getSelection. On the other hand, smaller pick buffers will
        * yield greater performance, so there is a trade off.
        * @param {Number} width The width of the pick buffer in pixels.
        * @param {Number} height The height of the pick buffer in pixels.
        */
       resize(width: Number, height: Number): void;

   }

   /**
    * @function
    * @name pc.calculateNormals
    * @description Generates normal information from the specified positions and triangle indices. See {@link pc.createMesh}.
    * @param {Number[]} positions An array of 3-dimensional vertex positions.
    * @param {Number[]} indices An array of triangle indices.
    * @returns {Number[]} An array of 3-dimensional vertex normals.
    * @example
    * var normals = pc.calculateNormals(positions, indices);
    * var tangents = pc.calculateTangents(positions, normals, uvs, indices);
    * var mesh = pc.createMesh(positions, normals, tangents, uvs, indices);
    * @author Will Eastcott
    */
   function calculateNormals(positions: Number[], indices: Number[]): Number[];

   /**
    * @function
    * @name pc.calculateTangents
    * @description Generates tangent information from the specified positions, normals, texture coordinates
    * and triangle indices. See {@link pc.createMesh}.
    * @param {Number[]} positions An array of 3-dimensional vertex positions.
    * @param {Number[]} normals An array of 3-dimensional vertex normals.
    * @param {Number[]} uvs An array of 2-dimensional vertex texture coordinates.
    * @param {Number[]} indices An array of triangle indices.
    * @returns {Number[]} An array of 3-dimensional vertex tangents.
    * @example
    * var tangents = pc.calculateTangents(positions, normals, uvs, indices);
    * var mesh = pc.createMesh(positions, normals, tangents, uvs, indices);
    * @author Will Eastcott
    */
   function calculateTangents(positions: Number[], normals: Number[], uvs: Number[], indices: Number[]): Number[];

   /**
    * @function
    * @name pc.createMesh
    * @description Creates a new mesh object from the supplied vertex information and topology.
    * @param {pc.GraphicsDevice} device The graphics device used to manage the mesh.
    * @param {Number[]} positions An array of 3-dimensional vertex positions.
    * @param {Object} opts An object that specifies optional inputs for the function as follows:
    * @param {Number[]} opts.normals An array of 3-dimensional vertex normals.
    * @param {Number[]} opts.tangents An array of 3-dimensional vertex tangents.
    * @param {Number[]} opts.colors An array of 4-dimensional vertex colors.
    * @param {Number[]} opts.uvs An array of 2-dimensional vertex texture coordinates.
    * @param {Number[]} opts.uvs1 Same as opts.uvs, but for additional UV set
    * @param {Number[]} opts.indices An array of triangle indices.
    * @returns {pc.Mesh} A new Geometry constructed from the supplied vertex and triangle data.
    * @example
    * // Create a new mesh supplying optional parameters using object literal notation
    * var mesh = pc.createMesh(
    *     graphicsDevice,
    *     positions,
    *     {
    *         normals: treeNormals,
    *         uvs: treeUvs,
    *         indices: treeIndices
    *     });
    * @author Will Eastcott
    */
   function createMesh(device: pc.GraphicsDevice, positions: Number[], opts: { normals: Number[], tangents: Number[], colors: Number[], uvs: Number[], uvs1: Number[], indices: Number[] }): pc.Mesh;

   /**
    * @function
    * @name pc.createTorus
    * @description Creates a procedural torus-shaped mesh.
    * The size, shape and tesselation properties of the torus can be controlled via function parameters.
    * By default, the function will create a torus in the XZ-plane with a tube radius of 0.2, a ring radius
    * of 0.3, 20 segments and 30 sides.<br />
    * Note that the torus is created with UVs in the range of 0 to 1. Additionally, tangent information
    * is generated into the vertex buffer of the torus's mesh.<br />
    * @param {pc.GraphicsDevice} device The graphics device used to manage the mesh.
    * @param {Object} opts An object that specifies optional inputs for the function as follows:
    * @param {Number} opts.tubeRadius The radius of the tube forming the body of the torus (defaults to 0.2).
    * @param {Number} opts.ringRadius The radius from the centre of the torus to the centre of the tube (defaults to 0.3).
    * @param {Number} opts.segments The number of radial divisions forming cross-sections of the torus ring (defaults to 20).
    * @param {Number} opts.sides The number of divisions around the tubular body of the torus ring (defaults to 30).
    * @returns {pc.Mesh} A new torus-shaped mesh.
    * @author Will Eastcott
    */
   function createTorus(device: pc.GraphicsDevice, opts: { tubeRadius: Number, ringRadius: Number, segments: Number, sides: Number }): pc.Mesh;

   /**
    * @function
    * @name pc.createCylinder
    * @description Creates a procedural cylinder-shaped mesh.
    * The size, shape and tesselation properties of the cylinder can be controlled via function parameters.
    * By default, the function will create a cylinder standing vertically centred on the XZ-plane with a radius
    * of 0.5, a height of 1.0, 1 height segment and 20 cap segments.<br />
    * Note that the cylinder is created with UVs in the range of 0 to 1. Additionally, tangent information
    * is generated into the vertex buffer of the cylinder's mesh.<br />
    * @param {pc.GraphicsDevice} device The graphics device used to manage the mesh.
    * @param {Object} opts An object that specifies optional inputs for the function as follows:
    * @param {Number} opts.radius The radius of the tube forming the body of the cylinder (defaults to 0.5).
    * @param {Number} opts.height The length of the body of the cylinder (defaults to 1.0).
    * @param {Number} opts.heightSegments The number of divisions along the length of the cylinder (defaults to 5).
    * @param {Number} opts.capSegments The number of divisions around the tubular body of the cylinder (defaults to 20).
    * @returns {pc.Mesh} A new cylinder-shaped mesh.
    * @author Will Eastcott
    */
   function createCylinder(device: pc.GraphicsDevice, opts: { radius: Number, height: Number, heightSegments: Number, capSegments: Number }): pc.Mesh;

   /**
    * @function
    * @name pc.createCapsule
    * @description Creates a procedural capsule-shaped mesh.
    * The size, shape and tesselation properties of the capsule can be controlled via function parameters.
    * By default, the function will create a capsule standing vertically centred on the XZ-plane with a radius
    * of 0.25, a height of 1.0, 1 height segment and 10 cap segments.<br />
    * Note that the capsule is created with UVs in the range of 0 to 1. Additionally, tangent information
    * is generated into the vertex buffer of the capsule's mesh.<br />
    * @param {pc.GraphicsDevice} device The graphics device used to manage the mesh.
    * @param {Object} opts An object that specifies optional inputs for the function as follows:
    * @param {Number} opts.radius The radius of the tube forming the body of the capsule (defaults to 0.3).
    * @param {Number} opts.height The length of the body of the capsule from tip to tip (defaults to 1.0).
    * @param {Number} opts.heightSegments The number of divisions along the tubular length of the capsule (defaults to 1).
    * @param {Number} opts.sides The number of divisions around the tubular body of the capsule (defaults to 20).
    * @returns {pc.Mesh} A new cylinder-shaped mesh.
    * @author Will Eastcott
    */
   function createCapsule(device: pc.GraphicsDevice, opts: { radius: Number, height: Number, heightSegments: Number, sides: Number }): pc.Mesh;

   /**
    * @function
    * @name pc.createCone
    * @description Creates a procedural cone-shaped mesh.</p>
    * The size, shape and tesselation properties of the cone can be controlled via function parameters.
    * By default, the function will create a cone standing vertically centred on the XZ-plane with a base radius
    * of 0.5, a height of 1.0, 5 height segments and 20 cap segments.<br />
    * Note that the cone is created with UVs in the range of 0 to 1. Additionally, tangent information
    * is generated into the vertex buffer of the cone's mesh.<br />
    * @param {pc.GraphicsDevice} device The graphics device used to manage the mesh.
    * @param {Object} opts An object that specifies optional inputs for the function as follows:
    * @param {Number} opts.baseRadius The base radius of the cone (defaults to 0.5).
    * @param {Number} opts.peakRadius The peak radius of the cone (defaults to 0.0).
    * @param {Number} opts.height The length of the body of the cone (defaults to 1.0).
    * @param {Number} opts.heightSegments The number of divisions along the length of the cone (defaults to 5).
    * @param {Number} opts.capSegments The number of divisions around the tubular body of the cone (defaults to 18).
    * @returns {pc.Mesh} A new cone-shaped mesh.
    * @author Will Eastcott
    */
   function createCone(device: pc.GraphicsDevice, opts: { baseRadius: Number, peakRadius: Number, height: Number, heightSegments: Number, capSegments: Number }): pc.Mesh;

   /**
    * @function
    * @name pc.createSphere
    * @description Creates a procedural sphere-shaped mesh.
    * The size and tesselation properties of the sphere can be controlled via function parameters. By
    * default, the function will create a sphere centred on the object space origin with a radius of 0.5
    * and 16 segments in both longitude and latitude.<br />
    * Note that the sphere is created with UVs in the range of 0 to 1. Additionally, tangent information
    * is generated into the vertex buffer of the sphere's mesh.<br />
    * @param {pc.GraphicsDevice} device The graphics device used to manage the mesh.
    * @param {Object} opts An object that specifies optional inputs for the function as follows:
    * @param {Number} opts.radius The radius of the sphere (defaults to 0.5).
    * @param {Number} opts.segments The number of divisions along the longitudinal and latitudinal axes of the sphere (defaults to 16).
    * @returns {pc.Mesh} A new sphere-shaped mesh.
    * @author Will Eastcott
    */
   function createSphere(device: pc.GraphicsDevice, opts: { radius: Number, segments: Number }): pc.Mesh;

   /**
    * @function
    * @name pc.createPlane
    * @description Creates a procedural plane-shaped mesh.
    * The size and tesselation properties of the plane can be controlled via function parameters. By
    * default, the function will create a plane centred on the object space origin with a width and
    * length of 1.0 and 5 segments in either axis (50 triangles). The normal vector of the plane is aligned
    * along the positive Y axis.<br />
    * Note that the plane is created with UVs in the range of 0 to 1. Additionally, tangent information
    * is generated into the vertex buffer of the plane's mesh.<br />
    * @param {pc.GraphicsDevice} device The graphics device used to manage the mesh.
    * @param {Object} opts An object that specifies optional inputs for the function as follows:
    * @param {pc.Vec2} opts.halfExtents The half dimensions of the plane in the X and Z axes (defaults to [0.5, 0.5]).
    * @param {Number} opts.widthSegments The number of divisions along the X axis of the plane (defaults to 5).
    * @param {Number} opts.lengthSegments The number of divisions along the Z axis of the plane (defaults to 5).
    * @returns {pc.Mesh} A new plane-shaped mesh.
    * @author Will Eastcott
    */
   function createPlane(device: pc.GraphicsDevice, opts: { halfExtents: pc.Vec2, widthSegments: Number, lengthSegments: Number }): pc.Mesh;

   /**
    * @function
    * @name pc.createBox
    * @description Creates a procedural box-shaped mesh.
    * The size, shape and tesselation properties of the box can be controlled via function parameters. By
    * default, the function will create a box centred on the object space origin with a width, length and
    * height of 1.0 unit and 10 segments in either axis (50 triangles per face).<br />
    * Note that the box is created with UVs in the range of 0 to 1 on each face. Additionally, tangent
    * information is generated into the vertex buffer of the box's mesh.<br />
    * @param {pc.GraphicsDevice} device The graphics device used to manage the mesh.
    * @param {Object} opts An object that specifies optional inputs for the function as follows:
    * @param {pc.Vec3} opts.halfExtents The half dimensions of the box in each axis (defaults to [0.5, 0.5, 0.5]).
    * @param {Number} opts.widthSegments The number of divisions along the X axis of the box (defaults to 1).
    * @param {Number} opts.lengthSegments The number of divisions along the Z axis of the box (defaults to 1).
    * @param {Number} opts.heightSegments The number of divisions along the Y axis of the box (defaults to 1).
    * @return {pc.Mesh} A new box-shaped mesh.
    * @author Will Eastcott
    */
   function createBox(device: pc.GraphicsDevice, opts: { halfExtents: pc.Vec3, widthSegments: Number, lengthSegments: Number, heightSegments: Number }): pc.Mesh;

   /**
    * @enum pc.BLEND
    * @name pc.BLEND_SUBTRACTIVE
    * @description Subtract the color of the source fragment from the destination fragment
    * and write the result to the frame buffer.
    */
   enum BLEND_SUBTRACTIVE {
   }

   /**
    * @enum pc.BLEND
    * @name pc.BLEND_ADDITIVE
    * @description Add the color of the source fragment to the destination fragment
    * and write the result to the frame buffer.
    */
   enum BLEND_ADDITIVE {
   }

   /**
    * @enum pc.BLEND
    * @name pc.BLEND_NORMAL
    * @description Enable simple translucency for materials such as glass. This is
    * equivalent to enabling a source blend mode of pc.BLENDMODE_SRC_ALPHA and a destination
    * blend mode of pc.BLENDMODE_ONE_MINUS_SRC_ALPHA.
    */
   enum BLEND_NORMAL {
   }

   /**
    * @enum pc.BLEND
    * @name pc.BLEND_NONE
    * @description Disable blending.
    */
   enum BLEND_NONE {
   }

   /**
    * @enum pc.BLEND
    * @name pc.BLEND_PREMULTIPLIED
    * @description Similar to pc.BLEND_NORMAL expect the source fragment is assumed to have
    * already been multiplied by the source alpha value.
    */
   enum BLEND_PREMULTIPLIED {
   }

   /**
    * @enum pc.BLEND
    * @name pc.BLEND_MULTIPLICATIVE
    * @description Multiply the color of the source fragment by the color of the destination
    * fragment and write the result to the frame buffer.
    */
   enum BLEND_MULTIPLICATIVE {
   }

   /**
    * @enum pc.BLEND
    * @name pc.BLEND_ADDITIVEALPHA
    * @description Same as pc.BLEND_ADDITIVE except the source RGB is multiplied by the source alpha.
    */
   enum BLEND_ADDITIVEALPHA {
   }

   /**
    * @enum pc.BLEND
    * @name pc.BLEND_MULTIPLICATIVE2X
    * @description Multiplies colors and doubles the result
    */
   enum BLEND_MULTIPLICATIVE2X {
   }

   /**
    * @enum pc.BLEND
    * @name pc.BLEND_SCREEN
    * @description Softer version of additive
    */
   enum BLEND_SCREEN {
   }

   /**
    * @enum pc.FOG
    * @name pc.FOG_NONE
    * @description No fog is applied to the scene.
    */
   enum FOG_NONE {
   }

   /**
    * @enum pc.FOG
    * @name pc.FOG_LINEAR
    * @description Fog rises linearly from zero to 1 between a start and end depth.
    */
   enum FOG_LINEAR {
   }

   /**
    * @enum pc.FOG
    * @name pc.FOG_EXP
    * @description Fog rises according to an exponential curve controlled by a density value.
    */
   enum FOG_EXP {
   }

   /**
    * @enum pc.FOG
    * @name pc.FOG_EXP2
    * @description Fog rises according to an exponential curve controlled by a density value.
    */
   enum FOG_EXP2 {
   }

   /**
    * @enum pc.LIGHTTYPE
    * @name pc.LIGHTTYPE_DIRECTIONAL
    * @description Directional (global) light source.
    */
   enum LIGHTTYPE_DIRECTIONAL {
   }

   /**
    * @enum pc.LIGHTTYPE
    * @name pc.LIGHTTYPE_POINT
    * @description Point (local) light source.
    */
   enum LIGHTTYPE_POINT {
   }

   /**
    * @enum pc.LIGHTTYPE
    * @name pc.LIGHTTYPE_SPOT
    * @description Spot (local) light source.
    */
   enum LIGHTTYPE_SPOT {
   }

   /**
    * @enum pc.PROJECTION
    * @name pc.PROJECTION_PERSPECTIVE
    * @description A perspective camera projection where the frustum shape is essentially pyrimidal.
    */
   enum PROJECTION_PERSPECTIVE {
   }

   /**
    * @enum pc.PROJECTION
    * @name pc.PROJECTION_ORTHOGRAPHIC
    * @description An orthographic camera projection where the frustum shape is essentially a cuboid.
    */
   enum PROJECTION_ORTHOGRAPHIC {
   }

   /**
    * @name pc.Scene
    * @class A scene is a container for {@link pc.Model} instances.
    * @description Creates a new Scene.
    * @property {pc.Color} ambientLight The color of the scene's ambient light. Defaults to black (0, 0, 0).
    * @property {String} fog The type of fog used by the scene. Can be:
    * <ul>
    *     <li>pc.FOG_NONE</li>
    *     <li>pc.FOG_LINEAR</li>
    *     <li>pc.FOG_EXP</li>
    *     <li>pc.FOG_EXP2</li>
    * </ul>
    * @property {pc.Color} fogColor The color of the fog (if enabled). Defaults to black (0, 0, 0).
    * @property {Number} fogDensity The density of the fog (if enabled). This property is only valid if the
    * fog property is set to pc.FOG_EXP or pc.FOG_EXP2. Defaults to 0.
    * @property {Number} fogEnd The distance from the viewpoint where linear fog reaches its maximum. This
    * property is only valid if the fog property is set to pc.FOG_LINEAR. Defaults to 1000.
    * @property {Number} fogStart The distance from the viewpoint where linear fog begins. This property is
    * only valid if the fog property is set to pc.FOG_LINEAR. Defaults to 1.
    * @property {Number} gammaCorrection The gamma correction to apply when rendering the scene. Can be:
    * <ul>
    *     <li>pc.GAMMA_NONE</li>
    *     <li>pc.GAMMA_SRGB</li>
    *     <li>pc.GAMMA_SRGBFAST</li>
    * </ul>
    * Defaults to pc.GAMMA_NONE.
    * @property {Number} toneMapping The tonemapping transform to apply when writing fragments to the
    * frame buffer. Can be:
    * <ul>
    *     <li>pc.TONEMAP_LINEAR</li>
    *     <li>pc.TONEMAP_FILMIC</li>
    *     <li>pc.TONEMAP_HEJL</li>
    *     <li>pc.TONEMAP_ACES</li>
    * </ul>
    * Defaults to pc.TONEMAP_LINEAR.
    * @property {pc.Texture} skybox A cube map texture used as the scene's skybox. Defaults to null.
    * @property {Number} skyboxIntensity Multiplier for skybox intensity. Defaults to 1.
    * @property {Number} skyboxMip The mip level of the skybox to be displayed. Defaults to 0 (base level).
    * Only valid for prefiltered cubemap skyboxes.
    * @property {Number} lightmapSizeMultiplier Lightmap resolution multiplier
    * @property {Number} lightmapMaxResolution Maximum lightmap resolution
    * @property {Number} lightmapMode Baking mode, with possible values:
    * <ul>
    *     <li>pc.BAKE_COLOR: single color lightmap
    *     <li>pc.BAKE_COLORDIR: single color lightmap + dominant light direction (used for bump/specular)
    * </ul>
    * Only lights with bakeDir=true will be used for generating the dominant light direction.
    */
   class Scene {
       /**
        * @name pc.Scene
        * @class A scene is a container for {@link pc.Model} instances.
        * @description Creates a new Scene.
        * @property {pc.Color} ambientLight The color of the scene's ambient light. Defaults to black (0, 0, 0).
        * @property {String} fog The type of fog used by the scene. Can be:
        * <ul>
        *     <li>pc.FOG_NONE</li>
        *     <li>pc.FOG_LINEAR</li>
        *     <li>pc.FOG_EXP</li>
        *     <li>pc.FOG_EXP2</li>
        * </ul>
        * @property {pc.Color} fogColor The color of the fog (if enabled). Defaults to black (0, 0, 0).
        * @property {Number} fogDensity The density of the fog (if enabled). This property is only valid if the
        * fog property is set to pc.FOG_EXP or pc.FOG_EXP2. Defaults to 0.
        * @property {Number} fogEnd The distance from the viewpoint where linear fog reaches its maximum. This
        * property is only valid if the fog property is set to pc.FOG_LINEAR. Defaults to 1000.
        * @property {Number} fogStart The distance from the viewpoint where linear fog begins. This property is
        * only valid if the fog property is set to pc.FOG_LINEAR. Defaults to 1.
        * @property {Number} gammaCorrection The gamma correction to apply when rendering the scene. Can be:
        * <ul>
        *     <li>pc.GAMMA_NONE</li>
        *     <li>pc.GAMMA_SRGB</li>
        *     <li>pc.GAMMA_SRGBFAST</li>
        * </ul>
        * Defaults to pc.GAMMA_NONE.
        * @property {Number} toneMapping The tonemapping transform to apply when writing fragments to the
        * frame buffer. Can be:
        * <ul>
        *     <li>pc.TONEMAP_LINEAR</li>
        *     <li>pc.TONEMAP_FILMIC</li>
        *     <li>pc.TONEMAP_HEJL</li>
        *     <li>pc.TONEMAP_ACES</li>
        * </ul>
        * Defaults to pc.TONEMAP_LINEAR.
        * @property {pc.Texture} skybox A cube map texture used as the scene's skybox. Defaults to null.
        * @property {Number} skyboxIntensity Multiplier for skybox intensity. Defaults to 1.
        * @property {Number} skyboxMip The mip level of the skybox to be displayed. Defaults to 0 (base level).
        * Only valid for prefiltered cubemap skyboxes.
        * @property {Number} lightmapSizeMultiplier Lightmap resolution multiplier
        * @property {Number} lightmapMaxResolution Maximum lightmap resolution
        * @property {Number} lightmapMode Baking mode, with possible values:
        * <ul>
        *     <li>pc.BAKE_COLOR: single color lightmap
        *     <li>pc.BAKE_COLORDIR: single color lightmap + dominant light direction (used for bump/specular)
        * </ul>
        * Only lights with bakeDir=true will be used for generating the dominant light direction.
        */
       constructor();

       /**
        * @function
        * @name pc.Scene#addModel
        * @description Adds the specified model to the scene.
        * @author Will Eastcott
        */
       addModel(): void;

       /**
        * @function
        * @name pc.Scene#removeModel
        * @description Removes the specified model from the scene.
        * @author Will Eastcott
        */
       removeModel(): void;

       /**
        * @function
        * @name pc.Scene#update
        * @description Synchronizes the graph node hierarchy of every model in the scene.
        * @author Will Eastcott
        */
       update(): void;

   }

   /**
    * @name pc.Skin
    * @class A skin contains data about the bones in a hierarchy that drive a skinned mesh animation.
    * Specifically, the skin stores the bone name and inverse bind matrix and for each bone.
    * Inverse bind matrices are instrumental in the mathematics of vertex skinning.
    * @param {pc.GraphicsDevice} graphicsDevice The graphics device used to manage this skin.
    * @param {pc.Mat4[]} ibp The array of inverse bind matrices.
    * @param {String[]} boneNames The array of bone names for the bones referenced by this skin.
    * @author Will Eastcott
    */
   class Skin {
       /**
        * @name pc.Skin
        * @class A skin contains data about the bones in a hierarchy that drive a skinned mesh animation.
        * Specifically, the skin stores the bone name and inverse bind matrix and for each bone.
        * Inverse bind matrices are instrumental in the mathematics of vertex skinning.
        * @param {pc.GraphicsDevice} graphicsDevice The graphics device used to manage this skin.
        * @param {pc.Mat4[]} ibp The array of inverse bind matrices.
        * @param {String[]} boneNames The array of bone names for the bones referenced by this skin.
        * @author Will Eastcott
        */
       constructor(graphicsDevice: pc.GraphicsDevice, ibp: pc.Mat4[], boneNames: String[]);

   }

   /**
    * @name pc.SkinInstance
    * @class A skin instance is responsible for generating the matrix palette that is used to
    * skin vertices from object space to world space.
    * @param {pc.Skin} skin The skin that will provide the inverse bind pose matrices to
    * generate the final matrix palette.
    * @author Will Eastcott
    */
   class SkinInstance {
       /**
        * @name pc.SkinInstance
        * @class A skin instance is responsible for generating the matrix palette that is used to
        * skin vertices from object space to world space.
        * @param {pc.Skin} skin The skin that will provide the inverse bind pose matrices to
        * generate the final matrix palette.
        * @author Will Eastcott
        */
       constructor(skin: pc.Skin);

   }

   /**
    * @name pc.StandardMaterial
    * @class A Standard material is the main, general purpose material that is most often used for rendering.
    * It can approximate a wide variety of surface types and can simlulate dynamic reflected light.
    * @property {pc.Color} ambient The ambient color of the material. This color value is 3-component (RGB),
    * where each component is between 0 and 1.
    * @property {pc.Color} diffuse The diffuse color of the material. This color value is 3-component (RGB),
    * where each component is between 0 and 1.
    * @property {pc.Texture} diffuseMap The diffuse map of the material. This must be a 2D texture rather
    * than a cube map. If this property is set to a valid texture, the texture is used as the source for diffuse
    * color in preference to the 'diffuse' property.
    * @property {Number} diffuseMapUv Diffuse map UV channel
    * @property {String} diffuseMapChannel Color channels of the diffuse map to use. Can be "r", "g", "b", "a", "rgb" or any swizzled combination.
    * @property {Boolean} diffuseMapVertexColor Use vertex colors for diffuse instead of a map
    * @property {pc.Vec2} diffuseMapTiling Controls the 2D tiling of the diffuse map.
    * @property {pc.Vec2} diffuseMapOffset Controls the 2D offset of the diffuse map. Each component is between 0 and 1.
    * @property {pc.Color} specular The specular color of the material. This color value is 3-component (RGB),
    * @property {pc.Texture} specularMap The per-pixel specular map of the material. This must be a 2D texture
    * rather than a cube map. If this property is set to a valid texture, the texture is used as the source for
    * specular color in preference to the 'specular' property.
    * @property {Number} specularMapUv Specular map UV channel
    * @property {String} specularMapChannel Color channels of the specular map to use. Can be "r", "g", "b", "a", "rgb" or any swizzled combination.
    * @property {Boolean} specularMapVertexColor Use vertex colors for specular instead of a map
    * @property {pc.Vec2} specularMapTiling Controls the 2D tiling of the specular map.
    * @property {pc.Vec2} specularMapOffset Controls the 2D offset of the specular map. Each component is between 0 and 1.
    * @property {Number} metalness Defines how much the surface is metallic. From 0 (dielectric) to 1 (metal).
    * This can be used as alternative to specular color to save space.
    * Metallic surfaces have their reflection tinted with diffuse color.
    * @property {pc.Texture} metalnessMap Monochrome metalness map.
    * @property {Number} metalnessMapUv Metnalness map UV channel
    * @property {String} metalnessMapChannel Color channel of the metalness map to use. Can be "r", "g", "b" or "a".
    * @property {Boolean} metalnessMapVertexColor Use vertex colors for metalness instead of a map
    * @property {pc.Vec2} metalnessMapTiling Controls the 2D tiling of the metalness map.
    * @property {pc.Vec2} metalnessMapOffset Controls the 2D offset of the metalness map. Each component is between 0 and 1.
    * @property {Boolean} useMetalness Use metalness properties instead of specular.
    * @property {Number} shininess Defines glossiness of the material from 0 (rough) to 100 (mirror).
    * A higher shininess value results in a more focussed specular highlight.
    * @property {pc.Texture} glossMap The per-pixel gloss of the material. This must be a 2D texture
    * rather than a cube map. If this property is set to a valid texture, the texture is used as the source for
    * shininess in preference to the 'shininess' property.
    * @property {Number} glossMapUv Gloss map UV channel
    * @property {String} glossMapChannel Color channel of the gloss map to use. Can be "r", "g", "b" or "a".
    * @property {Boolean} glossMapVertexColor Use vertex colors for glossiness instead of a map
    * @property {pc.Vec2} glossMapTiling Controls the 2D tiling of the gloss map.
    * @property {pc.Vec2} glossMapOffset Controls the 2D offset of the gloss map. Each component is between 0 and 1.
    * @property {Number} refraction Defines the visibility of refraction. Material can refract the same cube map as used for reflections.
    * @property {Number} refractionIndex Defines the index of refraction, i.e. the amount of distortion.
    * The value is calculated as (outerIor / surfaceIor), where inputs are measured indices of refraction, the one around the object and the one of it's own surface.
    * In most situations outer medium is air, so outerIor will be approximately 1. Then you only need to do (1.0 / surfaceIor).
    * @property {pc.Vec3} emissive The emissive color of the material. This color value is 3-component (RGB),
    * where each component is between 0 and 1.
    * @property {pc.Texture} emissiveMap The emissive map of the material. This must be a 2D texture rather
    * than a cube map. If this property is set to a valid texture, the texture is used as the source for emissive
    * color in preference to the 'emissive' property.
    * @property {Number} emissiveIntensity Emissive color multiplier.
    * @property {Number} emissiveMapUv Emissive map UV channel
    * @property {String} emissiveMapChannel Color channels of the emissive map to use. Can be "r", "g", "b", "a", "rgb" or any swizzled combination.
    * @property {Boolean} emissiveMapVertexColor Use vertex colors for emission instead of a map
    * @property {pc.Vec2} emissiveMapTiling Controls the 2D tiling of the emissive map.
    * @property {pc.Vec2} emissiveMapOffset Controls the 2D offset of the emissive map. Each component is between 0 and 1.
    * @property {Number} opacity The opacity of the material. This value can be between 0 and 1, where 0 is fully
    * transparent and 1 is fully opaque. If you want the material to be transparent you also need to
    * set the {@link pc.Material#blendType} to pc.BLEND_NORMAL or pc.BLEND_ADDITIVE.
    * @property {pc.Texture} opacityMap The opacity map of the material. This must be a 2D texture rather
    * than a cube map. If this property is set to a valid texture, the texture is used as the source for opacity
    * in preference to the 'opacity' property. If you want the material to be transparent you also need to
    * set the {@link pc.Material#blendType} to pc.BLEND_NORMAL or pc.BLEND_ADDITIVE.
    * @property {Number} opacityMapUv Opacity map UV channel
    * @property {String} opacityMapChannel Color channel of the opacity map to use. Can be "r", "g", "b" or "a".
    * @property {Boolean} opacityMapVertexColor Use vertex colors for opacity instead of a map
    * @property {pc.Vec2} opacityMapTiling Controls the 2D tiling of the opacity map.
    * @property {pc.Vec2} opacityMapOffset Controls the 2D offset of the opacity map. Each component is between 0 and 1.
    * @property {pc.Texture} normalMap The normal map of the material. This must be a 2D texture rather
    * than a cube map. The texture must contains normalized, tangent space normals.
    * @property {Number} normalMapUv Normal map UV channel
    * @property {pc.Vec2} normalMapTiling Controls the 2D tiling of the normal map.
    * @property {pc.Vec2} normalMapOffset Controls the 2D offset of the normal map. Each component is between 0 and 1.
    * @property {pc.Texture} heightMap The height map of the material. This must be a 2D texture rather
    * than a cube map. The texture contain values defining the height of the surface at that point where darker
    * pixels are lower and lighter pixels are higher.
    * @property {Number} heightMapUv Height map UV channel
    * @property {String} heightMapChannel Color channel of the height map to use. Can be "r", "g", "b" or "a".
    * @property {pc.Vec2} heightMapTiling Controls the 2D tiling of the height map.
    * @property {pc.Vec2} heightMapOffset Controls the 2D offset of the height map. Each component is between 0 and 1.
    * @property {Number} bumpiness The bumpiness of the material. This value scales the assigned normal map
    * and can be between 0 and 1, where 0 shows no contribution from the normal map and 1 results in a full contribution.
    * @property {Number} heightMapFactor Height map multiplier. Height maps are used to create a parallax mapping effect
    * and modifying this value will alter the strength of the parallax effect.
    * @property {pc.Texture} sphereMap The spherical environment map of the material.
    * @property {pc.Texture} cubeMap The cubic environment map of the material.
    * @property {Number} cubeMapProjection The type of projection applied to the cubeMap property:
    * <ul>
    *     <li>{@link pc.CUBEPROJ_NONE}: The cube map is treated as if it is infinitely far away.</li>
    *     <li>{@link pc.CUBEPROJ_BOX}: Box-projection based on a world space axis-aligned bounding box.</li>
    * </ul>
    * Defaults to pc.CUBEPROJ_NONE.
    * @property {pc.BoundingBox} cubeMapProjectionBox The world space axis-aligned bounding box defining the
    * box-projection used for the cubeMap property. Only used when cubeMapProjection is set to pc.CUBEPROJ_BOX.
    * @property {Number} reflectivity The reflectivity of the material. This value scales the reflection map and
    * can be between 0 and 1, where 0 shows no reflection and 1 is fully reflective.
    * @property {pc.Texture} lightMap The light map of the material.
    * @property {Number} lightMapUv Lightmap UV channel
    * @property {String} lightMapChannel Color channels of the lightmap to use. Can be "r", "g", "b", "a", "rgb" or any swizzled combination.
    * @property {Boolean} lightMapVertexColor Use vertex lightmap instead of a texture-based one
    * @property {pc.Vec2} lightMapTiling Controls the 2D tiling of the lightmap.
    * @property {pc.Vec2} lightMapOffset Controls the 2D offset of the lightmap. Each component is between 0 and 1.
    * @property {Boolean} ambientTint Enables scene ambient multiplication by material ambient color.
    * @property {Boolean} diffuseMapTint Enables diffuseMap multiplication by diffuse color.
    * @property {Boolean} specularMapTint Enables specularMap multiplication by specular color.
    * @property {Boolean} emissiveMapTint Enables emissiveMap multiplication by emissive color.
    * @property {pc.Texture} aoMap Baked ambient occlusion map. Modulates ambient color.
    * @property {Number} aoMapUv AO map UV channel
    * @property {String} aoMapChannel Color channel of the AO map to use. Can be "r", "g", "b" or "a".
    * @property {Boolean} aoMapVertexColor Use vertex colors for AO instead of a map
    * @property {pc.Vec2} aoMapTiling Controls the 2D tiling of the AO map.
    * @property {pc.Vec2} aoMapOffset Controls the 2D offset of the AO map. Each component is between 0 and 1.
    * @property {Number} occludeSpecular Uses aoMap to occlude specular/reflection. It's a hack, because real specular occlusion is view-dependent. However, it's much better than nothing.
    * <ul>
    *     <li>{@link pc.SPECOCC_NONE}: No specular occlusion</li>
    *     <li>{@link pc.SPECOCC_AO}: Use AO map directly to occlude specular.</li>
    *     <li>{@link pc.SPECOCC_GLOSSDEPENDENT}: Modify AO map based on material glossiness/view angle to occlude specular.</li>
    * </ul>
    * @property {Number} occludeSpecularIntensity Controls visibility of specular occlusion.
    * @property {Boolean} specularAntialias Enables Toksvig AA for mipmapped normal maps with specular.
    * @property {Boolean} conserveEnergy Defines how diffuse and specular components are combined when Fresnel is on.
   It is recommended that you leave this option enabled, although you may want to disable it in case when all reflection comes only from a few light sources, and you don't use an environment map, therefore having mostly black reflection.
    * @property {Number} shadingModel Defines the shading model.
    * <ul>
    *     <li>{@link pc.SPECULAR_PHONG}: Phong without energy conservation. You should only use it as a backwards compatibility with older projects.</li>
    *     <li>{@link pc.SPECULAR_BLINN}: Energy-conserving Blinn-Phong.</li>
    * </ul>
    * @property {Number} fresnelModel Defines the formula used for Fresnel effect.
   As a side-effect, enabling any Fresnel model changes the way diffuse and reflection components are combined.
   When Fresnel is off, legacy non energy-conserving combining is used. When it is on, combining behaviour is defined by conserveEnergy parameter.
    * <ul>
    *     <li>{@link pc.FRESNEL_NONE}: No Fresnel.</li>
    *     <li>{@link pc.FRESNEL_SCHLICK}: Schlick's approximation of Fresnel (recommended). Parameterized by specular color.</li>
    * </ul>
    * @property {Boolean} useFog Apply fogging (as configured in scene settings)
    * @property {Boolean} useLighting Apply lighting
    * @property {Boolean} useSkybox Apply scene skybox as prefiltered environment map
    * @property {Boolean} useGammaTonemap Apply gamma correction and tonemapping (as configured in scene settings)
    *
    * @example
    * // Create a new Standard material
    * var material = new pc.StandardMaterial();
    *
    * // Update the material's diffuse and specular properties
    * material.diffuse.set(1, 0, 0);
    * material.specular.set(1, 1, 1);
    *
    * // Notify the material that it has been modified
    * material.update();
    *
    * @extends pc.Material
    * @author Will Eastcott and Arthur Rahteenko
    */
   class StandardMaterial extends pc.Material {
       /**
        * @name pc.StandardMaterial
        * @class A Standard material is the main, general purpose material that is most often used for rendering.
        * It can approximate a wide variety of surface types and can simlulate dynamic reflected light.
        * @property {pc.Color} ambient The ambient color of the material. This color value is 3-component (RGB),
        * where each component is between 0 and 1.
        * @property {pc.Color} diffuse The diffuse color of the material. This color value is 3-component (RGB),
        * where each component is between 0 and 1.
        * @property {pc.Texture} diffuseMap The diffuse map of the material. This must be a 2D texture rather
        * than a cube map. If this property is set to a valid texture, the texture is used as the source for diffuse
        * color in preference to the 'diffuse' property.
        * @property {Number} diffuseMapUv Diffuse map UV channel
        * @property {String} diffuseMapChannel Color channels of the diffuse map to use. Can be "r", "g", "b", "a", "rgb" or any swizzled combination.
        * @property {Boolean} diffuseMapVertexColor Use vertex colors for diffuse instead of a map
        * @property {pc.Vec2} diffuseMapTiling Controls the 2D tiling of the diffuse map.
        * @property {pc.Vec2} diffuseMapOffset Controls the 2D offset of the diffuse map. Each component is between 0 and 1.
        * @property {pc.Color} specular The specular color of the material. This color value is 3-component (RGB),
        * @property {pc.Texture} specularMap The per-pixel specular map of the material. This must be a 2D texture
        * rather than a cube map. If this property is set to a valid texture, the texture is used as the source for
        * specular color in preference to the 'specular' property.
        * @property {Number} specularMapUv Specular map UV channel
        * @property {String} specularMapChannel Color channels of the specular map to use. Can be "r", "g", "b", "a", "rgb" or any swizzled combination.
        * @property {Boolean} specularMapVertexColor Use vertex colors for specular instead of a map
        * @property {pc.Vec2} specularMapTiling Controls the 2D tiling of the specular map.
        * @property {pc.Vec2} specularMapOffset Controls the 2D offset of the specular map. Each component is between 0 and 1.
        * @property {Number} metalness Defines how much the surface is metallic. From 0 (dielectric) to 1 (metal).
        * This can be used as alternative to specular color to save space.
        * Metallic surfaces have their reflection tinted with diffuse color.
        * @property {pc.Texture} metalnessMap Monochrome metalness map.
        * @property {Number} metalnessMapUv Metnalness map UV channel
        * @property {String} metalnessMapChannel Color channel of the metalness map to use. Can be "r", "g", "b" or "a".
        * @property {Boolean} metalnessMapVertexColor Use vertex colors for metalness instead of a map
        * @property {pc.Vec2} metalnessMapTiling Controls the 2D tiling of the metalness map.
        * @property {pc.Vec2} metalnessMapOffset Controls the 2D offset of the metalness map. Each component is between 0 and 1.
        * @property {Boolean} useMetalness Use metalness properties instead of specular.
        * @property {Number} shininess Defines glossiness of the material from 0 (rough) to 100 (mirror).
        * A higher shininess value results in a more focussed specular highlight.
        * @property {pc.Texture} glossMap The per-pixel gloss of the material. This must be a 2D texture
        * rather than a cube map. If this property is set to a valid texture, the texture is used as the source for
        * shininess in preference to the 'shininess' property.
        * @property {Number} glossMapUv Gloss map UV channel
        * @property {String} glossMapChannel Color channel of the gloss map to use. Can be "r", "g", "b" or "a".
        * @property {Boolean} glossMapVertexColor Use vertex colors for glossiness instead of a map
        * @property {pc.Vec2} glossMapTiling Controls the 2D tiling of the gloss map.
        * @property {pc.Vec2} glossMapOffset Controls the 2D offset of the gloss map. Each component is between 0 and 1.
        * @property {Number} refraction Defines the visibility of refraction. Material can refract the same cube map as used for reflections.
        * @property {Number} refractionIndex Defines the index of refraction, i.e. the amount of distortion.
        * The value is calculated as (outerIor / surfaceIor), where inputs are measured indices of refraction, the one around the object and the one of it's own surface.
        * In most situations outer medium is air, so outerIor will be approximately 1. Then you only need to do (1.0 / surfaceIor).
        * @property {pc.Vec3} emissive The emissive color of the material. This color value is 3-component (RGB),
        * where each component is between 0 and 1.
        * @property {pc.Texture} emissiveMap The emissive map of the material. This must be a 2D texture rather
        * than a cube map. If this property is set to a valid texture, the texture is used as the source for emissive
        * color in preference to the 'emissive' property.
        * @property {Number} emissiveIntensity Emissive color multiplier.
        * @property {Number} emissiveMapUv Emissive map UV channel
        * @property {String} emissiveMapChannel Color channels of the emissive map to use. Can be "r", "g", "b", "a", "rgb" or any swizzled combination.
        * @property {Boolean} emissiveMapVertexColor Use vertex colors for emission instead of a map
        * @property {pc.Vec2} emissiveMapTiling Controls the 2D tiling of the emissive map.
        * @property {pc.Vec2} emissiveMapOffset Controls the 2D offset of the emissive map. Each component is between 0 and 1.
        * @property {Number} opacity The opacity of the material. This value can be between 0 and 1, where 0 is fully
        * transparent and 1 is fully opaque. If you want the material to be transparent you also need to
        * set the {@link pc.Material#blendType} to pc.BLEND_NORMAL or pc.BLEND_ADDITIVE.
        * @property {pc.Texture} opacityMap The opacity map of the material. This must be a 2D texture rather
        * than a cube map. If this property is set to a valid texture, the texture is used as the source for opacity
        * in preference to the 'opacity' property. If you want the material to be transparent you also need to
        * set the {@link pc.Material#blendType} to pc.BLEND_NORMAL or pc.BLEND_ADDITIVE.
        * @property {Number} opacityMapUv Opacity map UV channel
        * @property {String} opacityMapChannel Color channel of the opacity map to use. Can be "r", "g", "b" or "a".
        * @property {Boolean} opacityMapVertexColor Use vertex colors for opacity instead of a map
        * @property {pc.Vec2} opacityMapTiling Controls the 2D tiling of the opacity map.
        * @property {pc.Vec2} opacityMapOffset Controls the 2D offset of the opacity map. Each component is between 0 and 1.
        * @property {pc.Texture} normalMap The normal map of the material. This must be a 2D texture rather
        * than a cube map. The texture must contains normalized, tangent space normals.
        * @property {Number} normalMapUv Normal map UV channel
        * @property {pc.Vec2} normalMapTiling Controls the 2D tiling of the normal map.
        * @property {pc.Vec2} normalMapOffset Controls the 2D offset of the normal map. Each component is between 0 and 1.
        * @property {pc.Texture} heightMap The height map of the material. This must be a 2D texture rather
        * than a cube map. The texture contain values defining the height of the surface at that point where darker
        * pixels are lower and lighter pixels are higher.
        * @property {Number} heightMapUv Height map UV channel
        * @property {String} heightMapChannel Color channel of the height map to use. Can be "r", "g", "b" or "a".
        * @property {pc.Vec2} heightMapTiling Controls the 2D tiling of the height map.
        * @property {pc.Vec2} heightMapOffset Controls the 2D offset of the height map. Each component is between 0 and 1.
        * @property {Number} bumpiness The bumpiness of the material. This value scales the assigned normal map
        * and can be between 0 and 1, where 0 shows no contribution from the normal map and 1 results in a full contribution.
        * @property {Number} heightMapFactor Height map multiplier. Height maps are used to create a parallax mapping effect
        * and modifying this value will alter the strength of the parallax effect.
        * @property {pc.Texture} sphereMap The spherical environment map of the material.
        * @property {pc.Texture} cubeMap The cubic environment map of the material.
        * @property {Number} cubeMapProjection The type of projection applied to the cubeMap property:
        * <ul>
        *     <li>{@link pc.CUBEPROJ_NONE}: The cube map is treated as if it is infinitely far away.</li>
        *     <li>{@link pc.CUBEPROJ_BOX}: Box-projection based on a world space axis-aligned bounding box.</li>
        * </ul>
        * Defaults to pc.CUBEPROJ_NONE.
        * @property {pc.BoundingBox} cubeMapProjectionBox The world space axis-aligned bounding box defining the
        * box-projection used for the cubeMap property. Only used when cubeMapProjection is set to pc.CUBEPROJ_BOX.
        * @property {Number} reflectivity The reflectivity of the material. This value scales the reflection map and
        * can be between 0 and 1, where 0 shows no reflection and 1 is fully reflective.
        * @property {pc.Texture} lightMap The light map of the material.
        * @property {Number} lightMapUv Lightmap UV channel
        * @property {String} lightMapChannel Color channels of the lightmap to use. Can be "r", "g", "b", "a", "rgb" or any swizzled combination.
        * @property {Boolean} lightMapVertexColor Use vertex lightmap instead of a texture-based one
        * @property {pc.Vec2} lightMapTiling Controls the 2D tiling of the lightmap.
        * @property {pc.Vec2} lightMapOffset Controls the 2D offset of the lightmap. Each component is between 0 and 1.
        * @property {Boolean} ambientTint Enables scene ambient multiplication by material ambient color.
        * @property {Boolean} diffuseMapTint Enables diffuseMap multiplication by diffuse color.
        * @property {Boolean} specularMapTint Enables specularMap multiplication by specular color.
        * @property {Boolean} emissiveMapTint Enables emissiveMap multiplication by emissive color.
        * @property {pc.Texture} aoMap Baked ambient occlusion map. Modulates ambient color.
        * @property {Number} aoMapUv AO map UV channel
        * @property {String} aoMapChannel Color channel of the AO map to use. Can be "r", "g", "b" or "a".
        * @property {Boolean} aoMapVertexColor Use vertex colors for AO instead of a map
        * @property {pc.Vec2} aoMapTiling Controls the 2D tiling of the AO map.
        * @property {pc.Vec2} aoMapOffset Controls the 2D offset of the AO map. Each component is between 0 and 1.
        * @property {Number} occludeSpecular Uses aoMap to occlude specular/reflection. It's a hack, because real specular occlusion is view-dependent. However, it's much better than nothing.
        * <ul>
        *     <li>{@link pc.SPECOCC_NONE}: No specular occlusion</li>
        *     <li>{@link pc.SPECOCC_AO}: Use AO map directly to occlude specular.</li>
        *     <li>{@link pc.SPECOCC_GLOSSDEPENDENT}: Modify AO map based on material glossiness/view angle to occlude specular.</li>
        * </ul>
        * @property {Number} occludeSpecularIntensity Controls visibility of specular occlusion.
        * @property {Boolean} specularAntialias Enables Toksvig AA for mipmapped normal maps with specular.
        * @property {Boolean} conserveEnergy Defines how diffuse and specular components are combined when Fresnel is on.
       It is recommended that you leave this option enabled, although you may want to disable it in case when all reflection comes only from a few light sources, and you don't use an environment map, therefore having mostly black reflection.
        * @property {Number} shadingModel Defines the shading model.
        * <ul>
        *     <li>{@link pc.SPECULAR_PHONG}: Phong without energy conservation. You should only use it as a backwards compatibility with older projects.</li>
        *     <li>{@link pc.SPECULAR_BLINN}: Energy-conserving Blinn-Phong.</li>
        * </ul>
        * @property {Number} fresnelModel Defines the formula used for Fresnel effect.
       As a side-effect, enabling any Fresnel model changes the way diffuse and reflection components are combined.
       When Fresnel is off, legacy non energy-conserving combining is used. When it is on, combining behaviour is defined by conserveEnergy parameter.
        * <ul>
        *     <li>{@link pc.FRESNEL_NONE}: No Fresnel.</li>
        *     <li>{@link pc.FRESNEL_SCHLICK}: Schlick's approximation of Fresnel (recommended). Parameterized by specular color.</li>
        * </ul>
        * @property {Boolean} useFog Apply fogging (as configured in scene settings)
        * @property {Boolean} useLighting Apply lighting
        * @property {Boolean} useSkybox Apply scene skybox as prefiltered environment map
        * @property {Boolean} useGammaTonemap Apply gamma correction and tonemapping (as configured in scene settings)
        *
        * @example
        * // Create a new Standard material
        * var material = new pc.StandardMaterial();
        *
        * // Update the material's diffuse and specular properties
        * material.diffuse.set(1, 0, 0);
        * material.specular.set(1, 1, 1);
        *
        * // Notify the material that it has been modified
        * material.update();
        *
        * @extends pc.Material
        * @author Will Eastcott and Arthur Rahteenko
        */
       constructor();

       /**
        * @function
        * @name pc.StandardMaterial#clone
        * @description Duplicates a Standard material. All properties are duplicated except textures
        * where only the references are copied.
        * @returns {pc.StandardMaterial} A cloned Standard material.
        */
       clone(): pc.StandardMaterial;

   }

   /**
    * @name pc.ScriptRegistry
    * @class Container for all Script Types that are available to this application
    * @description Create an instance of a pc.ScriptRegistry.
    * Note: PlayCanvas scripts can access the Script Registry from inside the application with {@link pc.Application#scripts} {@link pc.ADDRESS_REPEAT}.
    * @param {pc.Application} app Application to attach registry to.
    */
   class ScriptRegistry {
       /**
        * @name pc.ScriptRegistry
        * @class Container for all Script Types that are available to this application
        * @description Create an instance of a pc.ScriptRegistry.
        * Note: PlayCanvas scripts can access the Script Registry from inside the application with {@link pc.Application#scripts} {@link pc.ADDRESS_REPEAT}.
        * @param {pc.Application} app Application to attach registry to.
        */
       constructor(app: pc.Application);

       /**
        * @function
        * @name pc.ScriptRegistry#add
        * @description Add {@link ScriptType} to registry.
        * Note: when {@link pc.createScript} is called, it will add the {@link ScriptType} to the registry automatically.
        * If a script already exists in registry, and the new script has a `swap` method defined,
        * it will perform code hot swapping automatically in async manner.
        * @param {ScriptType} scriptType Script Type that is created using {@link pc.createScript}
        * @returns {Boolean} True if added for the first time or false if script already exists
        * @example
        * var PlayerController = pc.createScript('playerController');
        * // playerController Script Type will be added to pc.ScriptRegistry automatically
        * app.scripts.has('playerController') === true; // true
        */
       add(scriptType: ScriptType): Boolean;

       /**
        * @function
        * @name pc.ScriptRegistry#remove
        * @description Remove {@link ScriptType}.
        * @param {String} name Name of a {@link ScriptType} to remove
        * @returns {Boolean} True if removed or False if already not in registry
        * @example
        * app.scripts.remove('playerController');
        */
       remove(name: String): Boolean;

       /**
        * @function
        * @name pc.ScriptRegistry#get
        * @description Get {@link ScriptType} by name.
        * @param {String} name Name of a {@link ScriptType}.
        * @returns {ScriptType} The Script Type if it exists in the registry or null otherwise.
        * @example
        * var PlayerController = app.scripts.get('playerController');
        */
       get(name: String): ScriptType;

       /**
        * @function
        * @name pc.ScriptRegistry#has
        * @description Check if a {@link ScriptType} with the specified name is in the registry.
        * @param {String} name Name of a {@link ScriptType}
        * @returns {Boolean} True if {@link ScriptType} is in registry
        * @example
        * if (app.scripts.has('playerController')) {
        *     // playerController is in pc.ScriptRegistry
        * }
        */
       has(name: String): Boolean;

       /**
        * @function
        * @name pc.ScriptRegistry#list
        * @description Get list of all {@link ScriptType}s from registry.
        * @returns {ScriptType[]} list of all {@link ScriptType}s in registry
        * @example
        * // logs array of all Script Type names available in registry
        * console.log(app.scripts.list().map(function(o) {
        *     return o.name;
        * }));
        */
       list(): ScriptType[];

   }

   /**
    * @name pc.ScriptAttributes
    * @class Container of Script Attribute definitions. Implements an interface to add/remove attributes and store their definition for a {@link ScriptType}.
    * Note: An instance of pc.ScriptAttributes is created automatically by each {@link ScriptType}.
    * @param {ScriptType} scriptType Script Type that attributes relate to.
    */
   class ScriptAttributes {
       /**
        * @name pc.ScriptAttributes
        * @class Container of Script Attribute definitions. Implements an interface to add/remove attributes and store their definition for a {@link ScriptType}.
        * Note: An instance of pc.ScriptAttributes is created automatically by each {@link ScriptType}.
        * @param {ScriptType} scriptType Script Type that attributes relate to.
        */
       constructor(scriptType: ScriptType);

       /**
        * @function
        * @name pc.ScriptAttributes#add
        * @description Add Attribute
        * @param {String} name Name of an attribute
        * @param {Object} args Object with Arguments for an attribute
        * @param {String} args.type Type of an attribute value, list of possible types:
        * boolean, number, string, json, asset, entity, rgb, rgba, vec2, vec3, vec4, curve
        * @param {?} [args.default] Default attribute value
        * @param {String} [args.title] Title for Editor's for field UI
        * @param {String} [args.description] Description for Editor's for field UI
        * @param {(String|String[])} [args.placeholder] Placeholder for Editor's for field UI.
        * For multi-field types, such as vec2, vec3, and others use array of strings.
        * @param {Boolean} [args.array] If attribute can hold single or multiple values
        * @param {Number} [args.size] If attribute is array, maximum number of values can be set
        * @param {Number} [args.min] Minimum value for type 'number', if max and min defined, slider will be rendered in Editor's UI
        * @param {Number} [args.max] Maximum value for type 'number', if max and min defined, slider will be rendered in Editor's UI
        * @param {Number} [args.precision] Level of precision for field type 'number' with floating values
        * @param {String} [args.assetType] Name of asset type to be used in 'asset' type attribute picker in Editor's UI, defaults to '*' (all)
        * @param {String[]} [args.curves] List of names for Curves for field type 'curve'
        * @param {String} [args.color] String of color channels for Curves for field type 'curve', can be any combination of `rgba` characters.
        * Defining this property will render Gradient in Editor's field UI
        * @param {Object[]} [args.enum] List of fixed choices for field, defined as array of objects, where key in object is a title of an option
        * @example
        * PlayerController.attributes.add('fullName', {
        *     type: 'string',
        * });
        * @example
        * PlayerController.attributes.add('speed', {
        *     type: 'number',
        *     title: 'Speed',
        *     placeholder: 'km/h',
        *     default: 22.2
        * });
        * @example
        * PlayerController.attributes.add('resolution', {
        *     type: 'number',
        *     default: 32,
        *     enum: [
        *        { '32x32': 32 },
        *        { '64x64': 64 },
        *        { '128x128': 128 }
        *     ]
        * });
        */
       add(name: String, args: { type: String, default: ?, title: String, description: String, placeholder: (String|String[]), array: Boolean, size: Number, min: Number, max: Number, precision: Number, assetType: String, curves: String[], color: String, enum: Object[] }): void;

       /**
        * @function
        * @name pc.ScriptAttributes#remove
        * @description Remove Attribute.
        * @param {String} name Name of an attribute
        * @returns {Boolean} True if removed or false if not defined
        * @example
        * PlayerController.attributes.remove('fullName');
        */
       remove(name: String): Boolean;

       /**
        * @function
        * @name pc.ScriptAttributes#has
        * @description Detect if Attribute is added.
        * @param {String} name Name of an attribute
        * @returns {Boolean} True if Attribute is defined
        * @example
        * if (PlayerController.attributes.has('fullName')) {
        *     // attribute `fullName` is defined
        * });
        */
       has(name: String): Boolean;

       /**
        * @function
        * @name pc.ScriptAttributes#get
        * @description Get object with attribute arguments.
        * Note: Changing argument properties will not affect existing Script Instances.
        * @param {String} name Name of an attribute
        * @returns {?Object} Arguments with attribute properties
        * @example
        * // changing default value for an attribute 'fullName'
        * var attr = PlayerController.attributes.get('fullName');
        * if (attr) attr.default = 'Unknown';
        */
       get(name: String): Object;

   }

   /**
    * @static
    * @function
    * @name pc.createScript
    * @description Method to create named {@link ScriptType}.
    * It returns new function (class) "Script Type", which is auto-registered to {@link pc.ScriptRegistry} using it's name.
    * This is the main interface to create Script Types, to define custom logic using JavaScript, that is used to create interaction for entities.
    * @param {String} name unique Name of a Script Type.
    * If a Script Type with the same name has already been registered and the new one has a `swap` method defined in its prototype,
    * then it will perform hot swapping of existing Script Instances on entities using this new Script Type.
    * Note: There is a reserved list of names that cannot be used, such as list below as well as some starting from `_` (underscore):
    * system, entity, create, destroy, swap, move, scripts, onEnable, onDisable, onPostStateChange, has, on, off, fire, once, hasEvent
    * @param {pc.Application} [app] Optional application handler, to choose which {@link pc.ScriptRegistry} to add a script to.
    * By default it will use `pc.Application.getApplication()` to get current {@link pc.Application}.
    * @returns {Function} The constructor of a {@link ScriptType}, which the developer is meant to extend by adding attributes and prototype methods.
    * @example
    * var Turning = pc.createScript('turn');
    *
    * // define `speed` attribute that is available in Editor UI
    * Turning.attributes.add('speed', {
    *     type: 'number',
    *     default: 180,
    *     placeholder: 'deg/s'
    * });
    *
    * // runs every tick
    * Turning.prototype.update = function(dt) {
    *     this.entity.rotate(0, this.speed * dt, 0);
    * };
    */
   function createScript(name: String, app?: pc.Application): (() => any);

   /**
    * @name pc.BoundingBox
    * @description Create a new axis-aligned bounding box.
    * @class Axis-Aligned Bounding Box.
    * @param {pc.Vec3} [center] Center of box. The constructor takes a reference of this parameter.
    * @param {pc.Vec3} [halfExtents] Half the distance across the box in each axis. The constructor takes a reference of this parameter.
    */
   class BoundingBox {
       /**
        * @name pc.BoundingBox
        * @description Create a new axis-aligned bounding box.
        * @class Axis-Aligned Bounding Box.
        * @param {pc.Vec3} [center] Center of box. The constructor takes a reference of this parameter.
        * @param {pc.Vec3} [halfExtents] Half the distance across the box in each axis. The constructor takes a reference of this parameter.
        */
       constructor(center?: pc.Vec3, halfExtents?: pc.Vec3);

       /**
        * @function
        * @name pc.BoundingBox#add
        * @description Combines two bounding boxes into one, enclosing both.
        * @param {pc.BoundingBox} other Bounding box to add.
        */
       add(other: pc.BoundingBox): void;

       /**
        * @function
        * @name pc.BoundingBox#intersects
        * @description Test whether two axis-aligned bounding boxes intersect.
        * @param {pc.BoundingBox} other Bounding box to test against.
        * @returns {Boolean} True if there is an intersection.
        */
       intersects(other: pc.BoundingBox): Boolean;

       /**
        * @function
        * @name pc.BoundingBox#intersectsRay
        * @description Test if a ray intersects with the AABB.
        * @param {pc.Ray} ray Ray to test against (direction must be normalized).
        * @param {pc.Vec3} [point] If there is an intersection, the intersection point will be copied into here.
        * @returns {Boolean} True if there is an intersection.
        */
       intersectsRay(ray: pc.Ray, point?: pc.Vec3): Boolean;

       /**
        * @function
        * @name pc.BoundingBox#getMin
        * @description Return the minimum corner of the AABB.
        * @returns {pc.Vec3} minimum corner.
        */
       getMin(): pc.Vec3;

       /**
        * @function
        * @name pc.BoundingBox#getMax
        * @description Return the maximum corner of the AABB.
        * @returns {pc.Vec3} maximum corner.
        */
       getMax(): pc.Vec3;

       /**
        * @function
        * @name pc.BoundingBox#containsPoint
        * @description Test if a point is inside a AABB.
        * @param {pc.Vec3} point Point to test.
        * @returns {Boolean} true if the point is inside the AABB and false otherwise.
        */
       containsPoint(point: pc.Vec3): Boolean;

       /**
        * @function
        * @name pc.BoundingBox#setFromTransformedAabb
        * @description Set an AABB to enclose the specified AABB if it were to be
        * transformed by the specified 4x4 matrix.
        * @param {pc.BoundingBox} aabb Box to transform and enclose
        * @param {pc.Mat4} m Transformation matrix to apply to source AABB.
        */
       setFromTransformedAabb(aabb: pc.BoundingBox, m: pc.Mat4): void;

   }

   /**
    * @name pc.BoundingSphere
    * @class A bounding sphere is a volume for facilitating fast intersection testing.
    * @description Creates a new bounding sphere.
    * @example
    * // Create a new bounding sphere centered on the origin with a radius of 0.5
    * var sphere = new pc.BoundingSphere();
    * @param {pc.Vec3} [center] The world space coordinate marking the center of the sphere. The constructor takes a reference of this parameter.
    * @param {Number} [radius] The radius of the bounding sphere. Defaults to 0.5.
    */
   class BoundingSphere {
       /**
        * @name pc.BoundingSphere
        * @class A bounding sphere is a volume for facilitating fast intersection testing.
        * @description Creates a new bounding sphere.
        * @example
        * // Create a new bounding sphere centered on the origin with a radius of 0.5
        * var sphere = new pc.BoundingSphere();
        * @param {pc.Vec3} [center] The world space coordinate marking the center of the sphere. The constructor takes a reference of this parameter.
        * @param {Number} [radius] The radius of the bounding sphere. Defaults to 0.5.
        */
       constructor(center?: pc.Vec3, radius?: Number);

       /**
        * @function
        * @name pc.BoundingSphere#intersectsRay
        * @description Test if a ray intersects with the sphere.
        * @param {pc.Ray} ray Ray to test against (direction must be normalized).
        * @param {pc.Vec3} [point] If there is an intersection, the intersection point will be copied into here.
        * @returns {Boolean} True if there is an intersection.
        */
       intersectsRay(ray: pc.Ray, point?: pc.Vec3): Boolean;

   }

   /**
    * @name pc.Frustum
    * @class A frustum is a shape that defines the viewing space of a camera.
    * @description Creates a new frustum shape.
    * @example
    * // Create a new frustum equivalent to one held by a camera component
    * var projectionMatrix = entity.camera.projectionMatrix;
    * var viewMatrix = entity.camera.viewMatrix;
    * var frustum = new pc.Frustum(projectionMatrix, viewMatrix);
    * @param {pc.Mat4} projectionMatrix The projection matrix describing the shape of the frustum.
    * @param {pc.Mat4} viewMatrix The inverse of the world transformation matrix for the frustum.
    */
   class Frustum {
       /**
        * @name pc.Frustum
        * @class A frustum is a shape that defines the viewing space of a camera.
        * @description Creates a new frustum shape.
        * @example
        * // Create a new frustum equivalent to one held by a camera component
        * var projectionMatrix = entity.camera.projectionMatrix;
        * var viewMatrix = entity.camera.viewMatrix;
        * var frustum = new pc.Frustum(projectionMatrix, viewMatrix);
        * @param {pc.Mat4} projectionMatrix The projection matrix describing the shape of the frustum.
        * @param {pc.Mat4} viewMatrix The inverse of the world transformation matrix for the frustum.
        */
       constructor(projectionMatrix: pc.Mat4, viewMatrix: pc.Mat4);

       /**
        * @function
        * @name pc.Frustum#update
        * @description Updates the frustum shape based on a view matrix and a projection matrix.
        * @param {pc.Mat4} projectionMatrix The projection matrix describing the shape of the frustum.
        * @param {pc.Mat4} viewMatrix The inverse of the world transformation matrix for the frustum.
        */
       update(projectionMatrix: pc.Mat4, viewMatrix: pc.Mat4): void;

       /**
        * @function
        * @name pc.Frustum#containsPoint
        * @description Tests whether a point is inside the frustum. Note that points lying in a frustum plane are
        * considered to be outside the frustum.
        * @param {pc.Vec3} point The point to test
        * @returns {Boolean} true if the point is inside the frustum, false otherwise
        */
       containsPoint(point: pc.Vec3): Boolean;

       /**
        * @function
        * @name pc.Frustum#containsSphere
        * @description Tests whether a bounding sphere intersects the frustum. If the sphere is outside the frustum,
        * zero is returned. If the sphere intersects the frustum, 1 is returned. If the sphere is completely inside
        * the frustum, 2 is returned. Note that a sphere touching a frustum plane from the outside is considered to
        * be outside the frustum.
        * @param {pc.BoundingSphere} sphere The sphere to test
        * @returns {Number} 0 if the bounding sphere is outside the frustum, 1 if it intersects the frustum and 2 if
        * it is contained by the frustum
        */
       containsSphere(sphere: pc.BoundingSphere): Number;

   }

   /**
    * @private
    * @name pc.Plane
    * @class An infinite plane.
    * @description Create an infinite plane.
    * @param {pc.Vec3} [point] Point position on the plane. The constructor takes a reference of this parameter.
    * @param {pc.Vec3} [normal] Normal of the plane. The constructor takes a reference of this parameter.
    */
   class Plane {
       /**
        * @private
        * @name pc.Plane
        * @class An infinite plane.
        * @description Create an infinite plane.
        * @param {pc.Vec3} [point] Point position on the plane. The constructor takes a reference of this parameter.
        * @param {pc.Vec3} [normal] Normal of the plane. The constructor takes a reference of this parameter.
        */
       constructor(point?: pc.Vec3, normal?: pc.Vec3);

       /**
        * @function
        * @name pc.Plane#intersectsLine
        * @description Test if the plane intersects between two points.
        * @param {pc.Vec3} start Start position of line.
        * @param {pc.Vec3} end End position of line.
        * @param {pc.Vec3} [point] If there is an intersection, the intersection point will be copied into here.
        * @returns {Boolean} True if there is an intersection.
        */
       intersectsLine(start: pc.Vec3, end: pc.Vec3, point?: pc.Vec3): Boolean;

       /**
        * @function
        * @name pc.Plane#intersectsRay
        * @description Test if a ray intersects with the infinite plane
        * @param {pc.Ray} ray Ray to test against (direction must be normalized)
        * @param {pc.Vec3} [point] If there is an intersection, the intersection point will be copied into here
        * @returns {Boolean} True if there is an intersection
        */
       intersectsRay(ray: pc.Ray, point?: pc.Vec3): Boolean;

   }

   /**
    * @name pc.Ray
    * @class An infinite ray
    * @description Creates a new infinite ray starting at a given origin and pointing in a given direction.
    * @example
    * // Create a new ray starting at the position of this entity and pointing down
    * // the entity's negative Z axis
    * var ray = new pc.Ray(this.entity.getPosition(), this.entity.forward);
    * @param {pc.Vec3} [origin] The starting point of the ray. The constructor takes a reference of this parameter.
    * Defaults to the origin (0, 0, 0).
    * @param {pc.Vec3} [direction] The direction of the ray. The constructor takes a reference of this parameter.
    * Defaults to a direction down the world negative Z axis (0, 0, -1).
    */
   class Ray {
       /**
        * @name pc.Ray
        * @class An infinite ray
        * @description Creates a new infinite ray starting at a given origin and pointing in a given direction.
        * @example
        * // Create a new ray starting at the position of this entity and pointing down
        * // the entity's negative Z axis
        * var ray = new pc.Ray(this.entity.getPosition(), this.entity.forward);
        * @param {pc.Vec3} [origin] The starting point of the ray. The constructor takes a reference of this parameter.
        * Defaults to the origin (0, 0, 0).
        * @param {pc.Vec3} [direction] The direction of the ray. The constructor takes a reference of this parameter.
        * Defaults to a direction down the world negative Z axis (0, 0, -1).
        */
       constructor(origin?: pc.Vec3, direction?: pc.Vec3);

   }

   /**
    * @name pc.SoundInstance
    * @class A pc.SoundInstance plays a {@link pc.Sound}
    * @param {pc.SoundManager} manager The sound manager
    * @param {pc.Sound} sound The sound to play
    * @param {Object} options Options for the instance
    * @param {Number} [options.volume=1] The playback volume, between 0 and 1.
    * @param {Number} [options.pitch=1] The relative pitch, default of 1, plays at normal pitch.
    * @param {Boolean} [options.loop=false] Whether the sound should loop when it reaches the end or not.
    * @param {Number} [options.startTime=0] The time from which the playback will start. Default is 0 to start at the beginning.
    * @param {Number} [options.duration=null] The total time after the startTime when playback will stop or restart if loop is true.
    * @param {Function} [options.onPlay=null] Function called when the instance starts playing.
    * @param {Function} [options.onPause=null] Function called when the instance is paused.
    * @param {Function} [options.onResume=null] Function called when the instance is resumed.
    * @param {Function} [options.onStop=null] Function called when the instance is stopped.
    * @param {Function} [options.onEnd=null] Function called when the instance ends.
    * @property {Number} volume The volume modifier to play the sound with. In range 0-1.
    * @property {Number} pitch The pitch modifier to play the sound with. Must be larger than 0.01
    * @property {Number} startTime The start time from which the sound will start playing.
    * @property {Number} currentTime Gets or sets the current time of the sound that is playing. If the value provided is bigger than the duration of the instance it will wrap from the beginning.
    * @property {Number} duration The duration of the sound that the instance will play starting from startTime.
    * @property {Boolean} loop If true the instance will restart when it finishes playing
    * @property {Boolean} isPlaying  Returns true if the instance is currently playing.
    * @property {Boolean} isPaused Returns true if the instance is currently paused.
    * @property {Boolean} isStopped Returns true if the instance is currently stopped.
    * @property {Boolean} isSuspended Returns true if the instance is currently suspended because the window is not focused.
    * @property {AudioBufferSourceNode} source Gets the source that plays the sound resource. If the Web Audio API is not supported the type of source is <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio" target="_blank">Audio</a>. Source is only available after calling play.
    * @property {pc.Sound} sound The sound resource that the instance will play.
    */
   class SoundInstance {
       /**
        * @name pc.SoundInstance
        * @class A pc.SoundInstance plays a {@link pc.Sound}
        * @param {pc.SoundManager} manager The sound manager
        * @param {pc.Sound} sound The sound to play
        * @param {Object} options Options for the instance
        * @param {Number} [options.volume=1] The playback volume, between 0 and 1.
        * @param {Number} [options.pitch=1] The relative pitch, default of 1, plays at normal pitch.
        * @param {Boolean} [options.loop=false] Whether the sound should loop when it reaches the end or not.
        * @param {Number} [options.startTime=0] The time from which the playback will start. Default is 0 to start at the beginning.
        * @param {Number} [options.duration=null] The total time after the startTime when playback will stop or restart if loop is true.
        * @param {Function} [options.onPlay=null] Function called when the instance starts playing.
        * @param {Function} [options.onPause=null] Function called when the instance is paused.
        * @param {Function} [options.onResume=null] Function called when the instance is resumed.
        * @param {Function} [options.onStop=null] Function called when the instance is stopped.
        * @param {Function} [options.onEnd=null] Function called when the instance ends.
        * @property {Number} volume The volume modifier to play the sound with. In range 0-1.
        * @property {Number} pitch The pitch modifier to play the sound with. Must be larger than 0.01
        * @property {Number} startTime The start time from which the sound will start playing.
        * @property {Number} currentTime Gets or sets the current time of the sound that is playing. If the value provided is bigger than the duration of the instance it will wrap from the beginning.
        * @property {Number} duration The duration of the sound that the instance will play starting from startTime.
        * @property {Boolean} loop If true the instance will restart when it finishes playing
        * @property {Boolean} isPlaying  Returns true if the instance is currently playing.
        * @property {Boolean} isPaused Returns true if the instance is currently paused.
        * @property {Boolean} isStopped Returns true if the instance is currently stopped.
        * @property {Boolean} isSuspended Returns true if the instance is currently suspended because the window is not focused.
        * @property {AudioBufferSourceNode} source Gets the source that plays the sound resource. If the Web Audio API is not supported the type of source is <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio" target="_blank">Audio</a>. Source is only available after calling play.
        * @property {pc.Sound} sound The sound resource that the instance will play.
        */
       constructor(manager: pc.SoundManager, sound: pc.Sound, options: { volume: Number, pitch: Number, loop: Boolean, startTime: Number, duration: Number, onPlay: (() => any), onPause: (() => any), onResume: (() => any), onStop: (() => any), onEnd: (() => any) });

       /**
        * @function
        * @private
        * @name  pc.SoundInstance#_initializeNodes
        * @description Creates internal audio nodes and connects them
        */
       private _initializeNodes(): void;

       /**
        * @function
        * @name pc.SoundInstance#play
        * @description Begins playback of sound. If the sound is not loaded this will return false.
        * If the sound is already playing this will restart the sound.
        * @returns {Boolean} True if the sound was started.
        */
       play(): Boolean;

       /**
        * @function
        * @name pc.SoundInstance#pause
        * @description Pauses playback of sound. Call resume() to resume playback from the same position.
        * @returns {Boolean} Returns true if the sound was paused
        */
       pause(): Boolean;

       /**
        * @function
        * @name pc.SoundInstance#resume
        * @description Resumes playback of the sound. Playback resumes at the point that the audio was paused
        * @returns {Boolean} Returns true if the sound was resumed.
        */
       resume(): Boolean;

       /**
        * @function
        * @name pc.SoundInstance#stop
        * @description Stops playback of sound. Calling play() again will restart playback from the beginning of the sound.
        */
       stop(): void;

       /**
        * @function
        * @name pc.SoundInstance#setExternalNodes
        * @description Connects external Web Audio API nodes. You need to pass
        * the first node of the node graph that you created externally and the last node of that graph. The first
        * node will be connected to the audio source and the last node will be connected to the destination of the
        * AudioContext (e.g speakers). Requires Web Audio API support.
        * @param {AudioNode} firstNode The first node that will be connected to the audio source of sound instances.
        * @param {AudioNode} [lastNode] The last node that will be connected to the destination of the AudioContext.
        * If unspecified then the firstNode will be connected to the destination instead.
        * @example
        * var context = app.systems.sound.context;
        * var analyzer = context.createAnalyzer();
        * var distortion = context.createWaveShaper();
        * var filter = context.createBiquadFilter();
        * analyzer.connect(distortion);
        * distortion.connect(filter);
        * instance.setExternalNodes(analyzer, filter);
        */
       setExternalNodes(firstNode: AudioNode, lastNode?: AudioNode): void;

       /**
        * @function
        * @name pc.SoundInstance#clearExternalNodes
        * @description Clears any external nodes set by {@link pc.SoundInstance#setExternalNodes}.
        */
       clearExternalNodes(): void;

       /**
        * @function
        * @name pc.SoundInstance#getExternalNodes
        * @description Gets any external nodes set by {@link pc.SoundInstance#setExternalNodes}.
        * @return {AudioNode[]} Returns an array that contains the two nodes set by {@link pc.SoundInstance#setExternalNodes}.
        */
       getExternalNodes(): AudioNode[];

       /**
        * @private
        * @function
        * @name pc.SoundInstance#_onManagerDestroy
        * @description Handle the manager's 'destroy' event.
        */
       private _onManagerDestroy(): void;

       /**
        * @private
        * @function
        * @name pc.SoundInstance#_onManagerVolumeChange
        * @description Handle the manager's 'volumechange' event.
        */
       private _onManagerVolumeChange(): void;

       /**
        * @private
        * @function
        * @name pc.SoundInstance#_onManagerSuspend
        * @description Handle the manager's 'suspend' event.
        */
       private _onManagerSuspend(): void;

       /**
        * @private
        * @function
        * @name pc.SoundInstance#_onManagerResume
        * @description Handle the manager's 'resume' event.
        */
       private _onManagerResume(): void;

   }

   /**
    * @name pc.SoundInstance3d
    * @extends pc.SoundInstance
    * @class A pc.SoundInstance3d plays a {@link pc.Sound} in 3D
    * @param {pc.SoundManager} manager The sound manager
    * @param {pc.Sound} sound The sound to play
    * @param {Object} options Options for the instance
    * @param {Number} [options.volume=1] The playback volume, between 0 and 1.
    * @param {Number} [options.pitch=1] The relative pitch, default of 1, plays at normal pitch.
    * @param {Boolean} [options.loop=false] Whether the sound should loop when it reaches the end or not.
    * @param {Number} [options.startTime=0] The time from which the playback will start. Default is 0 to start at the beginning.
    * @param {Number} [options.duration=null] The total time after the startTime when playback will stop or restart if loop is true.
    * @param {pc.Vec3} [options.position=null] The position of the sound in 3D space.
    * @param {pc.Vec3} [options.velocity=null] The velocity of the sound.
    * @param {String} [options.distanceModel=pc.DISTANCE_LINEAR] Determines which algorithm to use to reduce the volume of the audio as it moves away from the listener. Can be one of {@link pc.DISTANCE_LINEAR}, {@link pc.DISTANCE_INVERSE} or {@link pc.DISTANCE_EXPONENTIAL}. Default is {@link pc.DISTANCE_LINEAR}.
    * @param {Number} [options.refDistance=1] The reference distance for reducing volume as the sound source moves further from the listener.
    * @param {Number} [options.maxDistance=10000] The maximum distance from the listener at which audio falloff stops. Note the volume of the audio is not 0 after this distance, but just doesn't fall off anymore.
    * @param {Number} [options.rollOffFactor=1] The factor used in the falloff equation.
    * @property {pc.Vec3} position The position of the sound in 3D space.
    * @property {pc.Vec3} velocity The velocity of the sound.
    * @property {String} distanceModel Determines which algorithm to use to reduce the volume of the audio as it moves away from the listener. Can be one of {@link pc.DISTANCE_LINEAR}, {@link pc.DISTANCE_INVERSE} or {@link pc.DISTANCE_EXPONENTIAL}. Default is {@link pc.DISTANCE_LINEAR}.        * @property {Number} refDistance The reference distance for reducing volume as the sound source moves further from the listener.
    * @property {Number} maxDistance The maximum distance from the listener at which audio falloff stops. Note the volume of the audio is not 0 after this distance, but just doesn't fall off anymore.
    * @property {Number} rollOffFactor The factor used in the falloff equation.
    */
   class SoundInstance3d extends pc.SoundInstance {
       /**
        * @name pc.SoundInstance3d
        * @extends pc.SoundInstance
        * @class A pc.SoundInstance3d plays a {@link pc.Sound} in 3D
        * @param {pc.SoundManager} manager The sound manager
        * @param {pc.Sound} sound The sound to play
        * @param {Object} options Options for the instance
        * @param {Number} [options.volume=1] The playback volume, between 0 and 1.
        * @param {Number} [options.pitch=1] The relative pitch, default of 1, plays at normal pitch.
        * @param {Boolean} [options.loop=false] Whether the sound should loop when it reaches the end or not.
        * @param {Number} [options.startTime=0] The time from which the playback will start. Default is 0 to start at the beginning.
        * @param {Number} [options.duration=null] The total time after the startTime when playback will stop or restart if loop is true.
        * @param {pc.Vec3} [options.position=null] The position of the sound in 3D space.
        * @param {pc.Vec3} [options.velocity=null] The velocity of the sound.
        * @param {String} [options.distanceModel=pc.DISTANCE_LINEAR] Determines which algorithm to use to reduce the volume of the audio as it moves away from the listener. Can be one of {@link pc.DISTANCE_LINEAR}, {@link pc.DISTANCE_INVERSE} or {@link pc.DISTANCE_EXPONENTIAL}. Default is {@link pc.DISTANCE_LINEAR}.
        * @param {Number} [options.refDistance=1] The reference distance for reducing volume as the sound source moves further from the listener.
        * @param {Number} [options.maxDistance=10000] The maximum distance from the listener at which audio falloff stops. Note the volume of the audio is not 0 after this distance, but just doesn't fall off anymore.
        * @param {Number} [options.rollOffFactor=1] The factor used in the falloff equation.
        * @property {pc.Vec3} position The position of the sound in 3D space.
        * @property {pc.Vec3} velocity The velocity of the sound.
        * @property {String} distanceModel Determines which algorithm to use to reduce the volume of the audio as it moves away from the listener. Can be one of {@link pc.DISTANCE_LINEAR}, {@link pc.DISTANCE_INVERSE} or {@link pc.DISTANCE_EXPONENTIAL}. Default is {@link pc.DISTANCE_LINEAR}.        * @property {Number} refDistance The reference distance for reducing volume as the sound source moves further from the listener.
        * @property {Number} maxDistance The maximum distance from the listener at which audio falloff stops. Note the volume of the audio is not 0 after this distance, but just doesn't fall off anymore.
        * @property {Number} rollOffFactor The factor used in the falloff equation.
        */
       constructor(manager: pc.SoundManager, sound: pc.Sound, options: { volume: Number, pitch: Number, loop: Boolean, startTime: Number, duration: Number, position: pc.Vec3, velocity: pc.Vec3, distanceModel: String, refDistance: Number, maxDistance: Number, rollOffFactor: Number });

   }

   /**
    * @name pc.Listener
    * @class Represents an audio listener - used internally.
    * @param {pc.SoundManager} manager The sound manager
    */
   class Listener {
       /**
        * @name pc.Listener
        * @class Represents an audio listener - used internally.
        * @param {pc.SoundManager} manager The sound manager
        */
       constructor(manager: pc.SoundManager);

   }

   /**
    * @name pc.SoundManager
    * @class The SoundManager is used to load and play audio. As well as apply system-wide settings
    * like global volume, suspend and resume.
    * @description Creates a new sound manager.
    * @param {Object} [options]
    * @param {Boolean} [options.forceWebAudioApi] Always use the Web Audio API even check indicates that it if not available
    * @property {pc.Listener} listener Gets / sets the audio listener
    * @property {Number} volume Global volume for the manager. All {@link pc.SoundInstance}s will scale their volume with this volume. Valid between [0, 1].
    */
   class SoundManager {
       /**
        * @name pc.SoundManager
        * @class The SoundManager is used to load and play audio. As well as apply system-wide settings
        * like global volume, suspend and resume.
        * @description Creates a new sound manager.
        * @param {Object} [options]
        * @param {Boolean} [options.forceWebAudioApi] Always use the Web Audio API even check indicates that it if not available
        * @property {pc.Listener} listener Gets / sets the audio listener
        * @property {Number} volume Global volume for the manager. All {@link pc.SoundInstance}s will scale their volume with this volume. Valid between [0, 1].
        */
       constructor(options?: { forceWebAudioApi: Boolean });

       /**
        * @private
        * @function
        * @name pc.SoundManager.hasAudio
        * @description Reports whether this device supports the HTML5 Audio tag API
        * @returns true if HTML5 Audio tag API is supported and false otherwise
        */
       private static hasAudio(): any;

       /**
        * @private
        * @function
        * @name pc.SoundManager.hasAudioContext
        * @description Reports whether this device supports the Web Audio API
        * @returns true if Web Audio is supported and false otherwise
        */
       private static hasAudioContext(): any;

       /**
        * @private
        * @function
        * @name pc.SoundManager#playSound
        * @description Create a new pc.Channel and begin playback of the sound.
        * @param {pc.Sound} sound The Sound object to play.
        * @param {Object} options
        * @param {Number} [options.volume] The volume to playback at, between 0 and 1.
        * @param {Boolean} [options.loop] Whether to loop the sound when it reaches the end.
        */
       private playSound(sound: pc.Sound, options: { volume: Number, loop: Boolean }): void;

       /**
        * @private
        * @function
        * @name pc.SoundManager#playSound3d
        * @description Create a new pc.Channel3d and begin playback of the sound at the position specified
        * @param {pc.Sound} sound The Sound object to play.
        * @param {pc.Vec3} position The position of the sound in 3D space.
        * @param {Object} options
        * @param {Number} [options.volume] The volume to playback at, between 0 and 1.
        * @param {Boolean} [options.loop] Whether to loop the sound when it reaches the end.
        */
       private playSound3d(sound: pc.Sound, position: pc.Vec3, options: { volume: Number, loop: Boolean }): void;

   }

   /**
    * @name pc.Sound
    * @class Represents the resource of an audio asset.
    * @property {AudioBuffer} buffer If the Web Audio API is supported this contains the audio data
    * @property {Audio} audio If the Web Audio API is not supported this contains the audio data
    * @property {Number} duration Returns the duration of the sound. If the sound is not loaded it returns 0.
    */
   class Sound {
       /**
        * @name pc.Sound
        * @class Represents the resource of an audio asset.
        * @property {AudioBuffer} buffer If the Web Audio API is supported this contains the audio data
        * @property {Audio} audio If the Web Audio API is not supported this contains the audio data
        * @property {Number} duration Returns the duration of the sound. If the sound is not loaded it returns 0.
        */
       constructor();

   }

   /**
    * @name pc.VrDisplay
    * @class Represents a single Display for VR content. This could be a Head Mounted display that can present content on a separate screen
    * or a phone which can display content full screen on the same screen. This object contains the native `navigator.VRDisplay` object
    * from the WebVR API.
    * @description Represents a single Display for VR content. This could be a Head Mounted display that can present content on a separate screen
    * or a phone which can display content full screen on the same screen. This object contains the native `navigator.VRDisplay` object
    * from the WebVR API.
    * @property {Number} id An identifier for this distinct VRDisplay
    * @property {VRDisplay} display The native VRDisplay object from the WebVR API
    * @property {Boolean} presenting True if this display is currently presenting VR content
    * @property {VRDisplayCapabilities} capabilities Returns the <a href="https://w3c.github.io/webvr/#interface-vrdisplaycapabilities" target="_blank">VRDisplayCapabilities</a> object from the VRDisplay.
    * This can be used to determine what features are available on this display.
    * @returns {pc.VrDisplay} A new pc.VrDisplay.
    */
   class VrDisplay {
       /**
        * @name pc.VrDisplay
        * @class Represents a single Display for VR content. This could be a Head Mounted display that can present content on a separate screen
        * or a phone which can display content full screen on the same screen. This object contains the native `navigator.VRDisplay` object
        * from the WebVR API.
        * @description Represents a single Display for VR content. This could be a Head Mounted display that can present content on a separate screen
        * or a phone which can display content full screen on the same screen. This object contains the native `navigator.VRDisplay` object
        * from the WebVR API.
        * @property {Number} id An identifier for this distinct VRDisplay
        * @property {VRDisplay} display The native VRDisplay object from the WebVR API
        * @property {Boolean} presenting True if this display is currently presenting VR content
        * @property {VRDisplayCapabilities} capabilities Returns the <a href="https://w3c.github.io/webvr/#interface-vrdisplaycapabilities" target="_blank">VRDisplayCapabilities</a> object from the VRDisplay.
        * This can be used to determine what features are available on this display.
        * @returns {pc.VrDisplay} A new pc.VrDisplay.
        */
       constructor();

       /**
        * @function
        * @name pc.VrDisplay#destroy
        * @description Destroy this display object
        */
       destroy(): void;

       /**
        * @function
        * @name pc.VrDisplay#poll
        * @description Called once per frame to update the current status from the display. Usually called by {@link pc.VrManager}.
        */
       poll(): void;

       /**
        * @function
        * @name pc.VrDisplay#requestPresent
        * @description Try to present full screen VR content on this display
        * @param {Function} callback Called when the request is completed. Callback takes a single argument (err) that is the error message return
        * if presenting fails, or null if the call succeeds. Usually called by {@link pc.CameraComponent#enterVr}.
        */
       requestPresent(callback: (() => any)): void;

       /**
        * @function
        * @name pc.VrDisplay#exitPresent
        * @description Try to stop presenting VR content on this display
        * @param {Function} callback Called when the request is completed. Callback takes a single argument (err) that is the error message return
        * if presenting fails, or null if the call succeeds. Usually called by {@link pc.CameraComponent#exitVr}.
        */
       exitPresent(callback: (() => any)): void;

       /**
        * @function
        * @name pc.VrDisplay#requestAnimationFrame
        * @description Used in the main application loop instead of the regular `window.requestAnimationFrame`. Usually only called from inside {@link pc.Application}
        * @param {Function} fn Function called when it is time to update the frame.
        */
       requestAnimationFrame(fn: (() => any)): void;

       /**
        * @function
        * @name pc.VrDisplay#submitFrame
        * @description Called when animation update is complete and the frame is ready to be sent to the display. Usually only called from inside {@link pc.Application}.
        */
       submitFrame(): void;

       /**
        * @function
        * @name pc.VrDisplay#reset
        * @description Called to reset the pose of the pc.VrDisplay. Treating its current pose as the origin/zero. This should only be called in 'sitting' experiences.
        */
       reset(): void;

       /**
        * @function
        * @name pc.VrDisplay#setClipPlanes
        * @description Set the near and far depth plans of the display. This enables mapping of values in the
        * render target depth attachment to scene coordinates
        * @param {Number} n The near depth distance
        * @param {Number} f The far depth distance
        */
       setClipPlanes(n: Number, f: Number): void;

       /**
        * @function
        * @name pc.VrDisplay#getFrameData
        * @description Return the current frame data that is updated during polling.
        * @returns {VRFrameData} The frame data object
        */
       getFrameData(): VRFrameData;

   }

   /**
    * @name pc.VrManager
    * @class Manage and update {@link pc.VrDisplay}s that are attached to this device.
    * @description Manage and update {@link pc.VrDisplay}s that are attached to this device.
    * @param {pc.Application} app The main application
    * @property {pc.VrDisplay[]} displays The list of {@link pc.VrDisplay}s that are attached to this device
    * @property {pc.VrDisplay} display The default {@link pc.VrDisplay} to be used. Usually the first in the `displays` list
    * @property {Boolean} isSupported Reports whether this device supports the WebVR API
    * @property {Boolean} usesPolyfill Reports whether this device supports the WebVR API using a polyfill
    */
   class VrManager {
       /**
        * @name pc.VrManager
        * @class Manage and update {@link pc.VrDisplay}s that are attached to this device.
        * @description Manage and update {@link pc.VrDisplay}s that are attached to this device.
        * @param {pc.Application} app The main application
        * @property {pc.VrDisplay[]} displays The list of {@link pc.VrDisplay}s that are attached to this device
        * @property {pc.VrDisplay} display The default {@link pc.VrDisplay} to be used. Usually the first in the `displays` list
        * @property {Boolean} isSupported Reports whether this device supports the WebVR API
        * @property {Boolean} usesPolyfill Reports whether this device supports the WebVR API using a polyfill
        */
       constructor(app: pc.Application);

       /**
        * @static
        * @name pc.VrManager.isSupported
        * @type Boolean
        * @description Reports whether this device supports the WebVR API
        */
       static isSupported: Boolean;

       /**
        * @static
        * @name pc.VrManager.usesPolyfill
        * @type Boolean
        * @description Reports whether this device supports the WebVR API using a polyfill
        */
       static usesPolyfill: Boolean;

       /**
        * @function
        * @name pc.VrManager#destroy
        * @description Remove events and clear up manager
        */
       destroy(): void;

       /**
        * @function
        * @name pc.VrManager#poll
        * @description Called once per frame to poll all attached displays
        */
       poll(): void;

   }

}

/**
 * @private
 * @description
 * Creates an implementation based on the collision type and caches it
 * in an internal implementations structure, before returning it.
 */
declare function _createImplementation(): void;

/**
 * @private
 * @description Gets an existing implementation for the specified entity
 */
declare function _getImplementation(): void;

/**
 * @private
 * @description Destroys the previous collision type and creates a new one
 * based on the new type provided
 */
declare function changeType(): void;

/**
 * @private
 * @description Recreates rigid bodies or triggers for the specified component
 */
declare function recreatePhysicalShapes(): void;

/**
 * Update all ComponentSystems
 */
declare function update(): void;

/**
 * Update all ComponentSystems
 */
declare function fixedUpdate(): void;

/**
 * Update all ComponentSystems
 */
declare function postUpdate(): void;

/**
 * @private
 * @function
 * Called when the enabled flag of the entity or one of its
 * parents changes
 */
declare function Called when the enabled flag of the entity or one of its
parents changes(): void;

/**
 * @name ScriptType
 * @class Represents the type of a script. It is returned by {@link pc.createScript}. Also referred to as Script Type.<br />
 * The type is to be extended using its JavaScript prototype. There is a <strong>list of methods</strong>
 * that will be executed by the engine on instances of this type, such as: <ul><li>initialize</li><li>postInitialize</li><li>update</li><li>postUpdate</li><li>swap</li></ul>
 * <strong>initialize</strong> and <strong>postInitialize</strong> - are called if defined when script is about to run for the first time - postInitialize will run after all initialize methods are executed in the same tick or enabling chain of actions.<br />
 * <strong>update</strong> and <strong>postUpdate</strong> - methods are called if defined for enabled (running state) scripts on each tick.<br />
 * <strong>swap</strong> - This method will be called when a {@link ScriptType} that already exists in the registry gets redefined.
 * If the new {@link ScriptType} has a `swap` method in its prototype, then it will be executed to perform hot-reload at runtime.
 * @property {pc.Application} app The {@link pc.Application} that the instance of this type belongs to.
 * @property {pc.Entity} entity The {@link pc.Entity} that the instance of this type belongs to.
 * @property {Boolean} enabled True if the instance of this type is in running state. False when script is not running,
 * because the Entity or any of its parents are disabled or the Script Component is disabled or the Script Instance is disabled.
 * When disabled no update methods will be called on each tick.
 * initialize and postInitialize methods will run once when the script instance is in `enabled` state during app tick.
 */
declare class ScriptType {
   /**
    * @name ScriptType
    * @class Represents the type of a script. It is returned by {@link pc.createScript}. Also referred to as Script Type.<br />
    * The type is to be extended using its JavaScript prototype. There is a <strong>list of methods</strong>
    * that will be executed by the engine on instances of this type, such as: <ul><li>initialize</li><li>postInitialize</li><li>update</li><li>postUpdate</li><li>swap</li></ul>
    * <strong>initialize</strong> and <strong>postInitialize</strong> - are called if defined when script is about to run for the first time - postInitialize will run after all initialize methods are executed in the same tick or enabling chain of actions.<br />
    * <strong>update</strong> and <strong>postUpdate</strong> - methods are called if defined for enabled (running state) scripts on each tick.<br />
    * <strong>swap</strong> - This method will be called when a {@link ScriptType} that already exists in the registry gets redefined.
    * If the new {@link ScriptType} has a `swap` method in its prototype, then it will be executed to perform hot-reload at runtime.
    * @property {pc.Application} app The {@link pc.Application} that the instance of this type belongs to.
    * @property {pc.Entity} entity The {@link pc.Entity} that the instance of this type belongs to.
    * @property {Boolean} enabled True if the instance of this type is in running state. False when script is not running,
    * because the Entity or any of its parents are disabled or the Script Component is disabled or the Script Instance is disabled.
    * When disabled no update methods will be called on each tick.
    * initialize and postInitialize methods will run once when the script instance is in `enabled` state during app tick.
    */
   constructor();

   /**
    * @private
    * @readonly
    * @static
    * @name ScriptType.__name
    * @type String
    * @description Name of a Script Type.
    */
   private static __name: String;

   /**
    * @field
    * @static
    * @readonly
    * @type pc.ScriptAttributes
    * @name ScriptType.attributes
    * @description The interface to define attributes for Script Types. Refer to {@link pc.ScriptAttributes}
    * @example
    * var PlayerController = pc.createScript('playerController');
    *
    * PlayerController.attributes.add('speed', {
    *     type: 'number',
    *     title: 'Speed',
    *     placeholder: 'km/h',
    *     default: 22.2
    * });
    */
   static attributes: pc.ScriptAttributes;

   /**
    * @readonly
    * @static
    * @function
    * @name ScriptType.extend
    * @param {Object} methods Object with methods, where key - is name of method, and value - is function.
    * @description Shorthand function to extend Script Type prototype with list of methods.
    * @example
    * var PlayerController = pc.createScript('playerController');
    *
    * PlayerController.extend({
    *     initialize: function() {
    *         // called once on initialize
    *     },
    *     update: function(dt) {
    *         // called each tick
    *     }
    * })
    */
   static extend(methods: Object): void;

}

