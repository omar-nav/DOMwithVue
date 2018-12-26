var data = {
  title: "The vueJS Instance",
  showParagraph: false
}

Vue.component('hello', {
  template: '<h1>Hello!</h1>'
});

var vm1 = new Vue({

  data: data,
  methods: {
    show: function () {
      this.showParagraph = true;
      this.updateTitle('The vueJS instance updated')
      this.$refs.myButton.innerText = 'Test';
    },
    updateTitle: function (title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function () {
      return this.title.toLowerCase();
    }
  }
});

vm1.$mount('#app1');

console.log(vm1.$data === data);
vm1.$refs.heading.innerText = 'Something else';

setTimeout(function () {
  vm1.title = 'Changed by timer';
  vm1.show();
}, 2000);


var vm2 = new Vue({
  el: "#app2",
  data: {
    title: 'The second instance'
  },
  methods: {
    onChange: function () {
      vm1.title = 'Changed!';
    }
  }
});

var vm3 = new Vue({
  el: '.hello',
  template: '<h1>Sweet! So if its a tag name -> no hash tag</h1>'
});

vm3.$mount();
document.getElementById('app3').appendChild(vm3.$el);