(function () {
    'use strict';
    const userNameInput = document.getElementById('user-name');
    const assessmentButtomn = document.getElementById('assessment');
    const resultDivited = document.getElementById('result-area');
    const tweetDivided = document.getElementById('tweet-area');
   
    function removeAllChildren(element){
        while(element.firstChild){
            element.removeChild(element.firstChild);
        }
    };
   
    assessmentButtomn.onclick = () => {
        const userName = userNameInput.value;
        if(userName.length === 0){
            return;
        }   
        
        removeAllChildren(resultDivited);
　　　　　const header = document.createElement('h3');
        header.innerText = '診断結果';
        resultDivited.appendChild(header);

        
        const paragraph = document.createElement('p');
        const result = assessment(userName);
        paragraph.innerText = result;
        resultDivited.appendChild(paragraph);
    
   
    removeAllChildren(tweetDivided);
    const anchor = document.createElement('a');
    const herfValue = 'https://twitter.com/intent/tweet?button_hashtag=%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AE%E3%81%84%E3%81%84%E3%81%A8%E3%81%93%E3%82%8D&text='+ encodeURIComponent(result);
    anchor.setAttribute('href',herfValue);
    anchor.className = 'twitter-hashtag-button';
    anchor.innerText = 'Tweet #%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AE%E3%81%84%E3%81%84%E3%81%A8%E3%81%93%E3%82%8D';
    tweetDivided.appendChild(anchor);
    twttr.widgets.load();
    };

    const answers = [
        '{userName}のいいところは声です。{userName}の特徴的な声はみなを惹きつけ、心に残ります。',
        '{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
        '{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
        '{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
        '{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
        '{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
        '{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
        '{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
        '{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
        '{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
        '{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
        '{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
        '{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
        '{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
        '{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
        '{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。'
    ];
    /**
     * 名前を渡すと、診断結果を返す関数
     * @param {string} userName 
     * @return {string}診断結果
     */
    

    userNameInput.onkeydown = (event) => {
        if(event.keyCode === 13){
       assessmentButtomn.onclick()
        }
      }; 

    function assessment(userName){
    let sumOfcharCode = 0;
    for (let i = 0; i < userName.length; i++){
        sumOfcharCode = sumOfcharCode + userName.charCodeAt(i);
    }
       const index = sumOfcharCode % answers.length;
       let result = answers[index];
       result = result.replace(/\{userName\}/g,userName);
　　　　return result;
       
}


})();
