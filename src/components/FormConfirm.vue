<template>
  <div>
    <h2>Confirmation</h2>
    <p>Name: {{ form.firstName }} {{ form.lastName }}</p>
    <p>Email: {{ form.Email }}</p>
    <p>Tel: {{ form.tel }}</p>
    <p>Birthday: {{ form.birthday }}</p>
  </div>
</template>

<script>
export default {
  name: 'FormConfirm',
  props:{
		form: Object
	},
}
</script>

<style scoped>

</style>