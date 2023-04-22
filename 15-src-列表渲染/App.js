import React, {Component} from 'react';

class App extends Component {
    state = {
        movies: [
            {
                "avgSeatView": "4.7%",
                "avgShowView": "7.2",
                "boxRate": "84.8%",
                "boxSplitUnit": {
                    "num": "&#xef74;&#xe317;&#xe5ac;&#xe274;.&#xf66d;&#xe5ac;",
                    "unit": "万"
                },
                "movieInfo": {
                    "movieId": 1383605,
                    "movieName": "灌篮高手",
                    "releaseInfo": "上映3天"
                },
                "showCount": 199070,
                "showCountRate": "53.8%",
                "splitBoxRate": "84.6%",
                "splitBoxSplitUnit": {
                    "num": "&#xef74;&#xf66d;&#xf615;&#xf615;.&#xe274;&#xe1b7;",
                    "unit": "万"
                },
                "sumBoxDesc": "2.69亿",
                "sumSplitBoxDesc": "2.33亿"
            },
            {
                "avgSeatView": "1.9%",
                "avgShowView": "2.0",
                "boxRate": "3.0%",
                "boxSplitUnit": {
                    "num": "&#xec68;&#xf66d;&#xe317;.&#xf615;&#xeab3;",
                    "unit": "万"
                },
                "movieInfo": {
                    "movieId": 1250896,
                    "movieName": "超级马力欧兄弟大电影",
                    "releaseInfo": "上映18天"
                },
                "showCount": 24346,
                "showCountRate": "6.5%",
                "splitBoxRate": "3.0%",
                "splitBoxSplitUnit": {
                    "num": "&#xe6d5;&#xe1b7;&#xf615;.&#xec68;&#xe5ac;",
                    "unit": "万"
                },
                "sumBoxDesc": "1.26亿",
                "sumSplitBoxDesc": "1.11亿"
            },
            {
                "avgSeatView": "1.7%",
                "avgShowView": "1.8",
                "boxRate": "2.3%",
                "boxSplitUnit": {
                    "num": "&#xe6d5;&#xe5ac;&#xe6d5;.&#xec68;&#xe1b7;",
                    "unit": "万"
                },
                "movieInfo": {
                    "movieId": 1410386,
                    "movieName": "铃芽之旅",
                    "releaseInfo": "上映30天"
                },
                "showCount": 26700,
                "showCountRate": "7.2%",
                "splitBoxRate": "2.3%",
                "splitBoxSplitUnit": {
                    "num": "&#xe6d5;&#xf615;&#xe274;.&#xeab3;&#xe274;",
                    "unit": "万"
                },
                "sumBoxDesc": "7.63亿",
                "sumSplitBoxDesc": "6.59亿"
            },
            {
                "avgSeatView": "1.1%",
                "avgShowView": "1.1",
                "boxRate": "1.8%",
                "boxSplitUnit": {
                    "num": "&#xe6d5;&#xec68;&#xf615;.&#xe6d5;&#xf615;",
                    "unit": "万"
                },
                "movieInfo": {
                    "movieId": 1203724,
                    "movieName": "忠犬八公",
                    "releaseInfo": "上映23天"
                },
                "showCount": 28111,
                "showCountRate": "7.5%",
                "splitBoxRate": "1.8%",
                "splitBoxSplitUnit": {
                    "num": "&#xe6d5;&#xf66d;&#xe274;.&#xe317;&#xe317;",
                    "unit": "万"
                },
                "sumBoxDesc": "2.61亿",
                "sumSplitBoxDesc": "2.33亿"
            },
            {
                "avgSeatView": "0.5%",
                "avgShowView": "0.6",
                "boxRate": "1.1%",
                "boxSplitUnit": {
                    "num": "&#xe1b7;&#xf66d;.&#xe1b7;&#xe317;",
                    "unit": "万"
                },
                "movieInfo": {
                    "movieId": 1443653,
                    "movieName": "龙马精神",
                    "releaseInfo": "上映16天"
                },
                "showCount": 31005,
                "showCountRate": "8.3%",
                "splitBoxRate": "1.2%",
                "splitBoxSplitUnit": {
                    "num": "&#xe317;&#xf615;.&#xef74;&#xeab3;",
                    "unit": "万"
                },
                "sumBoxDesc": "1.81亿",
                "sumSplitBoxDesc": "1.64亿"
            },
            {
                "avgSeatView": "5.5%",
                "avgShowView": "5.5",
                "boxRate": "0.7%",
                "boxSplitUnit": {
                    "num": "&#xef74;&#xf615;.&#xe1b7;&#xec68;",
                    "unit": "万"
                },
                "movieInfo": {
                    "movieId": 267,
                    "movieName": "泰坦尼克号",
                    "releaseInfo": ""
                },
                "showCount": 2246,
                "showCountRate": "0.6%",
                "splitBoxRate": "0.7%",
                "splitBoxSplitUnit": {
                    "num": "&#xeab3;&#xe5ac;.&#xe1b7;&#xe317;",
                    "unit": "万"
                },
                "sumBoxDesc": "13.59亿",
                "sumSplitBoxDesc": "13.52亿"
            },
            {
                "avgSeatView": "2.9%",
                "avgShowView": "2.7",
                "boxRate": "0.6%",
                "boxSplitUnit": {
                    "num": "&#xeab3;&#xef74;.&#xe274;&#xe5ac;",
                    "unit": "万"
                },
                "movieInfo": {
                    "movieId": 1310584,
                    "movieName": "宇宙探索编辑部",
                    "releaseInfo": "上映22天"
                },
                "showCount": 3634,
                "showCountRate": "0.9%",
                "splitBoxRate": "0.7%",
                "splitBoxSplitUnit": {
                    "num": "&#xeab3;&#xe6d5;.&#xe1b7;&#xf66d;",
                    "unit": "万"
                },
                "sumBoxDesc": "5921.1万",
                "sumSplitBoxDesc": "5388.8万"
            },
            {
                "avgSeatView": "1.0%",
                "avgShowView": "0.9",
                "boxRate": "0.5%",
                "boxSplitUnit": {
                    "num": "&#xf615;&#xe274;.&#xe6d5;&#xe317;",
                    "unit": "万"
                },
                "movieInfo": {
                    "movieId": 1434052,
                    "movieName": "保你平安",
                    "releaseInfo": "上映44天"
                },
                "showCount": 9948,
                "showCountRate": "2.6%",
                "splitBoxRate": "0.5%",
                "splitBoxSplitUnit": {
                    "num": "&#xf615;&#xef74;.&#xe6d5;&#xe274;",
                    "unit": "万"
                },
                "sumBoxDesc": "6.79亿",
                "sumSplitBoxDesc": "6.15亿"
            },
            {
                "avgSeatView": "1.5%",
                "avgShowView": "1.5",
                "boxRate": "0.5%",
                "boxSplitUnit": {
                    "num": "&#xf615;&#xe5ac;.&#xe1b7;&#xf615;",
                    "unit": "万"
                },
                "movieInfo": {
                    "movieId": 34064,
                    "movieName": "名侦探柯南：贝克街的亡灵",
                    "releaseInfo": "上映19天"
                },
                "showCount": 6892,
                "showCountRate": "1.8%",
                "splitBoxRate": "0.5%",
                "splitBoxSplitUnit": {
                    "num": "&#xf615;&#xec68;.&#xec68;&#xe5ac;",
                    "unit": "万"
                },
                "sumBoxDesc": "5139.1万",
                "sumSplitBoxDesc": "4418.8万"
            },
            {
                "avgSeatView": "0.9%",
                "avgShowView": "0.9",
                "boxRate": "0.5%",
                "boxSplitUnit": {
                    "num": "&#xf615;&#xe5ac;.&#xf66d;&#xf615;",
                    "unit": "万"
                },
                "movieInfo": {
                    "movieId": 1417411,
                    "movieName": "暴风",
                    "releaseInfo": "上映9天"
                },
                "showCount": 10116,
                "showCountRate": "2.7%",
                "splitBoxRate": "0.5%",
                "splitBoxSplitUnit": {
                    "num": "&#xf615;&#xf615;.&#xe5ac;&#xe274;",
                    "unit": "万"
                },
                "sumBoxDesc": "2976.0万",
                "sumSplitBoxDesc": "2690.4万"
            },
            {
                "avgSeatView": "4.1%",
                "avgShowView": "4.5",
                "boxRate": "0.3%",
                "boxSplitUnit": {
                    "num": "&#xec68;&#xef74;.&#xf66d;&#xe317;",
                    "unit": "万"
                },
                "movieInfo": {
                    "movieId": 1367325,
                    "movieName": "惊天救援",
                    "releaseInfo": "点映"
                },
                "showCount": 1219,
                "showCountRate": "0.3%",
                "splitBoxRate": "0.3%",
                "splitBoxSplitUnit": {
                    "num": "&#xec68;&#xf615;.&#xe6d5;&#xf615;",
                    "unit": "万"
                },
                "sumBoxDesc": "189.9万",
                "sumSplitBoxDesc": "174.8万"
            },
            {
                "avgSeatView": "2.0%",
                "avgShowView": "2.0",
                "boxRate": "0.3%",
                "boxSplitUnit": {
                    "num": "&#xec68;&#xeab3;.&#xe6d5;&#xef74;",
                    "unit": "万"
                },
                "movieInfo": {
                    "movieId": 341858,
                    "movieName": "龙与地下城：侠盗荣耀",
                    "releaseInfo": "上映23天"
                },
                "showCount": 2971,
                "showCountRate": "0.8%",
                "splitBoxRate": "0.3%",
                "splitBoxSplitUnit": {
                    "num": "&#xec68;&#xe6d5;.&#xe6d5;&#xe274;",
                    "unit": "万"
                },
                "sumBoxDesc": "7781.1万",
                "sumSplitBoxDesc": "6749.4万"
            }
        ]
    }

    render() {
        const {movies} = this.state
        return (
            <div>
                列表渲染 - map语法
                <hr/>
                <ul>
                    {
                        movies.map((item, index) => {
                            return <li key={item.movieInfo.movieId}>{item.movieInfo.movieName}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default App;