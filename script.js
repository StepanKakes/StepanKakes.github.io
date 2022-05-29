$.getJSON(
  "https://ergast.com/api/f1/current/driverStandings.json",
  function(data){
    console.log(data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
    var id0 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.driverId;
    var id1 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.driverId;
    var id2 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.driverId;
    var points1 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].points;
    var points2 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].points;
    var points3 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].points;

    var constructor0= data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Constructors[0].constructorId
    var constructor1= data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Constructors[0].constructorId
    var constructor2= data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Constructors[0].constructorId
    
    var driver01= "./images/" + id0 + ".png";
    var driver02= "./images/" + id1 + ".png";
    var driver03= "./images/" + id2 + ".png";
    console.log( 'var(--'+constructor1+ ")");
    console.log(points1);
    $('.driver1').attr('src',driver01);
    $('.driver2').attr('src',driver02);
    $('.driver3').attr('src',driver03);
    $('.points1').append(points1);
    $('.points2').append(points2);
    $('.points3').append(points3);
   
    document.querySelector(':root').style.setProperty('--selector1', 'var(--'+constructor0+ ")");
    document.querySelector(':root').style.setProperty('--selector2', 'var(--'+constructor1+ ")");
    document.querySelector(':root').style.setProperty('--selector3', 'var(--'+constructor2+ ")");
    
  }
);

new Vue({
  el: '#app',
  data () {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  mounted () {
    axios
      .get('https://ergast.com/api/f1/current/driverStandings.json')
      .then(response => {
        this.info = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
})
