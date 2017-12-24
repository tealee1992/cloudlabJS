<template>
<div>
  <form id="search">
  	<div>
  		Search <input name="query" v-model="searchQuery">
  	</div>
  	<div>
  		<p class="p" v-if="labImage">Current experiment image： {{ labImage }}</p>
  	</div>
  </form>
  <router-view
  	v-on:newimage="refresh"
    :data="gridData"
    :columns="gridColumns"
    :filterKey="searchQuery">
  </router-view>
</div>
</template>
<script>
import { getLabImage }  from '../../lib/vueHelper'
import store from '@/vuex/store'
import Promise from 'promise-polyfill'
import "regenerator-runtime/runtime"
export default {
	name:"admin",
	componets: 'grid',
	data: function() {
		
		// async function getimage () {
		// 	try{
		// 		await getImage(this)
		// 	}catch(err) {
		// 		console.log(err)
		// 	}
		// }
		// getimage().then(()=>{
		// 	this.labImage=this.$store.state.labImage
		// 	console.log("fhjasd"+this.labImage)
		// })

		return {
			labImage: store.state.labImage,
		    searchQuery: '',
		    gridColumns: ['Name', 'Id'],
		    gridData: [
		      { Name: 'os-zh-cn-bochs2.4-2:latest', Id: 'sha256:ea600' },
		      { Name: 'Bruce Lee', Id: '9000' },
		      { Name: 'Jackie Chan', Id: 7000 },
		      { Name: 'Jet Li', Id: 8000 }
		    ]
		}
	},
	created: function() {
		console.log("in created")
		async function getimage () {
			try{
				await getLabImage(this)
			}catch(err) {
				console.log(err)
			}
		}
		getimage().then(()=>{
			this.labImage=store.state.labImage
		})
	},
	mounted: function() {

  	},
	methods: {
		refresh: function(){
			console.log("refresh")
			console.log(store.state.labImage)
			this.labImage=store.state.labImage
		}
		// switchTab: function() {
		// 	this.$emit('switch');
		// },
		// setCurrentImage: function(imagename) {
		// 	console.log(imagename)
		// 	this.currentImage = imagename
		// }
	}
}

</script>
<style>

</style>
