/**
 * Created by liwanchong on 2016/8/8.
 */
import { handleActions } from 'redux-actions'
import mapAction  from '../actions/mapAction'

const initialState = {
    visitorData: [],
    showOrHide:false,
    singleData:{}
};
const mapReducer =handleActions ({
    [mapAction.getVisitorData]: (state, action)=> {
        state = Object.assign({}, state);
        state.showOrHide = false;
        state.visitorData = action.payload.data;
        return state;
    },
    [mapAction.getSingleData]:(state,action)=>{
        state = Object.assign({}, state);
        state.showOrHide=action.payload.showOrHide;
        let data=action.payload.data.data;
        if(data.servicePro==='0'){
            data.servicePro='其它';
        }else if(data.servicePro==='1'){
            data.servicePro='国家电网';
        }else if(data.servicePro==='2'){
            data.servicePro='南方电网';
        }else if(data.servicePro==='3'){
            data.servicePro='中石油';
        }else if(data.servicePro==='4'){
            data.servicePro='中石化';
        }else if(data.servicePro==='5'){
            data.servicePro='中海油';
        }else if(data.servicePro==='6'){
            data.servicePro='中国普天';
        }else if(data.servicePro==='7'){
            data.servicePro='特来电';
        }else if(data.servicePro==='8'){
            data.servicePro='循道新能源';
        }else if(data.servicePro==='9'){
            data.servicePro='富电科技';
        }else if(data.servicePro==='10'){
            data.servicePro='华商三优';
        }else if(data.servicePro==='12'){
            data.servicePro='港灯';
        }else if(data.servicePro==='13'){
            data.servicePro='澳电';
        }else if(data.servicePro==='11'){
            data.servicePro='中电';
        }
        //支付方式
        for(let i in data.payment){
            if(data.payment[i]==='0'){
                data.payment[i]='其他';
            }else if(data.payment[i]==='1'){
                data.payment[i]='现金';
            }else if(data.payment[i]==='2'){
                data.payment[i]='信用卡';
            }else if(data.payment[i]==='3'){
                data.payment[i]='借记卡';
            }else if(data.payment[i]==='4'){
                data.payment[i]='特制充值卡';
            }else if(data.payment[i]==='5'){
                data.payment[i]='APP';
            }else if(data.payment[i]==='101'){
                data.payment[i]='支付宝';
            }else if(data.payment[i]==='102'){
                data.payment[i]='微信';
            }else if(data.payment[i]==='400'){
                data.payment[i]='其他充值卡';
            }else if(data.payment[i]==='401'){
                data.payment[i]='国网普通卡';
            }else if(data.payment[i]==='402'){
                data.payment[i]='南方电网卡';
            }else if(data.payment[i]==='403'){
                data.payment[i]='中石油卡';
            }else if(data.payment[i]==='404'){
                data.payment[i]='中石化卡';
            }else if(data.payment[i]==='405'){
                data.payment[i]='中海油卡';
            }else if(data.payment[i]==='406'){
                data.payment[i]='中国普天充值卡';
            }
            state.singeData = data;
        }
        return state;
    }


}, initialState);
export  default mapReducer;