/**
 * Created by lhy95 on 2017/6/12.
 */

function init(self, callback) {
  if (self.$store.state.app.init) {
    callback();
  } else {
    self.$store.watch(function (state) {
      return state.app.init;
    }, () => {
      if (self.$store.state.app.init) {
        callback();
      }
    })
  }
}

module.exports = {init};
