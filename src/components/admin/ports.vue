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
          container: 'e406892babea',
          port: '6080',
        },
        {
          user: '001',
          router: '19501',
          host: '11.0.0.171:9501',
          container: '042829c34879',
          port: '6080',
        },
        {
          user: '005',
          router: '19502',
          host: '11.0.0.171:9502',
          container: '38eb3435252d',
          port: '6080',
        },
        {
          user: '006',
          router: '19503',
          host: '11.0.0.171:9503',
          container: '051f7bbcb466',
          port: '6080',
        },
        {
          user: '0010',
          router: '19504',
          host: '11.0.0.171:9504',
          container: '27119057c374',
          port: '6080',
        },
        {
          user: '0011',
          router: '19505',
          host: '11.0.0.171:9505',
          container: 'd50dc34a66bc',
          port: '6080',
        },        
        ],

        tableData2: [{
          user: '002',
          router: '29500',
          host: '11.0.0.172:9500',
          container: '28e704a7da89',
          port: '6080',
        },
        {
          user: '003',
          router: '29501',
          host: '11.0.0.172:9501',
          container: '7f6640540a67',
          port: '6080',
        },
        {
          user: '007',
          router: '29502',
          host: '11.0.0.172:9502',
          container: 'a6476c00055e',
          port: '6080',
        },
        {
          user: '008',
          router: '29503',
          host: '11.0.0.172:9503',
          container: 'b8cd534cac6b',
          port: '6080',
        },
        {
          user: '0012',
          router: '29504',
          host: '11.0.0.172:9504',
          container: '4f081effbae8',
          port: '6080',
        },
        {
          user: '0013',
          router: '29505',
          host: '11.0.0.172:9505',
          container: '4b56d4206d24',
          port: '6080',
        },        
        ],

        tableData3: [{
          user: '004',
          router: '39500',
          host: '11.0.0.173:9500',
          container: '6960a6460b3e',
          port: '6080',
        },
        {
          user: '009',
          router: '39501',
          host: '11.0.0.173:9501',
          container: 'b751c64561ae',
          port: '6080',
        },
        {
          user: '0014',
          router: '39502',
          host: '11.0.0.173:9502',
          container: '74b56af65ee5',
          port: '6080',
        },        
        ]
      }
    }
  }
</script>