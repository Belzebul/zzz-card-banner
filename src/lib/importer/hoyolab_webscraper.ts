import axios from "axios";

const USER_ID = "1000261506";
const LTOKEN_V2 = "v2_CAISDGNpZWF6NGVwZDV2axokMjA2NmQ3YjgtNjYyNy00ZTI0LTgyY2UtZWE3ZDY3ZGU5NDk3IJCupbYGKJzm984HMPfF4U5CCm5hcF9nbG9iYWw.EFfJZgAAAAAB.MEYCIQDZ3DQDjXPT1S567LnKwUybBk3bG482vQ5l1Xos3f1pzgIhAM1fes17_7hwi9t3vFIm3Fglir6YpCz8p9nsIvxHdQSY";
const LTUID_V2 = "165176055";
const TOKEN = `ltoken_v2=${LTOKEN_V2};ltuid_v2=${LTUID_V2};`;

const URL_LIST_BASE: string = "https://sg-act-nap-api.hoyolab.com"
const URL_LIST_BASE_PARAMS = "/event/game_record_zzz/api/zzz/avatar/basic?server=prod_gf_us&role_id=";
const URL_CHAR_DATA = "https://sg-act-nap-api.hoyolab.com/event/" +
    "game_record_zzz/api/zzz/avatar/info?id_list[]=";
const URL_CHAR_PARAM = "&need_wiki=true&server=prod_gf_us&role_id=";

const HEADERS = {
    "Cookie": TOKEN,
    "Accept": "application/json",
    "Accept-Encoding": "gzip",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
        "(KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0",
    "Referer": "https://act.hoyolab.com/",
    "Origin": "https://act.hoyolab.com",
    "Access-Control-Allow-Origin": "*"
}

const requestJson = (url: string) => {
    axios.get(url,
        { headers: HEADERS }
    ).then((res) => {
        console.log(res)
    }).catch((res) => {
        console.log(res)
    })
}

export const loadCharsList = () => {
    const CharsNameList = requestJson(`${URL_LIST_BASE}${URL_LIST_BASE_PARAMS}${USER_ID}`)
    console.log(CharsNameList);
}