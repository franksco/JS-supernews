import Ember from 'ember';

export default Ember.Component.extend({
  urlBegin: "http://www.nytimes.com/",
  imgUrl: Ember.computed(function(){
    if(this.get('article').multimedia.length > 0){
      return `${this.get('urlBegin')}${this.get('article').multimedia[0].url}`;
    }
    else{
      return "http://www.cbtsavannah.org/wp-content/themes/bethlehem/assets/images/placeholder.png";
    }

  }),
});
