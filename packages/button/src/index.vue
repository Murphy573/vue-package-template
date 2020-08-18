<template>
  <div class="mur-button"
    @click="show">
    <slot>按 钮</slot>
  </div>
</template>

<script>

export default {
  name: 'MryButton',

  methods: {
    show () {
      alert(1);
    }
  }
};
</script>

<style lang="scss">
.mur-button {
  width: 200px;
  height: 80px;
  color: #fff;
  text-align: center;
  line-height: 80px;
  background: blue;
}
</style>
