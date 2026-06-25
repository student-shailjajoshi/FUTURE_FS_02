from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from config import get_db
from models.lead import Lead

router = APIRouter()

@router.get("/")
def get_leads(db: Session = Depends(get_db)):
    return db.query(Lead).all()

@router.post("/")
def add_lead(name: str, email: str, phone: str, status: str = "New", db: Session = Depends(get_db)):
    lead = Lead(name=name, email=email, phone=phone, status=status)
    db.add(lead)
    db.commit()
    return {"msg": "Lead added"}

@router.put("/{id}")
def update_lead(id: int, status: str, db: Session = Depends(get_db)):
    lead = db.query(Lead).filter(Lead.id == id).first()
    if not lead:
        raise HTTPException(status_code=404, detail="Lead nahi mila")
    lead.status = status
    db.commit()
    return {"msg": "Lead status updated"}

@router.delete("/{id}")
def delete_lead(id: int, db: Session = Depends(get_db)):
    lead = db.query(Lead).filter(Lead.id == id).first()
    if not lead:
        raise HTTPException(status_code=404, detail="Lead nahi mila")
    db.delete(lead)
    db.commit()
    return {"msg": "Lead deleted"}