import { Component, OnInit, Input } from '@angular/core';
import { Note } from "../note";
import { NoteService } from "../note.service";
import { NoteTypeEnum } from "./note-type.enum"
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  notes: Note[];
  selectedNote: Note;
  title: String = "";
  text: String = "";
  NoteTypeEnum: any = NoteTypeEnum;
  tag: String;
  @Input()
  componentTitle
  

  constructor(private NoteService: NoteService) { 
    
  }

  selectNote(note: Note){
    this.selectedNote = note;
    this.title = this.selectedNote.title;
    this.text = this.selectedNote.text;
    this.tag = this.selectedNote.tag;
  }

  selectTag(tag){
    this.tag = NoteTypeEnum[tag];
  }

  deselectNote(){
    this.selectedNote = null;
    this.title = ""
    this.text = ""
    this.tag = null;
  }

  loadNotes(){
    this.NoteService.getNotes().subscribe(notes => {this.notes = notes}, err => {console.log(err)})
  }

  addNote(){
    if(this.selectedNote){
    this.selectedNote.title = this.title;
    this.selectedNote.text = this.text;
    this.selectedNote.tag = this.tag;
    this.NoteService.updateNote(this.selectedNote).subscribe((note) => { this.deselectNote(); this.loadNotes() }, (err) => {console.log(err)})
  }
  else{
 let note = new Note({
      title: this.title,
      text: this.text,
      tag: this.tag
    })
    this.NoteService.addNote(note).subscribe((note) => { this.loadNotes() }, (err) => {console.log(err)})
  }
  }

  ngOnInit() {
    this.loadNotes()
  }

}
