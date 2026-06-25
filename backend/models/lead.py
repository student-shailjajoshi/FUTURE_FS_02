from sqlalchemy import Column, Integer, String, Text, DateTime
from datetime import datetime
from config import Base

class Lead(Base):
    __tablename__ = "leads"

    id         = Column(Integer, primary_key=True, index=True)
    name       = Column(String, nullable=False)
    email      = Column(String, nullable=False)
    phone      = Column(String)
    source     = Column(String)
    status     = Column(String, default="New")
    notes      = Column(Text)
    created_at = Column(DateTime, default=datetime.utcnow)