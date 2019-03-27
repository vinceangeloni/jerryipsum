const sketch = require('sketch')
const { DataSupplier } = sketch;
const util = require('util');

const characterData = require("./characters.json");
const thingData = require("./things.json");
const quoteData = require("./quotes.json");

export function onStartup () {
  // To register the plugin, uncomment the relevant type:
  DataSupplier.registerDataSupplier('public.text', 'Names', 'SupplyCharacter')
  DataSupplier.registerDataSupplier('public.text', 'Things', 'SupplyThing')
  DataSupplier.registerDataSupplier('public.text', 'Quotes', 'SupplyQuote')
  // DataSupplier.registerDataSupplier('public.image', 'jerryipsum', 'SupplyData')
}

export function onShutdown () {
  // Deregister the plugin
  DataSupplier.deregisterDataSuppliers()
}

export function onSupplyCharacter (context) {
  let dataKey = context.data.key
  var dataCount = context.data.requestedCount;
  const items = util.toArray(context.data.items).map(sketch.fromNative)

  items.forEach((_, index) => {
    const characters = characterData.characters
    const characterIndex = Math.floor(Math.random() * characters.length);
    let data = characters[characterIndex];

    DataSupplier.supplyDataAtIndex(dataKey, data, index);
  });
}

export function onSupplyThing (context) {
  let dataKey = context.data.key
  var dataCount = context.data.requestedCount;
  const items = util.toArray(context.data.items).map(sketch.fromNative)

  items.forEach((_, index) => {
    const things = thingData.things
    const thingIndex = Math.floor(Math.random() * things.length);
    let data = things[thingIndex];

    DataSupplier.supplyDataAtIndex(dataKey, data, index);
  });
}
export function onSupplyQuote (context) {
  let dataKey = context.data.key
  var dataCount = context.data.requestedCount;
  const items = util.toArray(context.data.items).map(sketch.fromNative)

  items.forEach((_, index) => {
    const quotes = quoteData.quotes
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    let data = quotes[quoteIndex];

    DataSupplier.supplyDataAtIndex(dataKey, data, index);
  });
}
