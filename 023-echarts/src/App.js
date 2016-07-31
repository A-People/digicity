import React from 'react'
import echarts from 'echarts'
import option from './option'

class App extends React.Component {
  componentDidMount(){
    var myChart = echarts.init(document.getElementById('ccc'));
    //console.log(option)
    myChart.setOption(option)
  }
  render () {
    return(
      <div id='ccc' style={{height:'500px',width:'800px'}}>

      </div>
    )
  }
}

export default App;
