FROM python:3.8

COPY requirements.txt requirements.txt
RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

COPY . app

WORKDIR /app

EXPOSE 8000

VOLUME /files

ENTRYPOINT ["python", "manage.py"]
CMD ["runserver", "0.0.0.0:8000"]