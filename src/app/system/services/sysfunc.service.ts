/* 	元数据 */
import { Injectable } from '@angular/core';
import { ParentService, ProvidersService } from 'fccore';
import { NzModalService } from 'ng-zorro-antd';
import { DialogListArgs, DialogListComponent } from '../components/core/dialog/dialogList.component';
import { SysbizcoderuleService } from './sysbizcoderule.service';
import { SysproductService } from './sysproduct.service';
import { SysappService } from './sysapp.service';
@Injectable()
export class SysfuncService extends ParentService {
    constructor(public providers: ProvidersService, private nzModal: NzModalService, private sysbizcoderuleService: SysbizcoderuleService, private sysproductService: SysproductService, private sysappservice: SysappService) {
        super(providers, "SYSFUNC");
    }
    /**
     * 字母快速查询
     */
    fastSearch() {
        return this.sysappservice.fastSearch()
    }
    /**
     * 获取路由导航
     * @param exp List：列表；Edit:编辑:Detail：详情
     */
    getRouteUrl(moduleId: string, appId: string, exp: string) {
        return `/${moduleId.toLocaleLowerCase()}/${appId.toLocaleLowerCase()}${exp}`;
    };
    /** YM
      *  初始化DefaultObj
      */
    getDefaultObj() {
        return this.appService.initObjDefaultValue(this.app);
    }
    /** YM
     * 根据
     * @param resId 
     */
    getBizCodeByAid(pid: string) {
        return this.sysbizcoderuleService.getBizCodeByAid(pid, 'SYSBIZCODERULE');
    }
    /** YM
     * 获取所有产品
     */
    getAllProduct() {
        return this.sysproductService.findWithQuery({});
    }
    /** YM
  * 打开窗口的函数方法
  * @param dialogArgs 
  */
    openDialog(dialogArgs: DialogListArgs) {
        return this.nzModal.open({
            title: dialogArgs.configInterface.title ? dialogArgs.configInterface.title : '',
            content: dialogArgs.configInterface.content ? dialogArgs.configInterface.content : DialogListComponent,
            onOk() { },
            onCancel() { },
            footer: false,
            width: dialogArgs.configInterface.width,
            style: dialogArgs.configInterface.style,
            componentParams: {
                options: dialogArgs
            }
        })
    }
    /**
     * 根据服务ID获取视图数据
     * @param serviceId 
     */
    getSysViews(id) {
        return this.appService.findWithQuery('SYSVIEW', { WHERE: `SERVICEID ='${id}'` });
    }
    /**
     * 根据服务ID获取接口数据
     * @param serviceId 
     */
    getsysBtns(id) {
        return this.appService.findWithQuery('SYSAPPBUTTONS', { WHERE: `APPID ='${id}'` })
    }
}
export interface Sysfunc {

}