var data = {
  title: "The vueJS Instance",
  showParagraph: false
}

var vm1 =  new Vue({
  el: "#app1",
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The vueJS instance updated')
      console.log(this.$refs);
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  }
});

vm1.newProp = 'New1';
console.log(vm1.$data === data);

setTimeout(function(){
  vm1.title = 'Changed by timer';
  vm1.show();
}, 2000);


var vm2 = new Vue({
  el: "#app2",
  data: {
    title: 'The second instance'
  },
  methods: {
    onChange: function() {
      vm1.title = 'Changed!';
    }
  }
});
