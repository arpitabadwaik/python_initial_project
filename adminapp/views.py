import json

from django.db import transaction
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
from django.views.decorators.csrf import csrf_exempt

from adminapp.models import SaveData


def landing_page(request):
    return render(request, 'administrator.html')


@csrf_exempt
@transaction.atomic
def save_data(request):
    print 'in method'
    SaveData(
        bill_month=request.POST.get('bill_month'),
        sub_division=request.POST.get('sub_division'),
        cycle=request.POST.get('cycle'),
        reading_start_date=request.POST.get('start_date'),
        reading_end_date=request.POST.get('end_date'),
        validation_start_date=request.POST.get('v_start_date'),
        validation_end_date=request.POST.get('v_end_date'),
        punching_start_date=request.POST.get('punchingstartdate'),
        punching_end_date=request.POST.get('punchingenddate'),
        pre_audit_date=request.POST.get('audit_name'),
        bill_generation_date=request.POST.get('billdate'),
        bill_printing_start_date=request.POST.get('printstartdate'),
        bill_printing_end_date=request.POST.get('print_comp_date'),
        bill_distribution_start_date=request.POST.get('dist_start_date'),
        bill_distribution_end_date=request.POST.get('dist_end_date'),
        incentive_date=request.POST.get('incentivedate'),
        due_date=request.POST.get('duedate')
    ).save()
    data = {'success': 'true'}
    return HttpResponse(json.dumps(data), content_type='application/json')


def load_landing_table(request):
    details = []
    save_data = SaveData.objects.all()
    for data in save_data:
        action = '<a onclick = open_modal(' + str(
            data.id) + ') title = "Edit" data-target = "modal"> <i class = "fa fa-pencil" area-hidden = "true"> </i> </a>'
        table_data = {
            'cycle': data.cycle,
            'start_date': data.reading_start_date,
            'end_date': data.reading_end_date,
            'bill_distribution_start_date': data.bill_distribution_start_date,
            'bill_distribution_end_date': data.bill_distribution_end_date,
            'action': action

        }
        details.append(table_data)

    data = {'data': details}
    print "--------data--------------", data
    return HttpResponse(json.dumps(data), content_type='application/json')


def open_modal(request):
    edit_data = SaveData.objects.get(id=request.GET.get('id'))
    data = {
        'bill_month': edit_data.bill_month,
        'sub_division': edit_data.sub_division,
        'cycle': edit_data.cycle,
        'reading_start_date': edit_data.reading_start_date,
        'reading_end_date': edit_data.reading_end_date,
        'validation_start_date': edit_data.validation_start_date,
        'validation_end_date': edit_data.validation_end_date,
        'punching_start_date': edit_data.punching_start_date,
        'punching_end_date': edit_data.punching_end_date,
        'pre_audit_date': edit_data.pre_audit_date,
        'bill_generation_date': edit_data.bill_generation_date,
        'bill_printing_start_date': edit_data.bill_printing_start_date,
        'bill_printing_end_date': edit_data.bill_printing_end_date,
        'bill_distribution_start_date': edit_data.bill_distribution_start_date,
        'bill_distribution_end_date': edit_data.bill_distribution_end_date,
        'incentive_date': edit_data.incentive_date,
        'due_date': edit_data.due_date,
        'success': 'true'
    }
    return HttpResponse(json.dumps(data), content_type='application/json')
