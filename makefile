install: Start_To_Work.aiff Get_Out_Of_Work.aiff Get_Back_To_Work.aiff
clean:
	rm -rf Start_To_Work.aiff Get_Out_Of_Work.aiff Get_Back_To_Work.aiff
Start_To_Work.aiff:
	say --rate='200' --voice='Samantha' 'Start to work, work, work' -o Start_To_Work.aiff
Get_Out_Of_Work.aiff:
	say --rate='200' --voice='Samantha' 'DAMN it, Get out, out, out of work NOW!!!' -o Get_Out_Of_Work.aiff
Get_Back_To_Work.aiff:
	say --rate='200' --voice='Samantha' 'Hey! Get back, back, back to work!!!' -o Get_Back_To_Work.aiff
.PHONY: install clean
