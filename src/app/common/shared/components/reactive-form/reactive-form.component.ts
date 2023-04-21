import { Component, OnInit , Input, Output ,EventEmitter } from '@angular/core';
import { FormArray, FormGroup,FormBuilder } from '@angular/forms';
import { FormNames } from '../../../utils/enum';
import { FormEmmiter, FormModel, InputInterface } from '../../../utils/FormModel';
import { FormModelService } from '../../../utils/Forms';
import {ProductForm} from "../../../utils/enum"


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  @Output("Submit") OnsubmitForm = new EventEmitter<FormEmmiter>
  @Input("FormName") FormName : FormNames
  @Input("FormDefaultData") DefaultData : any


  FormData : any
  Form : FormGroup
  FileInput : InputInterface


  hidePassword : boolean = true
  constructor(private formBuilder: FormBuilder,private formModelService : FormModelService) { }

  ngOnInit(): void {

    console.log("::::: ",this.DefaultData)
    this.FormData = FormModel.GetForm(this.FormName,this.DefaultData)
    this.Form = this.formModelService.generateForm(this.FormName,this.DefaultData)
    this.FileInput = FormModel.GetFileInput(this.FormData.Inputs)

  }

  onSubmit(){
    console.log(this.Form)
    this.OnsubmitForm.emit({Form:this.Form,edited:this.DefaultData ? true : false})
  }

  validateFeild(FeildName:string){
    console.log(this.Form.get(FeildName) ? true : false)
    return this.Form.get(FeildName) ? true : false
  }

  calculateWidth(data){
    const diff = data.length == 1 ? 0 : 1
      return {
        'width':`${(100/data.length)-diff}%`
      }
  }

  removefile(id){

    console.log(id)
    const files = this.Form.get(this.FileInput.InputName).value.filter((val)=>val.id != id)
    this.Form.patchValue({
      [this.FileInput.InputName]:files
    })
  }

  get files() {
    return this.Form.get(this.FileInput.InputName).value ;
  };


  fileBrowseHandler(filedata:any){

    console.log("files:: ",this.files)

    let filelist = filedata;
    if (filelist) {
      for (let file of filelist) {
        // let reader = new FileReader();
        // reader.onload = (e: any) => {
        //   console.log("e.target.result", e.target.result);
        //     this.photos.push(this.createItem({
        //         file,
        //         url: e.target.result  //Base64 string for preview image
        //     }));
        // }
        // reader.readAsDataURL(file);


        if(this.files){
          this.files.push({file,id:this.files.length})
        }else{
          this.Form.patchValue({
            [this.FileInput.InputName]:[{file,id:0}]
          })
        }
      }
    }

   }

  // onFileDropped(data:any){
    //   console.log("dropped file handler:: ",data)
    //   this.Form.patchValue({
    //     [this.FileInput.InputName]:data[0]
    //   })

    //   this.Form.get(this.FileInput.InputName).updateValueAndValidity()

    // let fileReader = new FileReader();
    // fileReader.onload = (e) => {
    //   console.log(fileReader.result);
    // }
    // console.log(fileReader.readAsArrayBuffer(data[0]));

    // const formdata = new FormData()
    // formdata.append("price",this.Form.get(ProductForm.ProductPrice).value)
    // formdata.append("image",this.Form.get(this.FileInput.InputName).value)

  // }

}


