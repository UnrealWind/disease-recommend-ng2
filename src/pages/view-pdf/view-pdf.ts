import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';

import { ConstantProvider } from "../../providers/constant/constant";
import * as pdfjs from "pdfjs-dist";
@IonicPage()
@Component({
  selector: 'page-view-pdf',
  templateUrl: 'view-pdf.html',
})
export class ViewPdfPage {
  params;
  tagPDFUrl;
  totalPages;
  currentPage = 1;
  pdfDocument;
  pdfViewer;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public Constant:ConstantProvider,
              public loadingCtrl:LoadingController) {
    this.params = this.navParams.data;
    //this.tagPDFUrl = this.sanitizer.bypassSecurityTrustResourceUrl()


  }

  ngOnInit(): void{
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: '加载中……'
    });
    loading.present();
    this.tagPDFUrl = this.Constant.BackstageUrl+this.params.discribe+'/literature/'+this.params.type+'/'+this.params.id
    this.viewPDF (loading)
  }


  viewPDF (loading){
    var url = this.tagPDFUrl;
    var that = this;

    //pdfjs.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';

    var loadingTask = pdfjs.getDocument(url);
    loadingTask.promise.then(function(pdf) {
      console.log('PDF loaded');
      that.pdfDocument = pdf;
      that.totalPages = pdf.pdfInfo.numPages;

      that.getPage(that.currentPage);
      // pdf.getPage(that.currentPage).then(function(page) {
      //   console.log('Page loaded');
      //
      //   var scale = 1.5;
      //   var viewport = page.getViewport(scale);
      //
      //   var canvas : any = document.getElementById('the-canvas');
      //   var context = canvas.getContext('2d');
      //   canvas.height = viewport.height;
      //   canvas.width = viewport.width;
      //
      //   var renderContext = {
      //     canvasContext: context,
      //     viewport: viewport
      //   };
      //   var renderTask = page.render(renderContext);
      //   renderTask.then(function () {
      //     console.log('Page rendered');
      //
      //     //消除加载中的提示
      //     loading.dismiss()
      //   });
      // });
      //消除加载中的提示
      loading.dismiss()
    }, function (reason) {
      console.error(reason);
    });
  }

  getPage(page){
      if(!(Number(page)<1 || Number(page)>Number(this.totalPages))){
        this.pdfDocument.getPage(page).then(function(page) {
          console.log('Page loaded');

          var scale = 1.5;
          var viewport = page.getViewport(scale);

          var canvas : any = document.getElementById('the-canvas');
          var context = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          var renderContext = {
            canvasContext: context,
            viewport: viewport
          };
          var renderTask = page.render(renderContext);
          renderTask.then(function () {
            console.log('Page rendered');
          });
        });
      }else{
        //防止
        // if(page>this.totalPages){
        //   this.currentPage = this.totalPages;
        // }else{
        //   this.currentPage = 1;
        // }
      }
  }

  prePage(){
    this.currentPage -=1;
    this.getPage(this.currentPage);
  }

  nextPage(){
    this.currentPage+=1;
    this.getPage(this.currentPage);
  }

  back(){
    this.navCtrl.pop();
  }

}
