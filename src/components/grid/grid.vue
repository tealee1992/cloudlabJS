<template>
<div>
  <table>
    <thead>
      <tr>
        <th>选择</th>
        <th v-for="key in columns"
          @click="sortBy(key)"
          :class="{active: sortKey == key}">
          {{key | capitalize}}
          <span class="arrow"
            :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in filterData">
        <td><input type="radio" name="chooseimage" @click="setCurrent(entry.Name)"/></td>
        <td v-for="key in columns">
          {{entry[key]}}
        </td>
      </tr>
    </tbody>
  </table>
  <div>
     <p 
        class="p">Set [ {{ currentImage}} ] as experiment image

     </p>
     <el-button type="primary" @click="postImage()" class="submitBtn glyphicon glyphicon-check">
       
     </el-button>
  </div>
</div>
</template>

<script>
import _ from "lodash"
import { setImage }  from '../../lib/vueHelper'
import store from '@/vuex/store'
export default {
	name: "grid",

	props: {
		data: Array,
		columns: Array,
		filterKey: String,
	 },
	data: function () {
	    var sortOrders = {}
	    this.columns.forEach(function (key) {
      		sortOrders[key] = 1
    	})
    	return {
        currentImage: '',
     	  sortKey: '',
     	  sortOrders: sortOrders
    	}
  	},
  methods: {
	    sortBy: function (key) {
	      this.sortKey = key
	      this.sortOrders[key] = this.sortOrders[key] * -1
	    },
      setCurrent: function (imagename) {
        this.currentImage = imagename
      },
      async postImage (){
        try {
          var data = {
            'image':this.currentImage
          }
          store.commit('labimage',data.image)
          await setImage(this,data)
          console.log("emitimage")
          this.$emit('newimage')
          // emitimage()           
        }catch(err) {
          console.log(err)
        }

      },
      // emitimage:function(){
      //   console.log("emitimage")
      //   this.$emit('newimage')
      // }
  	},
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  computed: {
    orderData: function(){
      var order
      if(this.sortOrders[this.sortKey] == 1){
        order = 'asc'
      }else {
        order = 'desc'
      }
      return _.orderBy(this.data, this.sortKey, order)
    },
    filterData: function() {
      var order
      if(this.sortOrders[this.sortKey] == 1){
          order = 'asc'
      }else {
          order = 'desc'
      }
      var Data = _.orderBy(this.data, this.sortKey, order)
      var query = this.filterKey
      if(query!==''){
        return _.filter(Data, function(entry){
          return entry.Name.indexOf(query) !== -1
        })
      }else {
        return Data
      }

    },

  }
}

</script>
<style>
body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}

table {
  border: 2px solid #006e93;
  border-radius: 10px;
  background-color: #fff;
}

th {
  background-color: #f0f0f0;
  /*color: rgba(255,255,255,0.66);*/
  color:rgba(0,0,0,0.66);
  border: 1px solid #d4d4d5;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -user-select: none;
}

td {
  background-color: #f9f9f9;
  border: 1px solid #d4d4d5;
}

th, td {
  /*min-width: 120px;*/
  padding: 10px 20px;
}

th.active {
  color: #000;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #000;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #000;
}
.p {
  color: #20a0ff;
  font-size: 20px;
  margin-top: 5px;
}
#search {
  margin-bottom: 10px;
}
</style>
