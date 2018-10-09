# Define Web Form
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField, SelectField
from wtforms.validators import DataRequired

class UsersForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired()])
    first_name = StringField('First Name', validators=[DataRequired()])
    last_name = StringField('Last Name', validators=[DataRequired()])
    prog_lang = SelectField('Programing Language', choices = [('cpp', 'c++'),('java', 'Java'),('js', 'Javascript'),('php', 'PHP'),('py', 'Python'),('other', 'Other')])
    experience_yr = StringField('experience_yr', validators=[DataRequired()])
    age = IntegerField('Age', validators=[DataRequired()])
    hw1_hrs = StringField('hw1_hrs', validators=[DataRequired()])
    submit = SubmitField('Enter')
