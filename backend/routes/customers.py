from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from config import get_db
from models.lead import Lead

router = APIRouter()

@router.get("/")
def get_customers(db: Session = Depends(get_db)):
    return db.query(Lead).all()

@router.post("/")
def add_customer(name: str, email: str, phone: str, db: Session = Depends(get_db)):
    customer = Lead(name=name, email=email, phone=phone)
    db.add(customer)
    db.commit()
    return {"msg": "Customer added"}

@router.put("/{id}")
def update_customer(id: int, name: str, email: str, phone: str, db: Session = Depends(get_db)):
    customer = db.query(Lead).filter(Lead.id == id).first()
    if not customer:
        raise HTTPException(status_code=404, detail="Customer nahi mila")
    customer.name  = name
    customer.email = email
    customer.phone = phone
    db.commit()
    return {"msg": "Customer updated"}

@router.delete("/{id}")
def delete_customer(id: int, db: Session = Depends(get_db)):
    customer = db.query(Lead).filter(Lead.id == id).first()
    if not customer:
        raise HTTPException(status_code=404, detail="Customer nahi mila")
    db.delete(customer)
    db.commit()
    return {"msg": "Customer deleted"}