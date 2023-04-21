import { Directive,HostListener,HostBinding,Output,EventEmitter } from "@angular/core";

@Directive({
    selector:"[dragdrop]"
})
export class DragDropDirective{

    constructor(){}

    @Output("fileDropped") fileDropped = new EventEmitter()

    @HostBinding('class.fileover') fileover : boolean;

    @HostListener('dragover',['$event']) onDragOver(event){
        event.preventDefault()
        event.stopPropagation()
        this.fileover = true
        console.log("Drag over")
    }


    @HostListener('dragleave',['$event']) onDragLeave(event){
        event.preventDefault()
        event.stopPropagation()
        console.log("Drag leave")
    }


    @HostListener('drop',['$event']) onDrop(event){
        event.preventDefault()
        event.stopPropagation()
        console.log("file dropped...")
        this.fileover = false
        const files = event.dataTransfer.files
        if(files.length>0){
            this.fileDropped.emit(files)
            console.log(`you dropped ${files.length} files.`)
        }

        console.log("Drop called")
    }

}
