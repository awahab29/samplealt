
function FoodStore() {
  this.foods = [{id:1,name:'banana'}, {id:2,name:'apple'}];
  
  this.bindListeners({
    onAddItem: foodActions.addItem
  });

  
}

FoodStore.prototype.onAddItem = function (item) {
  this.foods.push({id:3, name:'Mango'});
};

FoodStore.displayName = 'FoodStore';

var foodStore = alt.createStore(FoodStore);
