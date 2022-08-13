let partNo = 0;

// 임시
let partList = [

]

// 파트 = part1
// 질문 = part1-quest1
// 질문 = part1-quest2
// 질문 = part1-quest3

// 파트 = part2
// 질문 = part2-quest1

// 파트 = part3
// 질문 = part3-quest1
// 질문 = part3-quest2

function send() {

    let tempObject = {
        pupose: $("#purpose").val(),
        title: $("#title").val(),
        tempList: []
    };



    for (let i = 1; i <= partList.length; i++) {
        let temp = {
            part: $(`#part${i}`).val(),
            quests: [

            ]
        }

        for (let k = 1; k <= partList[i - 1].questNo; k++) {
            temp.quests.push($(`#part${i}-quest${k}`).val());
        }

        tempObject.tempList.push(temp);
    }

    console.log(tempObject);

    // ajax 이후에 초기화

    // tempObject 초기화

}



// 파트 생성 이벤트
$("#btn-add-part").click(() => {
    partNo = partNo + 1;
    addPartElement(partNo);

    let partInfo = {
        partNo: partNo,
        questNo: 1,
    }
    partList.push(partInfo);

    console.log(partList);
});

// 파트 삭제 이벤트
function partDelete(partNo) {
    $(`#part-item-${partNo}`).remove();
}

// 질문 삭제 이벤트
function questDelete(partNo, questNo) {
    $(`#btn-delete-part${partNo}-quest${questNo}`).remove();
}

// 파트 생성
function addPartElement(partNo) {
    let mPart = $(`
			<div id="part-item-${partNo}" class="m_part">
				<table>
					<tr>
						<td><input id="part${partNo}" type="text" class="form-control" placeholder="파트" /></td>
						<td><button id="btn-delete-part-${partNo}" type="button" class="btn btn-danger" onclick="partDelete(${partNo})">-</button></td>
					</tr>
					<tr>
						<td><input id="part${partNo}-quest1" type="text" class="form-control" placeholder="질문" /></td>
						<td><button id="btn-add-part${partNo}-quest1" type="button" class="btn btn-success" onclick="addQuestElement(${partNo})">+</button></td>
					</tr>
				</table>
				<br />
			</div>
            
			`);
    $("#m-part-box").append(mPart);
}

// 질문 생성
function addQuestElement(partNo) {
    let questNo = makeQuestNumber(partNo);

    let mQuest = $(`
            <tr id="btn-delete-part${partNo}-quest${questNo}">
                <td><input id="part${partNo}-quest${questNo}" type="text" class="form-control" placeholder="질문" /></td>
                <td><button type="button" class="btn btn-danger" onclick="questDelete(${partNo}, ${questNo})">-</button></td>
            </tr>
    `);
    $(`#part-item-${partNo} table tbody`).append(mQuest);


}

// part 별 질문 번호 생성하기
function makeQuestNumber(partNo) {
    let tempQuestNo = 0;

    partList.forEach(partInfo => {
        if (partInfo.partNo == partNo) {
            partInfo.questNo = partInfo.questNo + 1;
            tempQuestNo = partInfo.questNo;
        }
    });
    return tempQuestNo;
}