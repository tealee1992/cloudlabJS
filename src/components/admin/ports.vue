<template>
  <div>
  <div style="width:830px;margin-left:150px">
    <div>
      <h3>11.0.0.171</h3>
    </div>
    <el-table
    :data="tableData1"
    style="width: 100%"
    height="250">
    <el-table-column
      fixed
      prop="user"
      label="学生"
      width="150">
    </el-table-column>
    <el-table-column
      prop="router"
      label="路由器端口"
      width="150">
    </el-table-column>
    <el-table-column
      prop="host"
      label="主机端口"
      width="180">
    </el-table-column>
    <el-table-column
      prop="container"
      label="容器"
      width="180">
    </el-table-column>
    <el-table-column
      prop="port"
      label="容器端口"
      width="150">
    </el-table-column>
  </el-table>
</div>

  <div style="width:830px;margin-left:150px">
    <div>
      <h3>11.0.0.172</h3>
    </div>
    <el-table
    :data="tableData2"
    style="width: 100%"
    height="250">
    <el-table-column
      fixed
      prop="user"
      label="学生"
      width="150">
    </el-table-column>
    <el-table-column
      prop="router"
      label="路由器端口"
      width="150">
    </el-table-column>
    <el-table-column
      prop="host"
      label="主机端口"
      width="180">
    </el-table-column>
    <el-table-column
      prop="container"
      label="容器"
      width="180">
    </el-table-column>
    <el-table-column
      prop="port"
      label="容器端口"
      width="150">
    </el-table-column>
  </el-table>
</div>

  <div style="width:830px;margin-left:150px">
    <div>
      <h3>11.0.0.176</h3>
    </div>
    <el-table
    :data="tableData3"
    style="width: 100%"
    height="250">
    <el-table-column
      fixed
      prop="user"
      label="学生"
      width="150">
    </el-table-column>
    <el-table-column
      prop="router"
      label="路由器端口"
      width="150">
    </el-table-column>
    <el-table-column
      prop="host"
      label="主机端口"
      width="180">
    </el-table-column>
    <el-table-column
      prop="container"
      label="容器"
      width="180">
    </el-table-column>
    <el-table-column
      prop="port"
      label="容器端口"
      width="150">
    </el-table-column>
  </el-table>
</div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        tableData1: [{
          user: '000',
          router: '19500',
          host: '11.0.0.171:9500',
          container: 'd89c53a2b89a',
          port: '6080',
        },
        {
          user: '001',
          router: '19501',
          host: '11.0.0.171:9501',
          container: 'c45d53a2cdaa',
          port: '6080',
        },
        {
          user: '005',
          router: '19502',
          host: '11.0.0.171:9502',
          container: 'b34f53b1cacf',
          port: '6080',
        },
        {
          user: '006',
          router: '19503',
          host: '11.0.0.171:9503',
          container: 'f27d64a29dba',
          port: '6080',
        },
        {
          user: '0010',
          router: '19504',
          host: '11.0.0.171:9504',
          container: 'd52d46a2c190',
          port: '6080',
        },
        {
          user: '0011',
          router: '19505',
          host: '11.0.0.171:9505',
          container: 'f47d27b1d801',
          port: '6080',
        },        
        ],

        tableData2: [{
          user: '002',
          router: '29500',
          host: '11.0.0.172:9500',
          container: 'a42c86a2bcca',
          port: '6080',
        },
        {
          user: '003',
          router: '29501',
          host: '11.0.0.172:9501',
          container: 'd31d43c1a58a',
          port: '6080',
        },
        {
          user: '007',
          router: '29502',
          host: '11.0.0.172:9502',
          container: 'b23f57a1faba',
          port: '6080',
        },
        {
          user: '008',
          router: '29503',
          host: '11.0.0.172:9503',
          container: 'c72d24f2a84b',
          port: '6080',
        },
        {
          user: '0012',
          router: '29504',
          host: '11.0.0.172:9504',
          container: 'a62d76a2cdfa',
          port: '6080',
        },
        {
          user: '0013',
          router: '29505',
          host: '11.0.0.172:9505',
          container: 'b74d31b1d07a',
          port: '6080',
        },        
        ],

        tableData3: [{
          user: '004',
          router: '39500',
          host: '11.0.0.173:9500',
          container: 'a74c81a1baca',
          port: '6080',
        },
        {
          user: '009',
          router: '39501',
          host: '11.0.0.173:9501',
          container: 'c21d79a3cfda',
          port: '6080',
        },
        {
          user: '0014',
          router: '39502',
          host: '11.0.0.173:9502',
          container: 'c82f57b1c95a',
          port: '6080',
        },        
        ]
      }
    }
  }
</script>