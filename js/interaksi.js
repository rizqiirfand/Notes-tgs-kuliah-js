
function refresh_table(arr){
	if ($('#read_div').children().length>0) {
		$('#read_div').children().remove()
	}
	for (var i = 0; i < arr.length; i++) {
			var no = i+1;
			$('#read_div').append('<div class="card border-0 shadow-sm"><div class="card-header text-center text-light bg-danger border-0 ">'+arr[i]['deadline']+'</div><div class="card-body text-light bg-info border-0 ">'+arr[i]['matkul']+' : '+arr[i]['judul']+'</div><div class="card-body border-0 ">'+arr[i]['deskripsi']+'</div><div class="card-footer text-right border-0  "><button class="btn btn-primary" data-toggle="modal" data-target="#update" onclick="select_tgs('+no+')">Edit</button> <button class="btn btn-danger" data-toggle="modal" data-target="#modal_delete" onclick="sel_del_tgs('+no+') ">Delete</button></div></div>');
		}
}

function sel_del_tgs(no){
	$('#id_del').val(no)
}

function del_tgs(){
	var no = $('#id_del').val();
	var idx = no - 1;
	var arr = JSON.parse(localStorage.getItem('notes'));
	arr.splice(idx, 1);
	localStorage.setItem('notes', JSON.stringify(arr));
	$('#btn_del_cls').click();
	refresh_table(arr);
}

function select_tgs(no){
	var idx = no - 1;
	var arr = JSON.parse(localStorage.getItem('notes'));
	$('#up_id').val(idx);
	$('#up_judul_tgs').val(arr[idx]['judul']);
	$('#up_matakuliah').val(arr[idx]['matkul']);
	$('#up_deskripsi').val(arr[idx]['deskripsi']);
	$('#up_deadline').val(arr[idx]['deadline']);
}

function update_tgs(){
	var idx = $('#up_id').val();
	var arr = JSON.parse(localStorage.getItem('notes'));
	arr[idx]['judul'] = $('#up_judul_tgs').val()
	arr[idx]['matkul'] = $('#up_matakuliah').val();
	arr[idx]['deskripsi'] = $('#up_deskripsi').val();
	arr[idx]['deadline'] = $('#up_deadline').val();
	localStorage.setItem('notes', JSON.stringify(arr));
	$('#form_tambah_tgs')[0].reset();
	$('#btn_up_cls').click();
	refresh_table(arr)
}

function add_tgs(){
	var judul = $('#judul_tgs').val();
	var matkul = $('#matakuliah').val();
	var deskripsi = $('#deskripsi').val();
	var deadline = $('#deadline').val();

	a = {
		    judul: judul, matkul: matkul, deskripsi: deskripsi, deadline: deadline
		}

	var temp = JSON.parse(localStorage.getItem('notes'));
	temp.push(a);

	localStorage.setItem('notes', JSON.stringify(temp));
	var parse = JSON.parse(localStorage.getItem('notes'));

	$('#form_tambah_tgs')[0].reset();
	$('#triger_add').click()
	refresh_table(parse);
}

function reset_notes() {
	localStorage.clear()
	arr = []
	localStorage.setItem('notes', JSON.stringify(arr))
	refresh_table(JSON.parse(localStorage.getItem('notes')));
}
