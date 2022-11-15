<script>
export default {
  data() {
    return {
      name: '',
      avg: '',
      min: '',
      max:'',
    }
  }
}
</script>

<template>
  <p>Store Name: {{ name }}</p>
	<input v-model="name" placeholder="edit me" />
  <p>Average Cookies Per Hour: {{ avg }}</p>
	<input v-model="avg" placeholder="edit me" />
  <p>Minimum: {{ min }}</p>
	<input v-model="min" placeholder="edit me" />
  <p>Maximum: {{ max }}</p>
	<input v-model="max" placeholder="edit me" />

</template>
