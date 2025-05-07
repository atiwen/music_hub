<template>
    <div>
       <h1 class="text-light">{{$route.params.id}}</h1>
        <button @click="goBack"> Back </button>
    </div>
</template>
<script>
export default {
  name:'artist',
  methods: {
      goBack() {
        this.$router.go(-1)
      }
    }
}
</script>