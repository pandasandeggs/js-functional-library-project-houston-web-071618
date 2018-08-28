fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection,callback) {
      for (const key in collection){
        callback(key,collection[key], collection);
      }
      return collection;
    },

    map: function(collection,callback) {

      if (!(collection instanceof Array)){
        collection = Object.values(collection)
      }

      const newArray = []
      for (let key=0; key<collection.length; key++){
        newArray.push(callback(collection[key]))
      }
      return newArray;
    },

    reduce: function(collection, callback, acc = 0) {

      if (!(collection instanceof Array)){
        collection = Object.values(collection)
      }

      for(let key=0; key<collection.length; key++){
        acc = callback(acc,collection[key],collection)
      }
      return acc;
    },

    find: function(collection, predicate) {

      if (!(collection instanceof Array))
        collection = Object.values(collection)

      for(let i=0; i<collection.length; i++)
        if(predicate(collection[i]))
          return collection[i]
          return undefined
    },

    filter: function(collection, predicate) {

      if (!(collection instanceof Array)){
        collection = Object.values(collection)
      }

      const newCollection = []
      for(let i=0; i<collection.length; i++){
        if (predicate(collection[i])){
          newCollection.push(collection[i])
        }
      }
      return newCollection
    },

    size: function(collection) {

      if (!(collection instanceof Array)){
        collection = Object.values(collection)
      }
      return collection.length
    },

    first: function(array,n) {

      if (n === undefined){
        return array[0]
      }
      else {
        return array.slice(0,n)
      }
    },

    last: function(array, n) {

      if (n === undefined){
        return array[array.length - 1]
      }
      else {
        return array.slice(-n)
      }

    },

    compact: function(collection) {
      if (!(collection instanceof Array)){
        collection = Object.values(collection)
      }

      falsyValues = [false, null, 0, "", '', undefined, NaN]

      for(let i in collection){
        if (i === )
      }
    },

  //   const newCollection = []
  //   for(let i=0; i<collection.length; i++){
  //     if (predicate(collection[i])){
  //       newCollection.push(collection[i])
  //     }
  //   }
  //   return newCollection
  // },

    sortBy: function() {
      if (!(collection instanceof Array)){
        collection = Object.values(collection)
      }

    },

    flatten: function() {
      if (!(collection instanceof Array)){
        collection = Object.values(collection)
      }

    },

    uniq: function() {
      if (!(collection instanceof Array)){
        collection = Object.values(collection)
      }

    },

    keys: function() {
      if (!(collection instanceof Array)){
        collection = Object.values(collection)
      }

    },

    values: function() {
      if (!(collection instanceof Array)){
        collection = Object.values(collection)
      }

    },

    functions: function() {
      if (!(collection instanceof Array)){
        collection = Object.values(collection)
      }

    },

    giveMeMore: function() {
      if (!(collection instanceof Array)){
        collection = Object.values(collection)
      }

    },

  }
})()

fi.libraryMethod()
