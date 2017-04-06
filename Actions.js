export default function(store, custom_actions){
  var actions = {
    __store: store,
    __dispatch: function(action_config){
      this.__store.dispatch(action_config);
    },
  };

  for( var action_name in custom_actions ){
    actions[action_name] = function(){
      var action_making_function = custom_actions[action_name];
      console.log('action: ', action_name);
      this.__dispatch( action_making_function(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4] ));
    };
  }

  return actions;
}
