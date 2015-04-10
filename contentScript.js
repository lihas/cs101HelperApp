/**
 * Created by neo on 10/4/15.
 */
window.onload=function(){
    console.log("cs101 module init!");
    chrome.runtime.onMessage.addListener(
        function(message, sender, sendResponse) {
            console.log(message,message.rollNumberList);

            rollNumberList=message.rollNumberList;
            gradeList=message.gradeList;

            tables=document.querySelectorAll("tbody");
            biggestTable=tables[0];

            for(var i=0;i<tables.length;i++){
            if(tables[i].childNodes.length>biggestTable.childNodes.length){
                biggestTable=tables[i];
            }
            }
            console.log(biggestTable);
            for(var j=0;j<biggestTable.childNodes.length;j++){
                row=biggestTable.childNodes[j];
                console.log(row[6]);
                roll=row.childNodes[3];
                grade=row.childNodes[6].childNodes[4];

                if(rollNumberList.indexOf(roll.innerText)>=0){
                    /*roll number of interest */
                    var index=rollNumberList.indexOf(roll.innerText);
                    grade.value=gradeList[index];
                }
            }
        });
}

