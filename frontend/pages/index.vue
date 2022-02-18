<template>
  <h1>Hello World</h1>
</template>

<script>
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { inject } from "inversify";
import { SYMBOLS } from "../inversify/symbols";

@Component({
  name: "IndexPage",
  components: {},
})
export default class IndexPage extends Vue {

  mounted() {

  }
}
</script>
