import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentEditorRoutingModule } from './document-editor-routing.module';
import { CreateDocumentComponent } from './create-document/create-document.component';
import { GetDocumentComponent } from './get-document/get-document.component';
import { GetDocumentsComponent } from './get-documents/get-documents.component';
import { UpdateDocumentComponent } from './update-document/update-document.component';


@NgModule({
  declarations: [
    CreateDocumentComponent,
    GetDocumentComponent,
    GetDocumentsComponent,
    UpdateDocumentComponent
  ],
  imports: [
    CommonModule,
    DocumentEditorRoutingModule
  ]
})
export class DocumentEditorModule { }
