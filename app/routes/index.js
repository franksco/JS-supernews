import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
  model: function() {
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
      url += '?' + Ember.$.param({
        'api-key': "5fa98087cd6145a5819edc55ede3fa31",
        'sort': "newest",
        'end_date': moment().format("YYYYMMDD"),
        'page': "0"
      });
     return Ember.$.getJSON(url).then(function(responseJSON, success, xhr) {
       Ember.Logger.log(xhr);
       Ember.Logger.log(success);
       return responseJSON.response.docs;
     });
 }
});
