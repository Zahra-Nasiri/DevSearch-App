from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ProjectSerializer
from projects.models import Project

@api_view(['GET'])
def getRoutes(request):

    routes = [
        # to get projects
        {'GET':'/api/projects'},
        # to get specific project by id
        {'GET': '/api/projects/id'},
        # post method to vote a project
        {'POST': '/api/projects/id/votes'},
        # for login users
        {'POST': '/api/users/token'},
        # refresh token
        {'POST': '/api/users/token/refresh'}
    ]

    return Response(routes)

@api_view(['GET'])
def getProjects(request):
    projects = Project.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProject(request, pk):
    project = Project.objects.get(id=pk)
    serializer = ProjectSerializer(project, many=False)
    return Response(serializer.data)     