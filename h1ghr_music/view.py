from .models import Candidate // 현재 디렉토리의 models.py에서 Candidate라는 모델을 import하기 위한 선언                                  
def index(request):
	candidates = Candidate.objects.all()  # 변수candidates에 Candidate 테이블의 모든 row를 할당
	str = ''
	for candidate in candidates:
		str += "<p>{} 기호 {}번 ({})<br>".format(candidate.name,
			candidate.party_number,
			candidate.area)
		str += candidate.introduction + "</p>"
		return HttpResponse(str)