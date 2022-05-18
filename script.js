$.getJSON(
  "https://ergast.com/api/f1/current/driverStandings.json",
  function(data){
    console.log(data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
    var id0 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.driverId;
    var id1 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.driverId;
    var id2 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.driverId;
    var points1 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].points;
    
    var driver01= "./images/" + id0 + ".png";
    var driver02= "./images/" + id1 + ".png";
    var driver03= "./images/" + id2 + ".png";
    console.log(points1);
    $('.driver1').attr('src',driver01);
    $('.driver2').attr('src',driver02);
    $('.driver3').attr('src',driver03);
    $('.points1').append(points1,);


  }
);